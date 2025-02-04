"use client";

import { useClerk } from "@clerk/nextjs";

export default function HomePage() {
  const { signOut, user } = useClerk();

  console.log({ user });
  return (
    <div>
      Logged in as {user && user.emailAddresses[0].emailAddress} <br />
      <button onClick={() => signOut({ redirectUrl: "/sign-in" })}>
        Sign out
      </button>
    </div>
  );
}
