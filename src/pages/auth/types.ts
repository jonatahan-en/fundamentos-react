// Define la interfaz de las credenciales para hacer login
export interface Credentials {
    username: string;  // Nombre de usuario (debe ser un string)
    password: string;  // Contraseña (debe ser un string)
}

    // Define la estructura de la respuesta de login
export interface Login {
    accessToken: string;  // Token de acceso que devuelve la API
}
