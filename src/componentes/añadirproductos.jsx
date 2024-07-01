import  { useState, useEffect } from 'react';
//import { productsPOST, productsDelete, productsPUT, productsGET } from '../servicios/products'; 

const AgregaProductos = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [productos, setProductos] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [idEditando, setIdEditando] = useState(null);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    try {
      const data = await productsGET(); 
      setProductos(data);
    } catch (error) {
      console.error('Error al obtener productos:', error);
      
    }
  };

  const agregarProducto = async () => {
    if (!nombre.trim() || !descripcion.trim() || !precio.trim()) return;

    try {
      const nuevoProducto = { nombre, descripcion, precio };
      await productsPOST(nuevoProducto); 

      
      obtenerProductos();

      
      setNombre('');
      setDescripcion('');
      setPrecio('');
    } catch (error) {
      console.error('Error al agregar producto:', error);
    }
  };

  const eliminarProducto = async (id) => {
    try {
      await productsDelete(id); 
      obtenerProductos();
    } catch (error) {
      console.error('Error al eliminar producto:', error);
    }
  };

  const editarProducto = async () => {
    if (!nombre.trim() || !descripcion.trim() || !precio.trim()) return;

    try {
      const productoEditado = { nombre, descripcion, precio };
      await productsPUT(idEditando, productoEditado); 

      obtenerProductos();

      
      setNombre('');
      setDescripcion('');
      setPrecio('');
      setModoEdicion(false);
      setIdEditando(null);
    } catch (error) {
      console.error('Error al editar producto:', error);
    }
  };

  const handleAgregarEditar = (e) => {
    e.preventDefault();

    if (modoEdicion) {
      editarProducto();
    } else {
      agregarProducto();
    }
  };

  const handleEditar = (producto) => {
    setNombre(producto.nombre);
    setDescripcion(producto.descripcion);
    setPrecio(producto.precio);
    setModoEdicion(true);
    setIdEditando(producto.id);
  };

  return (
    <div>
      <h1>Lista de Productos</h1>
      <form onSubmit={handleAgregarEditar}>
        <input
          type="text"
          placeholder="Nombre del producto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripción del producto"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <input
          type="text"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <button type="submit">{modoEdicion ? 'Editar Producto' : 'Agregar Producto'}</button>
        {modoEdicion && (
          <button type="button" onClick={() => {
            setModoEdicion(false);
            setIdEditando(null);
            setNombre('');
            setDescripcion('');
            setPrecio('');
          }}>Cancelar</button>
        )}
      </form>
      
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - {producto.descripcion} - ${producto.precio}
            <button onClick={() => handleEditar(producto)}>Editar</button>
            <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AgregaProductos;