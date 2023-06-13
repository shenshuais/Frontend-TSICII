import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../Images/logo.png';
import './Header.css';

const Header = () => {

    const { user, logout } = useAuth();

    return (
        <div className="head-bg">
            <Navbar className="navbar" collapseOnSelect expand="lg">
                <Container className="container-head">
                    <Navbar.Brand href="/home"><img src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" expand="lg"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Link to="/home" className='list-item text-decoration-none'>Inicio</Link>
                            <Link to="/about" className='list-item text-decoration-none'>Acerca de</Link>
                            <Link to="/service" className='list-item text-decoration-none'>Servicios</Link>
                            <Link to="/dentist" className='list-item text-decoration-none'>Odontólogo</Link>
                            <Link to="/contact" className='list-item text-decoration-none'>Contacto</Link>
                            {user.email 
                            ?
                            <button type="button" className="btn btn-danger" onClick={logout}>Cerrar sesión</button>
                            :
                            <Link to="/login" type="button" className="btn btn-danger">Iniciar sesión</Link>
                            }
                            {user.email &&
                                <Navbar.Text><FontAwesomeIcon icon={faUser} /><span className="userName">{user.displayName}</span></Navbar.Text>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;