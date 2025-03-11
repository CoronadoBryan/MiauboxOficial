import {z} from 'zod';

export const userSchema = z.object({
    telefono: z.string().min(9, {message: "El número de teléfono debe tener al menos 9 dígitos"}),
    medio: z.string(),
    status: z.enum(["ACTIVE", "INACTIVE"])
});