import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Safety.css';

const Safety = () => {
    return (
        <section className="about-content-sec">
            <Container>
                <Row>
                    <Col md={12} lg={8} lg={{ order: 2 }} className="text-center">
                        <div className="section-title">
                            <h1>Seguridad primero</h1>
                        </div>
                        <p className="w-50 m-auto content-inner">Desde 1998, Donto se enorgullece de combinar técnicas modernas y equipos de alta tecnología. El Dr. Johan, Sergio y su equipo brindan una experiencia de cuidado dental personalizada y cómoda, diferente a cualquier otro dentista en CDMX.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} lg={6}>
                        <div className="vedio-item">
                            <div className="vedio-bg-img">
                                <a href="https://youtu.be/IVqKLxp6R4U"><FontAwesomeIcon icon={faPlayCircle} className="vedio-play-btn" /></a>
                            </div>
                            <h5>La Importancia de la Odontología Integral para tu Salud</h5>
                        </div>
                    </Col>
                    <Col md={6} lg={6}>
                        <div className="vedio-item">
                            <div className="vedio-bg-img img2">
                                <a href="https://youtu.be/0s35QCFg7p0"><FontAwesomeIcon icon={faPlayCircle} className="vedio-play-btn" /></a>
                            </div>
                            <h5>¡La seguridad ante todo con las Tomografías Computarizadas (CT)!</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Safety;