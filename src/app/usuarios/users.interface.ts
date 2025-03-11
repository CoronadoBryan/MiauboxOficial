export type UserStatus = "ACTIVE" | "INACTIVE";

export interface User {
    id: number;
    telefono: string;
    medio: string;
    observacion: string;
    status: UserStatus;
}