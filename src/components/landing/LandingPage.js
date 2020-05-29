import React from 'react';
import Container from 'react-bootstrap/Container';
import ScrollAnimation from 'react-animate-on-scroll';

import HomeHero from './HomeHero';
import Education from './Education';
import Experience from './Experience';
import ProjectSect from './ProjectSect';
import Exchange from './Exchange';

const LandingPage = () => {
    return (
        <Container className="p-0" fluid>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <HomeHero/>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <Education/>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <Experience/>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <ProjectSect />
            </ScrollAnimation>
            <Exchange />
        </Container>
    );
}

export default LandingPage;