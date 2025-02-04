// Importaciones necesarias
//import { FormEvent } from "react";  // Importa el tipo FormEvent para manejar eventos de formularios en React
import React, { useState } from "react";  // Importa React y el hook useState para manejar estado
import { ClipLoader } from "react-spinners";// Importa el spinner de carga de la librería react-spinners
import Button from "../../components/Button";  // Importa un componente de botón desde otra carpeta
import { login } from "./service";  // Importa la función login desde el archivo service.ts

// Definición de la interfaz de las props que recibe este componente
interface Props {
  onLogin: (message: string) => void;  // Función que recibe un mensaje y no retorna nada
}

// Componente funcional de la página de login
function LoginPage({ onLogin }: Props) {
  // Hooks para manejar el estado del username y password
  const [username, setUsername] = useState("");  // Estado para el nombre de usuario
  const [password, setPassword] = useState("");  // Estado para la contraseña
  const [loading, setLoading] = useState(false);  // Estado para mostrar un spinner de carga

    // Función para manejar el envío del formulario
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();  // Previene el comportamiento por defecto del formulario (recargar la página)
        setLoading(true);  // Muestra el spinner de carga
        try {
        // Llama a la función login pasándole el username y password como credenciales
        const response = await login({
            //username:event.currentTarget.username.value,// Nombre de usuario ingresado en el input
            //password:event.currentTarget.password.value,// Contraseña ingresada en el input
            username,  // Nombre de usuario ingresado en el input
            password,  // Contraseña ingresada en el input
        });

        console.log(response);  // Muestra la respuesta de la API en la consola
        onLogin("hello");  // Llama a la función onLogin pasando un mensaje "hello"

        } catch (error) {
        console.error(error);  // Muestra el error en la consola si algo sale mal
        }finally {
        setLoading(false);  // Oculta el spinner de carga
        }
    };

    // Maneja el cambio en el input del nombre de usuario
    const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);  // Actualiza el estado con el valor del input
    };

    // Maneja el cambio en el input de la contraseña
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);  // Actualiza el estado con el valor del input
    };

    // Calcula si el botón de login debe estar deshabilitado
    const isDisabled = !username || !password || loading;  // si no hay username, password o está cargando, deshabilita el botón

    return (
        <div>
        <h1>Log in to Twitter</h1>
        <form onSubmit={handleSubmit}>  {/* Llama a handleSubmit cuando se envía el formulario */}
            <label className="block">
            Username:
            <input
                type="text"
                name="username"
                value={username}  // Asigna el estado username al input
                onChange={handleUserNameChange}  // Llama a handleUserNameChange al escribir en el input
            />
            </label>

            <label className="block">
            Password:
            <input
                type="password"
                name="password"
                value={password}  // Asigna el estado password al input
                onChange={handlePasswordChange}  // Llama a handlePasswordChange al escribir en el input
            />
            </label>

            {/* Botón de login que se deshabilita si falta el username o la password */}
            <Button type="submit" $variant="primary" disabled={isDisabled}>
            {loading ? <ClipLoader color="white" size={20} /> : "Log in"}  {/* Muestra el spinner */}
            </Button>
        </form>
        </div>
    );
}

export default LoginPage;  // Exporta el componente para que pueda usarse en otros archivos
