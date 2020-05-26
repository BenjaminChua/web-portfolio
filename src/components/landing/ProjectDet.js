import React from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { HashLink as Link } from 'react-router-hash-link';
import Container from 'react-bootstrap/Container';

const ProjectDesc = (props) => {
    return (
        <Col className="p-3">
            <Container className="py-5 p-0" fluid
             style={{ backgroundColor: props.backgroundColor, color: props.color }}>
                <Image src={props.icon} style={{ maxWidth: "30%" }}/>
                <h2> {props.name} </h2>
                <p> {props.desc} </p>
                <Link to={`/project#${props.id}`} smooth>
                    <button className="ui button">
                        Learn More
                    </button>
                </Link>
            </Container>
        </Col>
    );
};

export default ProjectDesc;