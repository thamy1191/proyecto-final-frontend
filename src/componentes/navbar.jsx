
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="/suplementos">Suplementos</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
            <Nav.Link href="/aboutUs">About Us</Nav.Link>
            <Nav.Link href="/login">Cuenta</Nav.Link>
            <Nav.Link href="/añadir">Adminis</Nav.Link>
            <NavDropdown title="Accesorios" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action 3</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Action 4</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Promo</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Mi cuenta
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

<img src="https://th.bing.com/th/id/OIP.kWJtGnZ0NjqYGUTOQfEz6gHaCe?rs=1&pid=ImgDetMain" alt="" />


      
  
  



