import {useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usersGET from "../servicios/dataUsers/usersGet";
import '../styles/login.css'
import { UsarContexto } from "../context/ContextProvider";
import SweetAlert2 from 'react-sweetalert2';






function Loginform() {
    const { admin, setAdmin } = UsarContexto(); // Usa el contexto para obtener y establecer el estado 'admin'
    const [usu, setUsu] = useState(""); // Estado para el nombre de usuario
    const [conta, setConta] = useState(""); // Estado para la contraseña
    const [error, setError] = useState(""); // Estado para mensajes de error
    const [msg, setMsg] = useState(""); // Estado para mensajes informativos
    const navigate = useNavigate(); // Función de navegación de React Router
    const [SwalProps, setSwalProps] = useState({}); // Estado para configurar SweetAlert2

    const envioInicio = async () => {
        // Usuario administrador (pagina privada)
        const admi = {
            id: "Admi",
            usuario: "admi-Thama",
            contrasena: "thama1234"
        };

        // Validación de campos vacíos
        if (usu.trim() === "" || conta.trim() === "") {
            setError("Por favor llene los campos");
        } else {
            // Inicio de sesión como administrador
            if (admi.usuario === usu && admi.contrasena === conta) {
                setAdmin(admin + 1); // Incrementa el contador de administrador
                alert("bienvenido"); // Muestra una alerta básica (debería cambiarse a SweetAlert2)
                setSwalProps({
                    show: true,
                    title: 'Bienvenido Admi',
                    text: 'Hello World',
                });
                navigate("/añadirproduct"); // Redirige a la página de añadir productos
                localStorage.setItem("Admi-id", admi.id); // Almacena el ID del administrador en localStorage
            } else {
                try {
                    // Consulta a la API para obtener los datos de los usuarios
                    const datos = await usersGET(); 
                    console.log("datos", datos);
                    // Busca el usuario ingresado en la lista de usuarios
                    const user = datos.find((user) => user.usuario === usu);
                    console.log("usuario encontrado", user);
                    if (user) {
                        // Verifica si la contraseña ingresada coincide con la almacenada
                        if (user.contrasena === conta) {
                            setMsg("Inicio de sesión exitoso"); // Mensaje de inicio de sesión exitoso
                            navigate("/inicio"); // Redirige a la página de inicio
                        } else {
                            setMsg("Usuario y contraseña no coinciden"); // Mensaje de error de contraseña
                        }
                    } 
                } catch (error) {
                    console.error(error);
                    setMsg("Error al intentar iniciar sesión"); // Mensaje de error general
                }
            }
        }
    };

    // Renderizado del componente de formulario de inicio de sesión
    return (
        <div className="pad">
            <img className="about" src='src\assets\pesas.jpg' /> {/* Imagen del encabezado */}
            <div className="log">
                <div className="login">
                    <h3>{error}</h3> {/* Muestra mensajes de error */}
                    <h3>{msg}</h3> {/* Muestra mensajes informativos */}
                    <label htmlFor="">Usuario: </label>
                    <input type="text" value={usu} onChange={(e) => setUsu(e.target.value)} /> {/* Input de usuario */}
                    <br /><br />
                    <label htmlFor="">Contraseña: </label>
                    <input type="password" value={conta} onChange={(e) => setConta(e.target.value)} /> {/* Input de contraseña */}
                    <br /><br />
                    <button><Link to='/registrar'>Ir a registrarme</Link></button> {/* Botón para ir a la página de registro */}
                    <button onClick={envioInicio}>Iniciar</button> {/* Botón para enviar el formulario de inicio de sesión */}
                </div>
                <SweetAlert2 {...SwalProps} /> {/* Componente SweetAlert2 para mostrar alertas */}
            </div>
        </div>
    );
}

export default Loginform;