import Card from 'react-bootstrap/Card';
import { productsGET } from '../servicios/products/productsGet';
import { useState } from 'react';
import { useEffect } from "react"
import '../styles/suplementos.css'


const Suplemento= () => {
  const [products, setProducts] = useState([])
  const obtenerProductos  = async ()  => {
     const productosObtenidos = await productsGET()
    setProducts(productosObtenidos)
  }
  useEffect(() => {
    obtenerProductos()
  }, []);
  console.log(products);
  return (
    <div>
      <div>
        <h4>Productos Disponibles</h4>
        
    </div>
    <div className='productos'>
       {products.map((produc, index) => (
          <ul key={index}>
            <Card style={{ width: '-30rem', fontFamily : "Sterling" }}>
              <Card.Img variant="top" src= {produc.url} />
              <Card.Body>
                <Card.Title>{produc.nombre}</Card.Title>
                <Card.Text>
                {produc.descripcion}  <br /> {produc.material} <br />
                  {produc.precio}  <br /> {produc.material} <br />

                </Card.Text>
              </Card.Body>
            </Card>
          </ul>
      ))}
    </div>
    </div>
  )
}
export default Suplemento