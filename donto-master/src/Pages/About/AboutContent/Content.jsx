import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Content.css';

const Content = () => {
    return (
        <section className="about-content-sec">
            <Container>
                <Row>
                    <Col md={12} lg={8} lg={{ order: 2 }} className="text-center">
                        <div className="section-title">
                            <h1>Nuestra Historia</h1>
                        </div>
                        <p className="w-50 m-auto content-inner">Desde 1998, Donto Dentistry ha estado brindando atención dental excepcional a nuestros pacientes. Siempre nos hemos comprometido en combinar técnicas modernas con equipos de alta tecnología para proporcionar los mejores servicios dentales posibles.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Content;