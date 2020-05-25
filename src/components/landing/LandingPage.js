import React from 'react';
import Container from 'react-bootstrap/Container';

import HomeHero from './HomeHero';
import Education from './Education';
import Experience from './Experience';
import ProjectSect from './ProjectSect';
import Exchange from './Exchange';

const LandingPage = () => {
    return (
        <Container className="p-0" fluid>
            <HomeHero/>
            <Education/>
            <Experience/>
            <ProjectSect />
            <Exchange />
        </Container>
    );
}

export default LandingPage;