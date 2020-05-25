import React from 'react';

const ContactIcon = (props) => {
    return (
        <a className="ui icon button" href={props.link}>
            <i className={`${props.icon} big middle aligned fitted icon`} aria-hidden/>
        </a>
    );
};

export default ContactIcon;