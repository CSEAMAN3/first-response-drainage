import { z } from "zod";

const trimmedString = (label: string, min = 1, max = 100) =>
  z
    .string()
    .transform((v) => v.trim())
    .refine((v) => v.length >= min, { message: `${label} is required` })
    .refine((v) => v.length <= max, {
      message: `${label} must be ${max} characters of less`,
    });

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phoneSchema = z
  .string()
  .transform((v) => v.trim())
  .refine((v) => v.length > 0, { message: "Phone number is required" })
  // allow common phone characters
  .refine((v) => /^[0-9+\-()\s]+$/.test(v), {
    message: "Enter a valid phone number",
  })
  // require enough digits (ignoring formatting chars)
  .refine((v) => v.replace(/\D/g, "").length >= 10, {
    message: "Phone number must include at least 10 digits",
  })
  .refine((v) => v.length <= 25, {
    message: "Phone number must be 25 characters or less",
  });

export const ContactFormSchema = z.object({
  name: trimmedString("Name", 1, 80),

  phone: phoneSchema,

  email: z
    .string()
    .transform((v) => v.trim())
    .refine((v) => v.length > 0, { message: "Email is required" })
    .refine((v) => emailRegex.test(v), {
      message: "Enter a valid email address",
    })
    .refine((v) => v.length <= 254, {
      message: "Email must be 254 characters or less",
    }),

  location: trimmedString("Location", 1, 80),

  services: z
    .array(z.string().transform((v) => v.trim()))
    .min(1, { message: "Please select at least one service" })
    .max(3, { message: "Please select up to 3 services" }),

  message: z
    .string()
    .transform((v) => v.trim())
    .refine((v) => v.length >= 10, {
      message: "Message must be at least 10 characters",
    })
    .refine((v) => v.length <= 2000, {
      message: "Message must be 2000 characters or less",
    }),
  honeypot: z.literal(""),
});
