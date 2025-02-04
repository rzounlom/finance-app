import { clerkClient, currentUser } from "@clerk/nextjs/server";

import db from "../db";
import { redirect } from "next/navigation";

type CreateUserProfile = {
  clerkId: string;
  email: string;
};

export const createUserAction = async ({
  clerkId,
  email,
}: CreateUserProfile) => {
  try {
    const client = await clerkClient();

    await db.user.create({
      data: {
        clerkId,
        email,
      },
    });
    await client.users.updateUserMetadata(clerkId, {
      privateMetadata: {
        hasProfile: true,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error creating user profile", { error });
    return { error: "Failed to create user profile" };
  }
};

export const createNewUser = async () => {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  if (!user?.privateMetadata?.hasProfile) {
    const res = await createUserAction({
      clerkId: user.id,
      email: user.emailAddresses[0].emailAddress,
    });

    if (res?.error) {
      redirect("/sign-in");
    }
  }
};
