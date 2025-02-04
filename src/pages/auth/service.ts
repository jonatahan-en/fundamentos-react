// Importaciones necesarias
import { client, removeAuthorizationHeader, setAuthorizationHeader } from "../../api/client";  // Importa client para hacer peticiones HTTP
import storage from "../../utils/storage";
import { Credentials, Login } from "./types";  // Importa los tipos Credentials y Login

// Función asíncrona para hacer login
export const login = async (credentials: Credentials) => {
    // Realiza una petición POST a "/auth/login" enviando las credenciales
    const response = await client.post<Login>("/auth/login", credentials);

    // Extrae el accessToken de la respuesta
    const { accessToken } = response.data;

// Guarda el token en el almacenamiento local
storage.set("auth", accessToken);
    // Guarda el token en la cabecera de autorización
    setAuthorizationHeader(accessToken);
};

// Funcion para eliminar el token de la cabecera de autorización
export const logout = async () => {
    storage.remove("auth");  // Elimina el token del almacenamiento local
    // Elimina el token de la cabecera de autorización
    removeAuthorizationHeader();
};