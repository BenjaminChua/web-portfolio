import React from 'react';

const ContactIcon = (props) => {
    return (
        <a href={props.link}>
            <button className={`ui ${props.icon} button`}>
                <i className={`${props.icon} big middle aligned fitted icon`} aria-hidden/>
            </button>
        </a>
    );
};

export default ContactIcon;