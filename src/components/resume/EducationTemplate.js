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
        <Container className="resume-text py-3 px-sm-0 px-md-1 px-lg-5" id={props.edu.id}>
            <Container className="px-sm-0 px-md-1 px-lg-5">
                <Row xs={1} sm={2}>
                    <Col sm={8} md={8}>
                        <h1> {props.edu.degree} </h1>
                    </Col>
                    <Col sm={4} md={4} className="text-sm-right"> {props.edu.period} </Col>
                </Row>
                <Row>
                    <Col className="font-weight-bold"> {props.edu.spec} </Col>
                </Row>
                <Row>
                    <Col className="font-italic"> {props.edu.name} </Col>
                </Row>
                <Row>
                    <Col>
                        <div> {props.edu.CAP} </div>
                        <div className="pt-3"> Curriculum: </div>
                        <Container className="p-0"> <Tabs className="p-0"> {Curr} </Tabs> </Container>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default EducationTemplate;