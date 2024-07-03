

import Card from 'react-bootstrap/Card';
import { productsGET } from '../servicios/products/productsGet';
import { useState } from 'react';
import { useEffect } from "react"
//import "../css/card.css"
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
        <br />
    </div>
    <div className='productos'>
       {products.map((produc, index) => (
          <li key={index}>
            <Card style={{ width: '14rem', fontFamily : "Sterling" }}>
              <Card.Img variant="top" src= {produc.imgUrl} />
              <Card.Body>
                <Card.Title>{produc.NomProducto}</Card.Title>
                <Card.Text>
                  {produc.precio}  <br /> {produc.material} <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </li>
      ))}
    </div>
    </div>
  )
}
export default Suplemento