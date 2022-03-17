import React from 'react';
import Education from './education/education';
import Projects from './projects/projects';

import './body.scss';

const Body = () => (
    <div className="body">
        <Education />
        <Projects />
    </div>
);

export default Body;