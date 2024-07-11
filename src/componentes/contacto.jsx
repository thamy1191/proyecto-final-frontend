import  { useState } from 'react';

import Fit from '../img/p.jpg'
import "../styles/contact.css"



const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Formulario enviado:', { nombre, email, mensaje });
    
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <div className="contacto-container"> 
    
    <img src={Fit}/>
    
      <h1>Contáctanos</h1>
      <form className="contacto-form" onSubmit={handleSubmit}> 
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mensaje:</label>
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

 
export default Contacto;