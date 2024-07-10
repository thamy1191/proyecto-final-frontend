import { Routes, Route } from "react-router-dom"
import Register from "../pages/register"
import Login from "../pages/login"
import Contacto from "../pages/contacto"
import AboutUS from "../pages/aboutUS"
import Suplements from "../pages/suplemento"
import Homewe from "../pages/pagina"
import Añadirproduct from "../pages/añadirproduct"
import RutaPrivada from "./RutaPrivada"




const Rutas = () => {
  return (
    <div>
      <Routes>
                     <Route path='/registrar' element={<Register/>}   />
                     <Route path='/login'element ={<Login />} />
                     <Route path='/aboutUs'element ={<AboutUS/>} />
                     <Route path='/contacto'element ={<Contacto/>} />
                     <Route path='/suplementos'element ={<Suplements/>} />
                     <Route path='/home'element ={<Homewe/>} />
                      <Route path="/añadirproduct"  element = { <RutaPrivada >
                        <Añadirproduct />
                      </RutaPrivada>}/>








                     

                     

                     
                      
            </Routes>
    </div>
  )
}

export default Rutas
