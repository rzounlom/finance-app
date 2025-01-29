"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import { ClerkAPIError } from "@clerk/types";
import { InputOTPControlled } from "@/components/form/OTP";
import Link from "next/link";
import { SubmitButton } from "@/components/form/Buttons";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import { useRouter } from "next/navigation";
import { useSignUp } from "@clerk/nextjs";

export default function Page() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ClerkAPIError[]>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [verifying, setVerifying] = useState(false);
  const [code, setCode] = useState("");
  const router = useRouter();

  // Handle changes to the form inputs
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submission of the sign-up form
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors(undefined);

    if (!isLoaded) return;

    // Start the sign-up process using the email and password provided
    try {
      await signUp.create({
        emailAddress: formData.email,
        password: formData.password,
        unsafeMetadata: {
          name: formData.name,
        },
      });

      // Send the user an email with the verification code
      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      // Set 'verifying' true to display second form
      // and capture the OTP code
      setVerifying(true);
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      if (isClerkAPIResponseError(err)) setErrors(err.errors);
      console.error(JSON.stringify(err, null, 2));
    } finally {
      setLoading(false);
    }
  };

  // Handle the submission of the verification form
  const handleVerify = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!isLoaded) return;

    try {
      // Use the code the user provided to attempt verification
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.push("/");
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      if (isClerkAPIResponseError(err)) setErrors(err.errors);
      console.error(JSON.stringify(err, null, 2));
    } finally {
      setLoading(false);
    }
  };

  // Display the verification form to capture the OTP code
  if (verifying) {
    return (
      <form
        onSubmit={handleVerify}
        className="w-[90%] md:w-[59%] flex items-center"
      >
        <div className="w-full md:max-w-[500px] flex flex-1 flex-col justify-center p-[32px] shadow-md">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-2xl/9 font-bold tracking-tight text-gray-900 text-center">
              Verify your email
            </h2>
            <p className="mt-4 text-center">
              We sent a one-time passcode to {formData.email}
            </p>
          </div>
          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <InputOTPControlled
              onChange={(value) => setCode(value)}
              pin={code}
            />
            <div className="mt-4">
              <SubmitButton
                text="Verify"
                size="lg"
                loading={loading}
                className="flex h-[53px] items-center w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              />
            </div>
            {errors && (
              <span className="block mt-2 text-center text-sm/6 text-red-500">
                {errors.reduce((acc, error) => acc + " " + error.message, "")}
              </span>
            )}
          </div>
        </div>
      </form>
    );
  }

  // Display the initial sign-up form to capture the email and password
  return (
    <div className="w-[90%] md:w-[59%] flex items-center">
      <div className="w-full md:max-w-[560px] flex flex-1 flex-col justify-center p-[32px] shadow-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mt-10 text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign Up
          </h1>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="block w-full h-[45px] rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full h-[45px] rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="block w-full h-[45px] rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                />
                {!errors && (
                  <span className="block mt-2 text-end text-sm/6 text-gray-500">
                    Passwords must be a least 8 characters{" "}
                  </span>
                )}
                {errors && (
                  <span className="block mt-2 text-center text-sm/6 text-red-500">
                    {errors.reduce(
                      (acc, error) => acc + " " + error.message,
                      ""
                    )}
                  </span>
                )}
              </div>
            </div>
            {/* CAPTCHA Widget */}
            <div id="clerk-captcha"></div>
            <div>
              <SubmitButton
                text="Create Account"
                loading={loading}
                size="lg"
                className="flex h-[53px] items-center w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              />
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-semibold text-gray-900 hover:text-gray-700"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
