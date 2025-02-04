// Importaciones necesarias
import { client, setAuthorizationHeader } from "../../api/client";  // Importa client para hacer peticiones HTTP
import { Credentials, Login } from "./types";  // Importa los tipos Credentials y Login

// Función asíncrona para hacer login
export const login = async (credentials: Credentials) => {
    // Realiza una petición POST a "/auth/login" enviando las credenciales
    const response = await client.post<Login>("/auth/login", credentials);

    // Extrae el accessToken de la respuesta
    const { accessToken } = response.data;

    // Guarda el token en la cabecera de autorización
    setAuthorizationHeader(accessToken);
};
