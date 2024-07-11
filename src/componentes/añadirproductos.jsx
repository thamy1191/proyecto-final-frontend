import { useState, useEffect } from 'react';
import { productsGET } from '../servicios/products/productsGet';
import productsPOST from "../servicios/products/productsPost";
import ProductsPUT from '../servicios/products/productsPut';
import ProductsDELETE from "../servicios/products/productsDelete";
import '../styles/añadir.css';

const AgregaProductos = () => {
  // Estados para manejar el formulario y la lista de productos
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [mensaje, setMensaje] = useState("");
  const [imagen, setImagen] = useState('');
  const [productos, setProductos] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false); // Estado para controlar modo de edición
  const [idEditando, setIdEditando] = useState(null); // Estado para almacenar el id del producto en edición

  // useEffect para obtener los productos al cargar el componente
  useEffect(() => {
    obtenerProductos();
  }, []);

  // Función asíncrona para obtener la lista de productos
  const obtenerProductos = async () => {
    try {
      const data = await productsGET();
      setProductos(data); // Actualiza el estado con la lista de productos obtenida
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };

  // Función asíncrona para agregar un nuevo producto
  const agregarProducto = async () => {
    if (!nombre.trim() && !descripcion.trim() && !precio.trim()) {
      setMensaje("Agregar datos"); // Si no se ingresan datos, muestra un mensaje de error
    } else {
      await productsPOST(nombre, precio, descripcion, imagen); // Llama al servicio para agregar el producto
      obtenerProductos(); // Actualiza la lista de productos
      // Limpia los campos del formulario después de agregar el producto
      setNombre('');
      setDescripcion('');
      setPrecio('');
    }
  };

  // Función asíncrona para eliminar un producto
  const eliminarProducto = async (id) => {
    await ProductsDELETE(id); // Llama al servicio para eliminar el producto
    obtenerProductos(); // Actualiza la lista de productos
    setMensaje("Agregar datos"); // Restaura el mensaje por defecto
  };

  // Función asíncrona para editar un producto
  const editarProducto = async () => {
    if (!nombre.trim() || !descripcion.trim() || !precio.trim() || !imagen.trim()) return;
    try {
      const productoEditado = { nombre, descripcion, precio, imagen };
      await ProductsPUT(idEditando, productoEditado); // Llama al servicio para actualizar el producto
      obtenerProductos(); // Actualiza la lista de productos
      // Limpia los campos del formulario después de editar el producto
      setNombre('');
      setDescripcion('');
      setPrecio('');
      setModoEdicion(false); // Desactiva el modo de edición
      setIdEditando(null); // Resetea el id de edición
    } catch (error) {
      console.error('Error al editar producto:', error);
    }
  };

  // Función para manejar el envío del formulario (agregar o editar producto)
  const handleAgregarEditar = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    if (modoEdicion) {
      editarProducto(); // Si está en modo edición, llama a la función para editar
    } else {
      agregarProducto(); // Si no está en modo edición, llama a la función para agregar
    }
  };

  // Función para manejar la edición de un producto
  const handleEditar = (producto) => {
    // Establece los valores del producto seleccionado en el formulario para edición
    setNombre(producto.nombre);
    setDescripcion(producto.descripcion);
    setPrecio(producto.precio);
    setImagen(producto.url); // Establece la imagen del producto para edición
    setModoEdicion(true); // Activa el modo de edición
    setIdEditando(producto.id); // Guarda el id del producto en edición
  };

  // Renderiza el componente
  return (
    <div className="img">
      <h1>Lista de Productos</h1>
      <h4>{mensaje}</h4>
      {/* Formulario para agregar o editar productos */}
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
        <input
          type="text"
          placeholder="Imagen"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
        />
        {/* Botón para enviar el formulario (agregar o editar) */}
        <button type="submit">{modoEdicion ? 'Editar Producto' : 'Agregar Producto'}</button>
        {/* Botón para cancelar la edición */}
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
      
      {/* Lista de productos */}
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - {producto.descripcion} - ${producto.precio}
            {/* Botones para editar y eliminar cada producto */}
            <button onClick={() => handleEditar(producto)}>Editar</button>
            <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
            <img src={producto.url} alt="" style={{ width: "100px" }} /> {/* Muestra la imagen del producto */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AgregaProductos;