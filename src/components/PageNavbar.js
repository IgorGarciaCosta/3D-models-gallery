import 'bootstrap/dist/css/bootstrap.css';
import '../components/PageNavbar.css'
import React from 'react';
import { useHistory, Redirect, Link, Switch, Router, Route } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Pdf from '../pdf/curriculoIgorGarcia.pdf';
import AboutPage from '../pages/AboutPage'

const PageNavbar = () => {
    const history = useHistory();
    const handleClick = () => history.push('/about');
    const handleClickLogo = () => history.push('/app');
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="" onClick={handleClickLogo} className="titulo">Portifólio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto navItems itens_nav">
                    <Nav.Link href="" onClick={handleClick}>
                        Quem sou eu
                    </Nav.Link>
                    <NavDropdown.Divider className="divisor" />
                    <Nav.Link href={Pdf} target="_blank">Currículo</Nav.Link>
                    <NavDropdown.Divider className="divisor" />
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