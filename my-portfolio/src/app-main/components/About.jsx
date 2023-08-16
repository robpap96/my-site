import React from 'react';

//bootstrap component
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//my components

const About = () => {
  return (
    <section id="about" class="about-me">
           <Container bg="transparent">
                <Row>
                    <Col xs={8}>
                        <Card className="about-card p-4" bg="transparent">
                            <Card.Title>Hi, I'm Roberto</Card.Title>
                            <Card.Subtitle>I create Webstite, Webapp and Android/Ios apps</Card.Subtitle>
                            <Card.Body>
                                lLorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Card.Body>
                            <Row className="justify-content-center" >
                                <Col xs={3}>
                                    <Button variant="primary">Go somewhere</Button>
                                </Col>
                            </Row>
                          
                        </Card>
                    </Col>
                    <Col className="p-4" xs={4}>
                        <img src="https://i1.wp.com/potafiori.com/wp-content/uploads/2020/04/placeholder.png?ssl=1" alt="boh" />
                    </Col>
                </Row>
            </Container>
    </section>
  );
}

export default About;