import  { useState, useEffect } from 'react';
import { productsGET } from '../servicios/products/productsGet';
import productsPOST from "../servicios/products/productsPost"
import ProductsPUT from '../servicios/products/productsPut';
import ProductsDELETE from "../servicios/products/productsDelete"
import '../styles/añadir.css'



const AgregaProductos = () => {
 
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [mensaje, setMensaje] = useState("")
  const [imagen, setImagen] = useState('');
  const [productos, setProductos] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [idEditando, setIdEditando] = useState(null);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    try {
      const data = await productsGET(); 
      setProductos(data
        
      );
    } catch (error) {
      console.error('Error al obtener productos:', error);
      
    }
  };

  const agregarProducto = async () => {
    if (!nombre.trim() && !descripcion.trim() && !precio.trim()) {
          setMensaje("Agregar datos")
    }else{
      await productsPOST(nombre, precio ,descripcion, imagen); 
      obtenerProductos();
      setNombre('');
      setDescripcion('');
      setPrecio('');
    }
  }

  const eliminarProducto = async (id) => {
      await ProductsDELETE(id); 
      obtenerProductos();
  };

  const editarProducto = async () => {
    if (!nombre.trim() || !descripcion.trim() || !precio.trim()) return;

    try {
      const productoEditado = { nombre, descripcion, precio };
      await ProductsPUT(idEditando, productoEditado); 
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
      <h4>{mensaje}</h4>
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
          <ul key={producto.id}>
            {producto.nombre} - {producto.descripcion} - ${producto.precio}
            <button onClick={() => handleEditar(producto)}>Editar</button>
            <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
            <img src={producto.url} alt="" style={{width : "100px"}} />
          </ul>
        ))}
      </ul>
    </div>
  );

};

export default AgregaProductos 