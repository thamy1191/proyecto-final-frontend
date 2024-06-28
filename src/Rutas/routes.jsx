import { Routes, Route } from "react-router-dom"
import Home from "../pages/home"
import Register from "../pages/register"
import Login from "../pages/login"






const Rutas = () => {
  return (
    <div>
      <Routes>
                     <Route path='/registrar' element={<Register/>}   />
                     <Route path='/inicio' element={<Home/>}   />
                     <Route path='/login'element ={<Login />} />
                     
                      
            </Routes>
    </div>
  )
}

export default Rutas
