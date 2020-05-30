import React, { Component } from "react";
import ExperienceTemplate from "./ExperienceTemplate";

class ExperienceSection extends Component {
    state = {
        title: "Experience",
        experian: {
            name: "Junior Data Scientist Intern",
            period: "Jun 19 - Aug 19",
            company: "Experian Singapore (APAC X Labs)",
            det1: "Hypothesised a feature list to score SMEs financially using publicly accessible data",
            det2: "Built Flask API that calls public APIs and processes pulled data into features",
            det3: "Collaborated with work mentor to develop a sentiment analysis model in PyTorch 1.1.0",
            det4: "Adapted aforementioned sentiment analysis model to perform multilabel classification",
            id: "experian"
        },
        kpmg: {
            name: "Management Intern (Data Analytics)",
            period: "May 18 - Aug 18",
            company: "KPMG Services (Lighthouse)",
            det1: "Worked with work mentor in performing data cleaning and wrangling using Pandas (Python) " +
                     "for a Purchase Order Audit project",
            det2: "Designed data visuals for internal presentations using Tableau",
            det3: "Created Excel Macros (VBA) for a Financial Report Automation project",
            id: "kpmg"
        },
        aisg: {
            name: "AI Engineer",
            period: "Start Jun 2020",
            company: "AI Singapore",
            id: "aisg"
        }
    }
    render() {
        return (
            <div className="py-3">
                <ExperienceTemplate exp={this.state.aisg}/>
                <ExperienceTemplate exp={this.state.experian}/>
                <ExperienceTemplate exp={this.state.kpmg}/>
            </div>
        );
    }
}

export default ExperienceSection