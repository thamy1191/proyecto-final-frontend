import Carousel from 'react-bootstrap/Carousel';

import "../styles/carrusel.css"

function DarkVariantExample() {

//DAR ESTILO AL CARRUSEL DE IMAGENES
const CarruselStyle = { 
 
height: "300px",
width: "300px"

}


//DAR ESTILO A LA IMAGEN
const ImageSize =  { 
maxWidth: "300px",
maxHeight: "300px",
}



  
  return (
<div className='carrusel-container'>


    <Carousel style={CarruselStyle} data-bs-theme="dark">
      <Carousel.Item >
        <img
         
         style={ImageSize}
          className="img-fluid"
          src="https://vitalikecr.com/wp-content/uploads/2023/01/new-isofit-70-scv2.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p>bandas de colores</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
           style={ImageSize}
          className="img-fluid"
          src="https://vitalikecr.com/wp-content/uploads/2023/10/Creatine-Mono-300G-Unflavored-Front-Flavor-Transparent.webp"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         style={ImageSize}
          className="img-fluid" 
          src="https://vitalikecr.com/wp-content/uploads/2022/12/3xt_blue.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>



  );
}

export default DarkVariantExample;