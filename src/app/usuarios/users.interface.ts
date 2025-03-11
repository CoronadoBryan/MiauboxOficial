export type UserStatus = "ACTIVE" | "INACTIVE";

export interface User {
    id: number;
    telefono: string;
    medio: string;
    status: UserStatus;
    assignedTo?: string;
}