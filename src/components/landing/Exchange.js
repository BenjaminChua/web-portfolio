import React from 'react';

import Image from 'react-bootstrap/Image';
import exchange from '../../assets/exchange.jpg';
import { HashLink as Link } from 'react-router-hash-link';
import pathContext from '../../contexts/pathContext';

import './Exchange.css';


class Exchange extends React.Component {
    static contextType = pathContext;
    render() {
        return (
            <Link to={`${this.context.exchangePath}/#top`}>
                <div className="exchange-sect mb-3">
                    <Image className="exchange-img" src={exchange} id="exchange"/>
                    <h1> Exchange </h1>
                </div>
            </Link>
        );
    }
}

export default Exchange;