import { useState, useContext, createContext } from "react";

// Crea un contexto llamado ElContexto
export const ElContexto = createContext();

// Crea un componente funcional llamado ComparteCont que acepta children como argumento
export const ComparteCont = ({children}) => {
    const [admin, setAdmin] = useState(0); // Declara el estado admin inicializado en 0

    return (
        <ElContexto.Provider value={{ admin, setAdmin }}>
            {children} {/* Renderiza los componentes hijos encapsulados dentro del proveedor de contexto */}
        </ElContexto.Provider>
    );
}

// Crea un hook personalizado llamado UsarContexto que utiliza el contexto ElContexto
export const UsarContexto = () => useContext(ElContexto);