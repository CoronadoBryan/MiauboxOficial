import { User } from "./users.interface";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export const getUsers = async (): Promise<{ users: User[] }> => {
  try {
    const response = await fetch(`${API_URL}/users`);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    throw new Error("No se pudieron cargar los usuarios");
  }
};
