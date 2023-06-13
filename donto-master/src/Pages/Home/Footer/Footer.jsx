import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-bg">
            <Container>
                <Row className="text-white">
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Practicas</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">Para Pacientes</NavLink>
                                <NavLink className="footer-link">Preguntas frecuentes</NavLink>
                                <NavLink className="footer-link">Acerca de</NavLink>
                                <NavLink className="footer-link">Contáctanos</NavLink>
                                <NavLink className="footer-link">Blog</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Recursos</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">Nuevos Pacientes</NavLink>
                                <NavLink className="footer-link">Conoce al Equipo</NavLink>
                                <NavLink className="footer-link">Formulario del Paciente</NavLink>
                                <NavLink className="footer-link">Seguro</NavLink>
                                <NavLink className="footer-link">Inicio de Sesión de la Cuenta</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Servicios</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">Diccionario Dental</NavLink>
                                <NavLink className="footer-link">Selladores Dentales</NavLink>
                                <NavLink className="footer-link">Implantes Dentales</NavLink>
                                <NavLink className="footer-link">Odontología General</NavLink>
                                <NavLink className="footer-link">Odontología con Sedación</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Ubicación</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">Donto</NavLink>
                                <NavLink className="footer-link">Dr. Shuai Shen, CDMX.</NavLink>
                                <NavLink className="footer-link">Teléfono: +52 55 1234 5678</NavLink>
                                <NavLink className="footer-link">Correo electrónico: sonrisas@Donto.com</NavLink>
                                <NavLink className="footer-link">Fax: +52 55 8765 4321</NavLink>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copy-right text-center text-white">
                <p className='mb-0'>&copy; 2022 - <span className="developer">TSICII</span> | All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;