import React from 'react';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';

import './ResumePage.css';

class ResumePage extends React.Component {

    render() {
        return (
            <div>
                <EducationSection />
                <ExperienceSection />
            </div>
        );
    }
}

export default ResumePage;