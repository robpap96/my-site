import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const SectionSelector = () => {
    return (
        <>
            <Navbar bg="transparent" data-bs-theme="light">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contacts">Contacts</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default SectionSelector;