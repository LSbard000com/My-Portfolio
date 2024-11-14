 import React from 'react';
import RadarChart from './RadarChart';

const Skills: React.FC = () => {
    return (
        <div className='my-skills'>
            <h1>React Radar Chart Example</h1>
            <div className='chart'>
                <RadarChart />
            </div>
        </div>
    );
};
export default Skills
