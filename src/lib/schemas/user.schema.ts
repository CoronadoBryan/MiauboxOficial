import {z} from 'zod';

export const userSchema = z.object({
    telefono: z.string().min(9, {message: "El número de teléfono debe tener al menos 9 dígitos"}),
    medio: z.string(),
    status: z.enum(["ACTIVE", "INACTIVE"]),
    assignedTo: z.string().min(1, {message: "El campo assignedTo es requerido"})
});