import z from "zod";

const baseSchema = z.object({
  id: z.string().uuid().optional(),
  email: z.string().email(),
  name: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});
  

export const UserDTO = baseSchema.required()
  .describe("Represents a user definition");

export const NewUserDTO = baseSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
}).describe("Data Transfer Object for creating a new user");

export const UserPatchDTO = NewUserDTO.partial().omit({
}).describe("Data Transfer Object for updating an existing user");