import { z } from "zod";

export const createUserFormSchema = z.object({
  company: z.string().min(1, { message: "Company is required" }),
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export type CreateUserFormSchema = z.infer<typeof createUserFormSchema>;
