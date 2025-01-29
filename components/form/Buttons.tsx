"use client";

import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
  loading?: boolean;
};

type btnSize = "default" | "lg" | "sm";
export function SubmitButton({
  className = "",
  text = "submit",
  size = "lg",
  loading = false,
}: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      disabled={loading}
      className={`${className}`}
      size={size}
    >
      {loading ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}
