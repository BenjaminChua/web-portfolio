import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProjectDet from './ProjectDet';

import redditAnalyser from '../../assets/redditAnalyzer.png'

class ProjectSect extends React.Component {
    state = {
        redditAnalyser: {
            icon: redditAnalyser,
            name: "Reddit Apparecium",
            desc: "This is a short description of the project",
            backgroundColor: "#F2F2F2",
            color: "black",
            link: "redditAnalyser"
        },
        redditAnalyser2: {
            icon: redditAnalyser,
            name: "Reddit Apparecium 2.0",
            desc: "This is a short description of the project",
            backgroundColor: "black",
            color: "white",
            link: "redditAnalyser2"
        },
    }

    render() {
        return (
            <Container className="text-center" fluid>
                <Row xs={1} md={2} lg={2} xl={2}>
                    <ProjectDet icon={this.state.redditAnalyser.icon}
                                name={this.state.redditAnalyser.name}
                                desc={this.state.redditAnalyser.desc}
                                backgroundColor={this.state.redditAnalyser.backgroundColor}
                                color={this.state.redditAnalyser.color}
                                link={this.state.redditAnalyser.link}
                    />
                    <ProjectDet icon={this.state.redditAnalyser2.icon}
                                name={this.state.redditAnalyser2.name}
                                desc={this.state.redditAnalyser2.desc}
                                backgroundColor={this.state.redditAnalyser2.backgroundColor}
                                color={this.state.redditAnalyser2.color}
                                link={this.state.redditAnalyser2.link}
                    />
                </Row>
            </Container>
        );
    }
}

export default ProjectSect;