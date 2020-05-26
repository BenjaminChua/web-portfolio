import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ExperienceTemplate = props => {
    return (
        <Container className="resume-text py-3" id={props.exp.id}>
            <Row xs={1} sm={2}>
                <Col sm={8} md={{span: 6, offset: 1}}>
                    <h1> {props.exp.name} </h1>
                </Col>
                <Col sm={4} md={{span: 3, offset: 2}}> {props.exp.period} </Col>
            </Row>
            <Row>
                <Col className="font-italic" md={{offset: 1}}> {props.exp.company} </Col>
            </Row>
            <Row>
                <Col md={{offset: 1}}>
                    {props.exp.det1 && <li> {props.exp.det1} </li>}
                    {props.exp.det2 && <li> {props.exp.det2} </li>}
                    {props.exp.det3 && <li> {props.exp.det3} </li>}
                    {props.exp.det4 && <li> {props.exp.det4} </li>}
                    {props.exp.det5 && <li> {props.exp.det5} </li>}
                </Col>
            </Row>
        </Container>
    );
}

export default ExperienceTemplate;