import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProjectDet from './ProjectDet';

class ProjectSect extends React.Component {
    state = {
        redditAnalyser: {
            icon: "reddit square",
            name: "Reddit Aparecium",
            desc: "Clusters comments in a Reddit post by their main discussion topic, creating an interactive visualisation",
            skills: ["LDA", "Sentiment Analysis", "Python", "Flask", "Vue.js"],
            backgroundColor: "black",
            color: "white",
            buttonText: "View Application",
            link: "https://jakkarintiew.github.io/reddit-aparecium/",
        },
        doctorRostering: {
            icon: "doctor",
            name: "Doctor Rostering",
            desc: "A web-application that finds the optimal roster based on a dynamic set of constraints and objectives",
            skills: ["Constraint Programming", "Google OR-Tools", "Python", "Flask", "React.js"],
            backgroundColor: "#F2F2F2",
            color: "black",
            link: null,
        },
        portfolioSelection: {
            icon: "line graph",
            name: "Portfolio Selection",
            desc: "Using a hypothesised feature set, stock returns are predicted and a portfolio is optimised",
            skills: ["Multi-layer perceptron", "Finance", "Python", "Flask", "html"],
            backgroundColor: "#F2F2F2",
            color: "black",
            link: null,
        },
        sentimentAnalysis: {
            icon: "language",
            name: "Sentiment Analyser",
            desc: "An adapted transformer model for sentiment analysis and multilabel classification",
            skills: ["PyTorch 1.1.0", "Python", "NLP", "Flask"],
            backgroundColor: "black",
            color: "white",
            link: null,
        },
        portfolioWebsite: {
            icon: "react",
            name: "Portfolio Website",
            desc: "My first React application: An online visualisation of my portfolio",
            skills: ["React.js", "Semantic UI", "React Router", "React Bootstrap", "css"],
            backgroundColor: "#F2F2F2",
            color: "black",
            buttonText: "Link to Repo",
            link: "https://github.com/BenjaminChua/web-portfolio-v2",
        },
    }

    render() {
        return (
            <Container className="text-center" id="projects" fluid>
                <Row xs={1} md={2} lg={2} xl={2}>
                    <ProjectDet project={this.state.redditAnalyser} />
                    <ProjectDet project={this.state.doctorRostering} />
                    <ProjectDet project={this.state.portfolioSelection} />
                    <ProjectDet project={this.state.sentimentAnalysis} />
                </Row>
                <Row>
                    <ProjectDet project={this.state.portfolioWebsite} />
                </Row>
            </Container>
        );
    }
}

export default ProjectSect;