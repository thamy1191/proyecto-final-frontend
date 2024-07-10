import { useState, useContext, createContext } from "react";

export const  ElContexto = createContext()

export  const ComparteCont = ({children}) => {
const [admin, setAdmin] = useState(0)
    return(
        <ElContexto.Provider value={{admin, setAdmin}}>
            {children}
        </ElContexto.Provider>
    )
}

export const UsarContexto = () => useContext(ElContexto)