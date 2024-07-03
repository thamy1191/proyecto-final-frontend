import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="img-fluid"
          src="https://vitalikecr.com/wp-content/uploads/2020/10/2-1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p>bandas de colores</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
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
  );
}

export default DarkVariantExample;