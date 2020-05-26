import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const EducationTemplate = props => {
    const curriculum = props.edu.curriculum;
    const skillTypes = Object.keys(curriculum)
    const Curr = skillTypes.map((skillType) =>
        <Tab eventKey={skillType} title={skillType}>
            {curriculum[skillType].map((skill) => <li className="pl-3"> {skill} </li>)}
        </Tab>)
    return (
        <Container className="py-3" id={props.edu.id}>
            <Row xs={1} sm={2}>
                <Col className="lead font-weight-bold" sm={8} md={{span: 6, offset: 1}}> {props.edu.degree} </Col>
                <Col sm={4} md={{span: 3, offset: 2}}> {props.edu.period} </Col>
            </Row>
            <Row>
                <Col className="font-weight-bold" md={{offset: 1}}> {props.edu.spec} </Col>
            </Row>
            <Row>
                <Col className="font-italic" md={{offset: 1}}> {props.edu.name} </Col>
            </Row>
            <Row>
                <Col md={{offset: 1}}>
                    <div> {props.edu.CAP} </div>
                    <div className="pt-3"> Curriculum: </div>
                    <Container className="p-0"> <Tabs className="p-0"> {Curr} </Tabs> </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default EducationTemplate;