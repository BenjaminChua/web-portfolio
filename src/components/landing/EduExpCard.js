import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { HashLink as Link } from 'react-router-hash-link';
import pathContext from '../contexts/pathContext';

import './EduExpCard.css'

class EduExpCard extends React.Component {
    static contextType = pathContext;
    render() {
        return (
            <Col className="py-3 cardCon">
                <Link
                    to={`${this.context.resumePath}/#${this.props.items.id}`}
                    scroll={el => el.scrollIntoView({behavior: "smooth", block: "center"})}
                >
                    <Card.Img className="cardImg" src={this.props.items.image}/>
                    <div className="imgText"> Learn More ></div>
                </Link>
            </Col>
        );
    }
}

export default EduExpCard;