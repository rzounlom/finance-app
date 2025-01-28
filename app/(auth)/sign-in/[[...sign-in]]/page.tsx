"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import { ClerkAPIError } from "@clerk/types";
import Link from "next/link";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import { useRouter } from "next/navigation";
import { useSignIn } from "@clerk/nextjs";

export default function SignInPage() {
  const router = useRouter();
  const { isLoaded, signIn, setActive } = useSignIn();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ClerkAPIError[]>();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle changes to the form inputs
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle the submission of the sign-in form
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Clear any errors that may have occurred during previous form submission
    setErrors(undefined);

    if (!isLoaded) return;

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: formData.email,
        password: formData.password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.push("/");
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
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

  // Display a form to capture the user's email and password
  return (
    <div className="w-[90%] md:w-[59%] flex items-center">
      <div className="w-full md:max-w-[560px] flex flex-1 flex-col justify-center p-[32px] shadow-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-2xl/9 font-bold tracking-tight text-gray-900">
            Login
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
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
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  autoComplete="email"
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
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  autoComplete="current-password"
                  className="block w-full h-[45px] rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
                className="flex w-full h-[53px] items-center justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
              {errors && (
                <span className="block mt-2 text-center text-sm/6 text-red-500">
                  {errors.reduce((acc, error) => acc + " " + error.message, "")}
                </span>
              )}
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Need to create an account?{" "}
            <Link
              href="/sign-up"
              className="font-semibold text-gray-900 hover:text-gray-700"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
