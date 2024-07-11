import  { useState } from 'react';

import Fit from '../img/p.jpg'
import "../styles/contact.css"



const Contacto = () => {
  // Estados para manejar los campos del formulario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto de envío del formulario
    
    // Muestra en consola los datos del formulario
    console.log('Formulario enviado:', { nombre, email, mensaje });
    
    // Limpia los campos del formulario después de enviarlo
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  // Renderiza el componente de Contacto
  return (
    <div className="contacto-container"> 
      <img src={Fit} /> 
      <h1>Contáctanos</h1>
      {/* Formulario de contacto */}
      <form className="contacto-form" onSubmit={handleSubmit}> 
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} // Actualiza el estado 'nombre' al escribir en el input
            required // Campo obligatorio
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Actualiza el estado 'email' al escribir en el input
            required // Campo obligatorio
          />
        </div>
        <div>
          <label>Mensaje:</label>
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)} // Actualiza el estado 'mensaje' al escribir en el textarea
            required // Campo obligatorio
          />
        </div>
        <button type="submit">Enviar</button> {/* Botón para enviar el formulario */}
      </form>
    </div>
  );
};

export default Contacto;