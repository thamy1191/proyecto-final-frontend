import {useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usersGET from "../servicios/dataUsers/usersGet";
import '../styles/login.css'
import { UsarContexto } from "../context/ContextProvider";
import SweetAlert2 from 'react-sweetalert2';






function Loginform() {
    const { admin, setAdmin } = UsarContexto()
    const [usu, setUsu] = useState("");
    const [conta, setConta] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate()
    const[ SwalProps , setSwalProps] =useState({});

    const envioInicio = async () => {
     
        const admi = {
            id : "Admi",
            usuario : "admi-Thama",
            contrasena : "thama1234"
        }
        
        if (usu.trim() === "" || conta.trim() === "") {
            setError("Por favor llene los campos");
        } else {
            if (admi.usuario === usu && admi.contrasena === conta) {
                setAdmin(admin + 1)
               alert("bienvenido")
                setSwalProps({
                    show: true,
                    title: 'Bienvenido Admi',
                    text: 'Hello World',
                });
                navigate("/añadirproduct")
                localStorage.setItem("Admi-id", admi.id)
               
            }
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
<div className="pad">
<img className="about" src='src\assets\pesas.jpg' /> 
        <div className="log">

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
        <SweetAlert2 {...SwalProps} />
        </div>
       
</div>

    );
}

export default Loginform;
