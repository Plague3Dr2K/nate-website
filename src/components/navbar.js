import '../scss/App.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar (){
  return (
    <Navbar className='navi' sticky="top" collapseOnSelect expand="lg">
      
        <Navbar.Brand className='brand' href="#home">Nathaniel Lakai</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="hamburger justify-content-end " id="responsive-navbar-nav">
          <Nav className='navstuff'>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link eventKey={2} href="#credentials">
              Credentials
            </Nav.Link>
            <Nav.Link eventKey={3}href="#projects">Projects</Nav.Link>
            <Nav.Link eventKey={4} href="#contacts">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    
    </Navbar>
  );
}