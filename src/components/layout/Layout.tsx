import type { ReactNode } from 'react';// Importa ReactNode desde react
import Header, { HeaderProps } from './Header';// Importa Header
import Footer from './Footer';// Importa Footer



// Interfaz Props
interface Props extends HeaderProps {
    title: string;// Título
    children: ReactNode;// hijos
    
}

export default function Layout({ title, children , ...rest }: Props) {// Recibe title, children y ...rest
    return (
        <div>
            <Header { ...rest }/>   
            <main>
                <h2>{title}</h2>
                {children}
            </main>
            <Footer/>
        </div>
    );
}

