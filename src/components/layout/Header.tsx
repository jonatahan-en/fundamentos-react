import { logout } from "../../pages/auth/service";// Importa la función logout de service
import Button from "../Button";// Importa el componente Button

// Interfaz Props
export interface HeaderProps {
    onLogout: () => void;// Función onLogout
    isLogged: boolean;// Booleano isLogged
}

// Componente Header
export default function Header({ onLogout, isLogged }: HeaderProps) {// Recibe onLogout y isLogged
    const handleLogoutClick = async () => {// Función handleLogoutClick
        await logout();// Llama a la función logout
        onLogout();// Llama a la función onLogout
    };
    return (
        <header>
            <div> </div>
            <nav>
                { isLogged ? (// Si isLogged es true
                <Button
                    onClick={handleLogoutClick}// onClick llama a la función handleLogoutClick
                    $variant="secondary"// $variant es "secondary"
                >Logout
                </Button>
                ) : (
                <Button $variant="primary">Login</Button>// Si no, $variant es "primary"
                )}
            </nav>
        </header>
    );
}