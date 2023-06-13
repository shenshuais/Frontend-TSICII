import "@fontsource/josefin-sans";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import doctorfinding from '../../../Images/doctorfinding.c2532ac3.png';
import heroTeeth from '../../../Images/hero-theeth.54c2c4e9.png';
import womanbrush from '../../../Images/woman-brush.c4158ac5.png';
import './Banner.css';



const Banner = () => {
    return (
            <section className="single-hero-slide text-white d-flex justify-content-center align-items-center">
                <Container>
                    <Row className="align-items-center">
                        <Col md={12} sm={12} lg={6}>
                            <div className="hero-slide-left justify-content-end align-items-center text-center text-lg-start">
                                <h2>Una Mejor Vida a través de una</h2>
                                <h1>Mejor Odontología</h1>
                                <p className="mb-xs-5">Transformamos vidas a través de la odontología: te ayudamos a lograr una mejor calidad de vida a través de una atención dental integral.</p>
                                <div className="banner-btn m-sm-auto">
                                    <Link to="/login"><button className="theme-btn btn-fill">Reservar una cita</button></Link>
                                    <button className='theme-btn bth-blank'>Más información</button>
                                </div>
                            </div>
                        </Col>
                        <Col md={12} sm={12} lg={6} className="mt-sm-5">
                            <div className="hero-slide-right text-center text-lg-start mt-sm-5">
                                <div className="animate-img">
                                    <img src={womanbrush} alt="" className="img-fluid aimg1" />
                                    <img src={doctorfinding} alt="" className="img-fluid aimg2" />
                                </div>
                                <img src={heroTeeth} alt="" className="heroTeeth"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
    );
};

export default Banner;