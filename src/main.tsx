import { StrictMode } from 'react';// Importa StrictMode
import { createRoot } from 'react-dom/client';// Importa createRoot
import "./index.css";// Importa el archivo index.css
import App from './App.tsx';// Importa el componente App
import storage from './utils/storage.ts';// Importa el módulo storage.ts
import { setAuthorizationHeader } from './api/client.ts';// Importa la función setAuthorizationHeader


const accessToken = storage.get("auth");// Obtiene el token de autenticación del almacenamiento local
if(accessToken) {
	setAuthorizationHeader(accessToken);  // Si hay un token, lo añade a la cabecera de autorización
}
createRoot(document.getElementById('root')!).render(// Renderiza el componente App en el elemento con id 'root'
	// <StrictMode> envuelve la aplicación para detectar problemas potenciales en el código
	<StrictMode>
		<App defaultIsLogged={ !!accessToken } /> 
	</StrictMode>,
);
