// Header.js
import React from 'react';

import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contacts';

const Main = () => {
    return (
        <main>
            <About />
            <Technologies />
            <Projects />
            <Contact />
        </main>
    );
}

export default Main;