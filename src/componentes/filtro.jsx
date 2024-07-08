//  import  { useState,  } from 'react';

// const ListaElementos = () => {
//   const [elementos, ] = useState([
//     { id: 1, nombre: 'Elemento 1', categoria: 'A' },
//     { id: 2, nombre: 'Elemento 2', categoria: 'B' },
//     { id: 3, nombre: 'Elemento 3', categoria: 'A' },
//     { id: 4, nombre: 'Elemento 4', categoria: 'C' },
//   ]);

//   const [filtroCategoria, setFiltroCategoria] = useState('');

//   const handleCategoriaChange = (e) => {
//     setFiltroCategoria(e.target.value);
//   };

//   const elementosFiltrados = elementos.filter((elemento) =>
//     filtroCategoria ? elemento.categoria === filtroCategoria : true
//   );

//   return (
//     <div>
//       <h2>Lista de Elementos</h2>
//       <select value={filtroCategoria} onChange={handleCategoriaChange}>
//         <option value="">Todas</option>
//         <option value="A">Categoría A</option>
//         <option value="B">Categoría B</option>
//         <option value="C">Categoría C</option>
//       </select>
//       <ul>
//         {elementosFiltrados.map((elemento) => (
//           <li key={elemento.id}>{elemento.nombre} - {elemento.categoria}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ListaElementos;
import  { useState, useEffect } from 'react';

const AgregarPage = () => {
  const [nombre, setNombre] = useState('');
  const [localizacion, setLocalizacion] = useState('');
  const [classID, setClassID] = useState(0);
  const [efecto1, setEfecto1] = useState(0);
  const [efecto2, setEfecto2] = useState(0);
  const [efecto3, setEfecto3] = useState(0);
  const [efecto4, setEfecto4] = useState(0);
  const [ingredientes, setIngredientes] = useState([]);

  useEffect(() => {
    const ingredientesGuardados = localStorage.getItem('ingredientes');
    if (ingredientesGuardados) {
      setIngredientes(JSON.parse(ingredientesGuardados));
    }
  }, []);

  const guardarIngredientes = () => {
    const nuevoIngrediente = {
      nombre,
      localizacion,
      classID,
      efecto1,
      efecto2,
      efecto3,
      efecto4
    };

    const nuevosIngredientes = [...ingredientes, nuevoIngrediente];
    setIngredientes(nuevosIngredientes);
    localStorage.setItem('ingredientes', JSON.stringify(nuevosIngredientes));

    // Limpiar el formulario
    setNombre('');
    setLocalizacion('');
    setClassID(0);
    setEfecto1(0);
    setEfecto2(0);
    setEfecto3(0);
    setEfecto4(0);
  };

  return (
    <div>
      <h1>Agregar Ingrediente</h1>
      <form onSubmit={(e) => { e.preventDefault(); guardarIngredientes(); }}>
        <div>
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
          <label>Localización:</label>
          <input type="text" value={localizacion} onChange={(e) => setLocalizacion(e.target.value)} />
        </div>
        <div>
          <label>Class ID:</label>
          <input type="number" value={classID} onChange={(e) => setClassID(Number(e.target.value))} />
        </div>
        <div>
          <label>Efecto 1:</label>
          <input type="number" value={efecto1} onChange={(e) => setEfecto1(Number(e.target.value))} />
        </div>
        <div>
          <label>Efecto 2:</label>
          <input type="number" value={efecto2} onChange={(e) => setEfecto2(Number(e.target.value))} />
        </div>
        <div>
          <label>Efecto 3:</label>
          <input type="number" value={efecto3} onChange={(e) => setEfecto3(Number(e.target.value))} />
        </div>
        <div>
          <label>Efecto 4:</label>
          <input type="number" value={efecto4} onChange={(e) => setEfecto4(Number(e.target.value))} />
        </div>
        <button type="submit">Guardar Ingrediente</button>
      </form>
    </div>
  );
};

export default AgregarPage;