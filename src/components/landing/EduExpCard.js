import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import './EduExpCard.css'

const EduExpCard = (props) => {
    return (
        <Col className="py-3 cardCon">
            <Link to={props.items.path}>
            <Card.Img className="cardImg" src={props.items.image}/>
            <div className="imgText"> Learn More > </div>
            </Link>
        </Col>
    );
};

export default EduExpCard;