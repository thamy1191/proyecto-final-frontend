import {useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import usersPost from "../servicios/dataUsers/usersPost"
import '../styles/login.css'


function Registerform() {
    const [usuario, setUsuario] = useState(""); // Estado para el nombre de usuario
    const [contrasena, setContraseña] = useState(""); // Estado para la contraseña
    const [error, setError] = useState(""); // Estado para mensajes de error
    const navigate = useNavigate(); // Función de navegación de React Router

    const mostrar = async () => {
        // Validación de campos vacíos
        if (usuario.trim("") === "" && contrasena.trim("") === "") {
            setError("Ingrese un texto");
            return;
        } else {
            try {
                // Llamada a la API para registrar un nuevo usuario
                const datos = await usersPost(usuario, contrasena);
                console.log("datos", datos);
                // Busca el usuario registrado en los datos devueltos
                const user = datos.find((user) => user.usuario === usuario);
                console.log("usuario encontrado", user);
                if (user) {
                    // Verifica si la contraseña coincide con la almacenada
                    if (user.contrasena === contrasena) {
                        setError("Inicio de sesión exitoso");
                        navigate("/login"); // Redirige a la página de inicio de sesión
                    } else {
                        setError("Usuario y contraseña no coinciden");
                    }
                } 
            } catch (error) {
                console.error(error);
                setError("Error al intentar iniciar sesión");
            }
            alert("registro exitoso"); // Muestra una alerta de registro exitoso
        }
    };

    // Renderiza el componente de formulario de registro
    return (
        <div className="login">
            <img className="about" src='src\assets\pesas.jpg' />
            
            <h3>{error}</h3> {/* Muestra mensajes de error */}
            <label htmlFor="">Usuario : </label>
            <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)} /> {/* Input para el nombre de usuario */}
            <br /><br />
            <label htmlFor="">Contraseña : </label>
            <input type="password" value={contrasena} onChange={e => setContraseña(e.target.value)} /> {/* Input para la contraseña */}
            <br /><br />
            <button onClick={mostrar}><Link to='/login'>Registrar usuario</Link></button> {/* Botón para registrar al usuario */}
           
        </div>
    );
}

export default Registerform;