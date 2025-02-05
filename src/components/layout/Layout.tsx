import type { ReactNode } from 'react';// Importa ReactNode desde react
import Header from './Header';// Importa Header
import Footer from './Footer';// Importa Footer



// Interfaz Props
interface Props  {
    title: string;// Título
    children: ReactNode;// hijos
    
}

export default function Layout({ title, children }: Props) {// Recibe title, children y ...rest
    return (
        <div>
            <Header />   
            <main>
                <h2>{title}</h2>
                {children}
            </main>
            <Footer/>
        </div>
    );
}

