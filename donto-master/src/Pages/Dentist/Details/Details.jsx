import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Details.css';

const Details = () => {
    return (
        <>
            <section className="dentist-details-sec">
                <Container>
                    <Row>
                        <Col md={7} lg={8}>
                            <div className="single-dentist-details">
                                <h2>Dr. Sergio Ramírez <span>(DDS, MS, FAAPD)</span></h2>
                                <p>El Dr. Sergio Ramírez es un destacado odontólogo con una vasta experiencia en el campo de la odontología. Con su amplio conocimiento y habilidades especializadas, el Dr. Ramírez se dedica a brindar una atención dental de calidad y personalizada a sus pacientes.</p>
                                <p>Con una pasión por la odontología infantil, el Dr. Ramírez ha dedicado gran parte de su carrera a trabajar con niños y garantizar que tengan una experiencia cómoda y positiva en el consultorio dental. Su enfoque amable y compasivo ayuda a crear un ambiente relajado y libre de estrés para los más pequeños.</p>
                                <p>El Dr. Ramírez se mantiene al día con los avances más recientes en la odontología y utiliza tecnología de vanguardia para ofrecer tratamientos eficaces y seguros. Su enfoque holístico de la salud bucal se centra en la prevención y el cuidado completo del paciente, promoviendo una sonrisa saludable y duradera.</p>
                                <p>Además de su práctica clínica, el Dr. Ramírez también es un activo miembro de varias asociaciones dentales y participa en conferencias y cursos de actualización para continuar brindando el mejor cuidado dental a sus pacientes.</p>
                            </div>
                            <div className="dentist-award">
                                <h3>Asociaciones Dentales</h3>
                                <ul className="p-0">
                                    <li>Asociación Dental Americana</li>
                                    <li>Academia de Odontología General</li>
                                    <li>Sociedad Dental de Carolina</li>
                                    <li>Academia de Odontología General</li>
                                    <li>Asociación Americana de Dentistas Mujeres</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={5} lg={4}>
                            <div className="dentist-profile text-center">
                                <div className="profile-img"></div>
                                <p>Nombre: <strong>Sergio Ramírez</strong></p>
                                <p>Especialización: <strong>Odontología</strong></p>
                                <p>Teléfono: <strong>55 1234 4321</strong></p>
                                <div className="doctors-social">
                                    <a href=".#"><FontAwesomeIcon icon={faFacebook} /></a>
                                    <a href=".#"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href=".#"><FontAwesomeIcon icon={faLinkedin} /></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pb-5">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="achivement-img-bg"></div>
                        </Col>
                        <Col lg={6}>
                            <div className="expertDentist-txt mt-5 mt-lg-0">
                                <h2>Odontólogo Experimentado</h2>
                                <p>Sonreír le viene naturalmente al Dr. Johan, autor de 'Donto'. Él se ha especializado en Odontología Estética y ha rediseñado las sonrisas de miles de pacientes.</p>
                                <p>El Dr. Johan cree en brindar a sus pacientes más que una atención dental de clase mundial. También ayuda a los pacientes a reconocer la conexión vital entre la salud bucal y la salud integral del cuerpo. Graduado de la Facultad de Odontología de la Universidad de California, el Dr. Johan es un líder en el movimiento para llevar la sensatez ambiental y el bienestar al mundo dental del futuro.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Details;