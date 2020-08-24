import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import nus from '../../assets/NUS.jpg';
import gt from '../../assets/GT.jpg';
import udemy from '../../assets/Udemy.jpg';
import EduExpCard from './EduExpCard';
import './Education.css';

class Education extends Component {
    state = {
        udemy: {
            id: "docker",
            image: udemy,
        },
        nus: {
            id: "nus",
            image: nus,
        },
        gt: {
            id: "gatech",
            image: gt,
        },
    }
    render() {
        return (
            <Container className="education-sect py-5 mb-3" id="education" fluid>
                <div className="pt-5"/>
                <h1> Education </h1>
                <Row className="justify-content-center pt-3 px-5" xs={1} sm={2} md={4} lg={4} xl={5}>
                    <EduExpCard items={this.state.udemy} />
                    <EduExpCard items={this.state.nus} />
                    <EduExpCard items={this.state.gt} />
                </Row>
                <div className="pt-5"/>
            </Container>
        );
    }
}

export default Education;