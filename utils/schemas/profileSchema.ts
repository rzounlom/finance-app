import * as z from "zod";

export const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "first name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "last name must be at least 2 characters" }),
  username: z
    .string()
    .min(2, { message: "user name must be at least 2 characters" }),
});
