

import  { useState } from 'react';

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar lógica para enviar el formulario (por ejemplo, a través de una API)
    console.log('Formulario enviado:', { nombre, email, mensaje });
    // Aquí podrías resetear los estados de los inputs después de enviar el formulario
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <div>
      <h1>Contáctanos</h1>
      <form onSubmit={handleSubmit}>
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