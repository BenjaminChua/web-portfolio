import React from 'react';

import Image from 'react-bootstrap/Image';
import exchange from '../../assets/exchange.jpg';
import { Link } from 'react-router-dom';

import './Exchange.css';

const Exchange = () => {
    return (
        <Link to="/exchange">
            <div className="exchange-sect mb-3">
                <Image className="exchange-img" src={exchange} fluid/>
                <h1> Exchange </h1>
            </div>
        </Link>
    );
};

export default Exchange;