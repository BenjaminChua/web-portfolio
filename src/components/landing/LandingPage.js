import React from 'react';
import Container from 'react-bootstrap/Container';

import HomeHero from './HomeHero';
import Education from './Education';
import Experience from './Experience';

const LandingPage = () => {
    return (
        <Container className="p-0" fluid>
            <HomeHero/>
            <Education/>
            <Experience/>
        </Container>
    );
}

export default LandingPage;