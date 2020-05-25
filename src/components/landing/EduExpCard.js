import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import './EduExpCard.css'
import { Link } from 'react-router-dom';

const EduExpCard = (props) => {
    return (
        <Col className="py-3 cardCon">
            <Link to={props.items.path}>
            <Card.Img className="cardImg" src={props.items.image}/>
            <div className="imgText"> Learn more > </div>
            </Link>
        </Col>
    );
};

export default EduExpCard;