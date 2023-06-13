import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import expertDentist from '../../../Images/experienceddentist.png';
import './Dentist.css';

const Dentist = () => {
    return (
        <section className='expert-dentist'>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <img src={expertDentist} alt="expertDentist" className="img-fluid" />
                    </Col>
                    <Col lg={6}>
                        <div className="expertDentist-txt mt-5 mt-lg-0">
                            <h2>Dentista Experimentado</h2>
                            <p>Sonreír viene naturalmente al Dr. Johan, autor de 'Donto'. Él ha abrazado la Odontología Cosmética y ha rediseñado las sonrisas de miles de pacientes.</p>
                            <p>El Dr. Johan cree en brindar a sus pacientes más que solo atención dental de clase mundial. También ayuda a los pacientes a reconocer la conexión vital entre la salud dental y la salud integral del cuerpo. Graduado de la Escuela de Odontología de la Universidad de California, el Dr. Johan es un líder en el movimiento para llevar la cordura ambiental y el bienestar al mundo dental del futuro.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Dentist;