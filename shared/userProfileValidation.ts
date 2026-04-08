// C:\wastedriver\shared\userProfileValidation.ts
import { z } from "zod";

export const userProfileSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number is required"),
  addressStreet: z.string().min(1, "Street address is required"),
  addressCity: z.string().min(1, "City is required"),
  addressProvince: z.string().min(2, "Province is required"),
  addressPostalCode: z.string().min(5, "Postal code is required"),
});

export type UserProfileFormValues = z.infer<typeof userProfileSchema>;