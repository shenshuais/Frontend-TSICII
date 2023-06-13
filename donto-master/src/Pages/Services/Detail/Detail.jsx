import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import serviceDetailImg from '../../../Images/service-details-promo1.png';
import serviceDetailImg2 from '../../../Images/service-details-promo2.png';
import './Detail.css';

const Detail = () => {
    return (
        <>
            <section className="healing p-5">
                <Container>
                    <Row className="align-items-center p-5">
                        <Col lg={6} sm={12} xs={12}>
                            <div className="expertDentist-txt mt-5 mt-lg-0">
                                <h2 className="fw-bold">PRF para una Cicatrización más Rápida</h2>
                                <p>El PRF (Plasma Rico en Fibrina) es una tecnología innovadora que utilizamos en nuestros tratamientos dentales para acelerar el proceso de cicatrización. Consiste en la extracción de una muestra de sangre del propio paciente, la cual es procesada para obtener una concentración rica en factores de crecimiento y plaquetas. Este concentrado de PRF se aplica en la zona de tratamiento para estimular y promover la regeneración de tejidos.</p>
                                <p>Gracias al uso del PRF, nuestros pacientes experimentan una cicatrización más rápida y eficiente.</p>
                            </div>
                        </Col>
                        <Col lg={6} sm={12} xs={12}>
                            <img src={serviceDetailImg} alt="expertDentist" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="healing p-5 footer-bg">
                <Container>
                    <Row className="align-items-center p-5">
                        <Col lg={6} sm={12} xs={12}>
                            <img src={serviceDetailImg2} alt="expertDentist" className="img-fluid pt-xs-5" />
                        </Col>
                        <Col lg={6} sm={12} xs={12}>
                            <div className="expertDentist-txt mt-5 mt-lg-0">
                                <h2 className="fw-bold text-white">¿Composite o Mercurio?</h2>
                                <p className="text-white">La elección entre composite o mercurio en los empastes dentales es una decisión importante. En nuestra clínica dental, te ofrecemos la opción de utilizar composite, un material estético y libre de mercurio, para asegurar una sonrisa saludable y atractiva.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Detail;