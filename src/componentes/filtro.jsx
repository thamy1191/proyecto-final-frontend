 import  { useState,  } from 'react';

 const ListaElementos = () => {
  const [elementos, ] = useState([
   { id: 1, nombre: 'Elemento 1', categoria: 'A' },
   { id: 2, nombre: 'Elemento 2', categoria: 'B' },
   { id: 3, nombre: 'Elemento 3', categoria: 'A' },
   { id: 4, nombre: 'Elemento 4', categoria: 'C' },
 ]);

const [filtroCategoria, setFiltroCategoria] = useState('');

  const handleCategoriaChange = (e) => {
   setFiltroCategoria(e.target.value);
  };

  const elementosFiltrados = elementos.filter((elemento) =>
    filtroCategoria ? elemento.categoria === filtroCategoria : true
  );

  return (
   <div>
     <h2>Lista de Elementos</h2>
    <select value={filtroCategoria} onChange={handleCategoriaChange}>
      <option value="">Todas</option>
      <option value="A">Categoría A</option>
      <option value="B">Categoría B</option>
      <option value="C">Categoría C</option>
   </select>
    <ul>
       {elementosFiltrados.map((elemento) => (
        <li key={elemento.id}>{elemento.nombre} - {elemento.categoria}</li>
      ))}
     </ul>
   </div>
 );
 };

 export default ListaElementos;
