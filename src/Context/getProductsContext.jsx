import { createContext, useContext, useEffect, useRef, useState } from "react"
import axios from "axios"

export const DataContext = createContext();

export function GetProductsContext({children}) {

    let API = useRef();
    let [api, setApi] = useState()


    useEffect(() => {

        axios.get('http://localhost:3002/products')
        .then(response => {

            RespuestaFuncion(response.data)
            //setApi(response.data)

        })

         function RespuestaFuncion(api) {
             API.current = api;
             setApi(api)
         }

    },[])


    



  return (
    <DataContext.Provider value={{API, api}} >
        {children}
    </DataContext.Provider>
  )
}

let UsarElContexto = () => useContext(DataContext)

export {UsarElContexto}
