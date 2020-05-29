import React from 'react';

const paths = {
    mainPath : "/web-portfolio",
    aboutMeMainPath: "/web-portfolio/#top",
    educationMainPath: "/web-portfolio/#education",
    experienceMainPath: "/web-portfolio/#experience",
    projectsMainPath: "/web-portfolio/#projects",
    exchangeMainPath: "/web-portfolio/#exchange",
    resumePath: "/web-portfolio/resume",
    exchangePath: "/web-portfolio/exchange"
}

export default React.createContext(paths);