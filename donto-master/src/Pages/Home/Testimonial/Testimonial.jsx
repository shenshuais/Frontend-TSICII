import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import client from '../../../Images/testi1.png';
import './Testimonial.css';

const Testimonial = () => {

    useEffect(() => {
        AOS.init({
                duration: 2000,
            });
        AOS.refresh();
      }, []);
    return (
        <section className="testimonial-wrapper">
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="section-title">
                            <h1>Testimonios</h1>
                        </div>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col md={6} lg={4} sm={12}>
                        <div className="client-box text-center" data-aos="fade-right">
                            <div className="client-img">
                                <img src={client} alt="" />
                            </div>
                            <h3 className="mt-4">María López</h3>
                            <span>CEO de Prime IT</span>
                        </div>
                    </Col>
                    <Col md={6} lg={8} sm={12}>
                        <div className="review-item text-start" data-aos="zoom-out">
                            <h5>Buen trabajo</h5>
                            <p>“Quiero agradecer al equipo de dentistas de este consultorio por el excelente servicio que recibí. Desde el momento en que entré por la puerta, me sentí bienvenido y en buenas manos. El personal es amable y profesional, y el ambiente es relajante. Mi dentista fue muy atento y se tomó el tiempo para explicarme cada paso del tratamiento. Gracias a ellos, mi experiencia dental fue cómoda y sin estrés. Recomiendo encarecidamente este consultorio a todos aquellos que busquen una atención dental de calidad.”</p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default Testimonial;