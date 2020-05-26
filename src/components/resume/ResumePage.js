import React from 'react';
import Image from 'react-bootstrap/Image';

import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import educationCloud from '../../assets/educationCloud.jpg';
import experienceCloud from '../../assets/experienceCloud.jpg';
import './ResumePage.css';

class ResumePage extends React.Component {

    render() {
        return (
            <div>
                <Image src={educationCloud} fluid/>
                <EducationSection />
                <Image src={experienceCloud} fluid/>
                <ExperienceSection />
            </div>
        );
    }
}

export default ResumePage;