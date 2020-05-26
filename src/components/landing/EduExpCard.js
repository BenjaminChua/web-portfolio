import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { HashLink as Link } from 'react-router-hash-link';

import './EduExpCard.css'

const EduExpCard = (props) => {
    return (
        <Col className="py-3 cardCon">
            <Link
                to={`/resume#${props.items.id}`}
                scroll={el => el.scrollIntoView({ behavior: "smooth", block: "center" })}
            >
            <Card.Img className="cardImg" src={props.items.image}/>
            <div className="imgText"> Learn More > </div>
            </Link>
        </Col>
    );
};

export default EduExpCard;