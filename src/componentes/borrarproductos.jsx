

const Delete = (producto, deleteproducto ) => {
  return (
    <ul>
      {producto.map(proyecto => (
        <li key={proyecto.id}>
          {producto.nombre} - {proyecto.descripcion}
          <button onClick={() => deleteproducto(producto.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default Delete;
