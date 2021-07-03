import 'bootstrap/dist/css/bootstrap.css';
import '../components/PageNavbar.css'
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class PageNavbar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home" className="titulo">Portifólio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto navItems">
                        <Nav.Link href="#features">Quem sou eu</Nav.Link>
                        <Nav.Link href="#pricing">Currículo</Nav.Link>
                        <NavDropdown title="Contato" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Instagram</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Linkedin</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Deviant art</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>

        );
    }
}

export default PageNavbar;