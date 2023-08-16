// Header.js
import React from 'react';
//chakra components

//bootstrap component
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


//my components
import SectionSelector from './section-components/SectionSelector';


const Header = () => {
    return (
        <header>
            <Container bg="primary" fluid>
                <Row>
                    <Col className="d-flex align-items-center">
                        <Image className="w-25" src="https://i1.wp.com/potafiori.com/wp-content/uploads/2020/04/placeholder.png?ssl=1"  href="#home" ></Image>
                    </Col>
                    <Col xs={6}></Col>
                    <Col>
                        <SectionSelector />
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;