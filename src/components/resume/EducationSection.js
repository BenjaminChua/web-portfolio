import React, { Component } from "react";

import EducationTemplate from "./EducationTemplate";

class EducationSection extends Component {
    state = {
        nus: {
            degree: "Bachelor of Engineering (Honours w Highest Distinction)",
            period: "Aug 16 - May 20",
            spec: "Industrial & Systems Engineering",
            name: "National University of Singapore",
            CAP: "Cumulative Average Point (CAP): 4.5*/5.00",
            curriculum: {
                Statistics: ["Axioms of Probability", "Conditional probability", "Independence", "Joint and " +
                "marginal distributions", "Stochastic Modelling", "Markov chains", "ANOVA", "Bootstrap",
                "Operations Research", "Linear Programming", "Dynamic Programming", "Network flow models",
                "Non-linear programming"],
                Programming: ["Python", "Machine Learning", "C", "C++"],
                Math: ["Advanced Calculus", "Mathematical Modelling", "Linear Algebra", "Differential Equations"],
                Systems: ["Queuing Models", "Renewal Theory", "Simulation using AutoMod", "System Modelling using " +
                "Stella Architect", "Control charts", "Process Capabilities Analysis", "Acceptance Sampling"],
                Economics: ["Time value of Money", "Replacement Analysis", "Stochastic Dominance", "Risk Analysis"],
                Logistics: ["Demand Forecasting", "Production Scheduling", "Inventory Decisions"],
                Business: ["Marketing", "Financial Accounting", "Managerial Economics"],
                "Soft Skills": ["Report Writing", "Oral Presentation", "Project Work", "Leadership"]
            },
            id: "nus",
        },
        gatech: {
            degree: "Student Exchange Programme",
            period: "Jan 19 - May 19",
            spec: "Non-degree",
            name: "Georgia Institute of Technology, USA",
            CAP: "Grade Point Average (GPA): 4.00/4.00",
            curriculum: {
                Analytics: ["Python", "SQLite", "Hadoop", "Pig", "Spark", "Hive", "AWS EC2"],
                Visualisation: ["D3.js", "Tableau"],
                Economics: ["Game Theory", "Duopoly Competition", "Mixed Nash Equilibrium", "Backward Induction, " +
                "SPNE", "Supply Chain Coordination", "Bayesian Nash Equilibrium"],
                "Project Management": ["Systems Development Life Cycle", "Agile/Scrum Framework", "PMBOK",
                "Waterfall model"],
                Finance: ["Discounted Cash Flow", "Securities Market", "Equity Valuation", "Asset Pricing Models",
                "Risk, Return and Diversification", "Market Efficiency", "Behavioural Finance"],
                Philosophy: ["Utilitarianism", "Deontology", "Care Ethics", "Virtue Ethics", "Social Construction " +
                "of Technology"],
            },
            id: "gatech",
        },
        react: {
            degree: "Modern React with Redux",
            period: "May 20 - May 20",
            name: "Udemy, Inc.",
            curriculum: {
                ReactJs: ["React.js", "React Router", "Webpack", "Context", "Hooks", "Redux", "Redux Thunk", "Axios"],
            },
            id: "react",
        },
        docker: {
            degree: "Docker and Kubernetes: The Complete Guide",
            period: "Aug 20 - Aug 20",
            name: "Udemy, Inc.",
            curriculum: {
                Docker: ["Dockerfile", "Compose", "Build", "Run", "DockerHub"],
                Kubernetes: ["Configs", "Apply", "Get", "Describe", "Delete", "Set"],
                WebDev: ["Travis CI", "Nginx", "Express", "Postgres", "Redis", "AWS", "GCP"]
            },
            id: "docker",
        }
    }
    render() {
        return (
            <div className="py-3">
                <EducationTemplate edu={this.state.docker}/>
                <EducationTemplate edu={this.state.react}/>
                <EducationTemplate edu={this.state.nus}/>
                <EducationTemplate edu={this.state.gatech}/>
            </div>
        );
    }
}

export default EducationSection;