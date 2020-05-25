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
            nus: {
                path: "/resume/nus",
                image: nus,
            },
            gt: {
                path: "/resume/gatech",
                image: gt,
            },
            udemy: {
                path: "/resume/udemy",
                image: udemy,
            },
    }
    render() {
        return (
            <Container className="education-sect py-5 mb-3" fluid>
                <h1> Education </h1>
                <Row className="justify-content-center pt-3 px-5" xs={1} sm={2} md={4} lg={4} xl={5}>
                    <EduExpCard items={this.state.gt} />
                    <EduExpCard items={this.state.nus} />
                    <EduExpCard items={this.state.udemy} />
                </Row>
            </Container>
        );
    }
}

export default Education;