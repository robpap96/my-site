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
                    <Col>
                        <Image src="my-site/my-portfolio/public/assets/logo-placeholder.jpeg"  href="#home"></Image>
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