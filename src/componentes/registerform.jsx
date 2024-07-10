import {useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import usersPost from "../servicios/dataUsers/usersPost"


function Registerform() {
  
    const [usuario, setUsuario] = useState("")
    const [contrasena, setContraseña] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

const mostrar = async ()=>{
    
    if (usuario.trim("") === "" && contrasena.trim("") === "") {
        setError("Ingrese un texto")
        return
    }else{
        try {
            const datos = await usersPost(usuario, contrasena); 
            console.log("datos", datos)
            const user = datos.find((user) => user.usuario === usuario )
            console.log("usuario encontrado", user)
            if (user) {
                if (user.contrasena === contrasena) {
                  setError("Inicio de sesión exitoso");
                    navigate("/login")
                } else {
                  setError("Usuario y contraseña no coinciden");
                }
            } 
        } catch (error) {
            console.error(error);
            setError("Error al intentar iniciar sesión");
        }
        alert("registro exitoso")
    }
}

  return (
    <div className="login">
        <h3>{error}</h3>
        <label htmlFor="">Usuario : </label>
        <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)}/>
        <br /><br />
        <label htmlFor="">contraseña : </label>
        <input type="text" value={contrasena} onChange={e => setContraseña(e.target.value)}/>
        <br /><br />
        <button onClick={mostrar}><Link to='/login'>registar usuario</Link></button>

    </div>
  )

}
 

export default Registerform
