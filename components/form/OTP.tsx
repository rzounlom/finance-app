"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { FC } from "react";

interface InputOTPControlledProps {
  onChange: (value: string) => void;
  pin: string;
}

export const InputOTPControlled: FC<InputOTPControlledProps> = ({
  onChange,
  pin,
}) => {
  return (
    <div className="w-full h-20 flex flex-col items-center justify-center">
      <InputOTP maxLength={6} value={pin} onChange={onChange}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <div className="text-center text-sm mt-4">
        {pin === "" ? (
          <>Enter your one-time password.</>
        ) : (
          <>You entered: {pin}</>
        )}
      </div>
    </div>
  );
};
