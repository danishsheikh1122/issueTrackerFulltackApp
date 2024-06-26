import { z } from "zod";

export const schema = z.object({
  title: z.string().min(5, "invalid issue title (length)").max(255),
  description: z.string().min(10, "invalid description length").max(65535),
});

// title and description a
// assignToUserId
// status

export const assignToSchema = z.object({
  title: z.string().min(5, "invalid issue title length").optional(),
  description: z
    .string()
    .min(5, "invalid issue description length")
    .max(65535)
    .optional(),
  assignToUserId: z
    .string()
    .min(1, "AssignedToUserId is required.")
    .max(255)
    .optional()
    .nullable(),
});
