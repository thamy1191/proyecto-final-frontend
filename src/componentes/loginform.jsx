import {useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usersGET from "../servicios/dataUsers/usersGet";
import '../styles/login.css'


function Loginform() {
    const [usu, setUsu] = useState("");
    const [conta, setConta] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate()

    const envioInicio = async () => {
        
        if (usu.trim() === "" || conta.trim() === "") {
            setError("Por favor llene los campos");
        } else {
            try {
                const datos = await usersGET(); 
                console.log("datos", datos)
                const user = datos.find((user) => user.usuario === usu)
                console.log("usuario encontrado", user)
                if (user) {
                    if (user.contrasena === conta) {
                        setMsg("Inicio de sesión exitoso");
                        navigate("/inicio")
                    } else {
                        setMsg("Usuario y contraseña no coinciden");
                    }
                } 
            } catch (error) {
                console.error(error);
                setMsg("Error al intentar iniciar sesión");
            }
        }
    };

    return (
        <div className="login">
            <h3>{error}</h3>
            <h3>{msg}</h3>
            <label htmlFor="">Usuario: </label>
            <input type="text" value={usu} onChange={(e) => setUsu(e.target.value)} />
            <br /><br />
            <label htmlFor="">Contraseña: </label>
            <input type="password" value={conta} onChange={(e) => setConta(e.target.value)} />
            <br /><br />
            <button><Link to='/registrar'>Ir a registrarme</Link></button>
            <button onClick={envioInicio}>Iniciar</button>
        </div>
    );
}

export default Loginform;
