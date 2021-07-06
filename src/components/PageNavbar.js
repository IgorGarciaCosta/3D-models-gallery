import 'bootstrap/dist/css/bootstrap.css';
import '../components/PageNavbar.css'
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {useHistory } from "react-router-dom";
import Pdf from '../pdf/curriculoIgorGarcia.pdf';

function PageNavbar() {

    

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home" className="titulo">Portifólio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto navItems">
                    <Nav.Link href="./pages/AboutPage">
                        Quem sou eu
                    </Nav.Link>
                    <Nav.Link href={Pdf} target = "_blank">Currículo</Nav.Link>
                    <NavDropdown title="Contato" id="collasible-nav-dropdown">
                        <NavDropdown.Item className="itens" target='_blank' rel="noreferrer" href="https://www.instagram.com/igorgccs/">Instagram</NavDropdown.Item>
                        <NavDropdown.Item className="itens" target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/igor-garcia-5a449a1b5/">Linkedin</NavDropdown.Item>
                        <NavDropdown.Item className="itens" target='_blank' rel="noreferrer" href="https://www.deviantart.com/igor-garcia">Deviant art</NavDropdown.Item>

                    </NavDropdown>
                </Nav>

            </Navbar.Collapse>
        </Navbar>

    );

}

export default PageNavbar;