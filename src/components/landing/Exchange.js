import React from 'react';

import Image from 'react-bootstrap/Image';
import exchange from '../../assets/exchange.jpg';
import { HashLink as Link } from 'react-router-hash-link';

import './Exchange.css';

const Exchange = () => {
    return (
        <Link to="/exchange#top">
            <div className="exchange-sect mb-3">
                <Image className="exchange-img" src={exchange} fluid/>
                <h1> Exchange </h1>
            </div>
        </Link>
    );
};

export default Exchange;