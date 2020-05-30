import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import kpmg from '../../assets/KPMG.jpg';
import experian from '../../assets/Experian.jpg';
import aisg from '../../assets/AISG.jpg';
import EduExpCard from './EduExpCard';
import './Experience.css';

class Experience extends Component {
    state = {
        aisg: {
            id: "aisg",
            image: aisg,
        },
        experian: {
            id: "experian",
            image: experian,
        },
        kpmg: {
            id: "kpmg",
            image: kpmg,
        },
    }
    render() {
        return (
            <Container className="experience-sect py-5" id="experience" fluid>
                <div className="pt-5"/>
                <h1> Experience </h1>
                <Row className="justify-content-center pt-3 px-5" xs={1} sm={2} md={4} lg={4} xl={5}>
                    <EduExpCard items={this.state.aisg} />
                    <EduExpCard items={this.state.experian} />
                    <EduExpCard items={this.state.kpmg} />
                </Row>
                <div className="pt-5"/>
            </Container>
        );
    }
}

export default Experience;