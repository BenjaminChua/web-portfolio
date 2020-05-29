import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import pathContext from '../../contexts/pathContext';

class ProjectDesc extends React.Component {
    static contextType = pathContext;
    state = this.props.project;

    renderSkill() {
        return this.state.skills.map((skill, i, arr) => {
            if (arr.length - 1 === i) {
                return ` ${skill}`;
            } else if (i === 0) {
                return `${skill} |`;
            } else {
                return ` ${skill} |`;
            }
        })
    };

    renderButton() {
        if (this.state.link === null) {
            return (
                <button className="ui button disabled py-3">
                    Private Application
                </button>
            );
        } else {
            return (
                <a href={this.state.link}>
                    <button className="ui button py-3">
                        {this.state.buttonText}
                    </button>
                </a>
            )
        }
    }

    render() {
        return (
            <Col className="p-3">
                <Container className="py-5 p-0 align-items-center justify-content-center d-flex" fluid
                           style={{backgroundColor: this.state.backgroundColor, color: this.state.color, minHeight: "430px"}}>
                    <div>
                        <i className={`${this.state.icon} massive middle aligned icon`} />
                        <h2 className="pt-3 pb-2"> {this.state.name} </h2>
                        <p className="px-5" style={{ fontSize: "16px"}}> {this.state.desc} </p>
                        <p className="px-5" style={{ fontStyle: "italic"}}> {this.renderSkill()} </p>
                        {this.renderButton()}
                    </div>
                </Container>
            </Col>
        );
    }
}

export default ProjectDesc;