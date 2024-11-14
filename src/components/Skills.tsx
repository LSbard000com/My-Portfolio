import React from 'react';
import RadarChart from './RadarChart';


const Skills: React.FC = () => {
    return (
        <div className='my-skills'>
            <div className="section-title">
                <h2>Skills</h2>
            </div>
            <div className='chart-area'>
                <div className='chart'>
                    <RadarChart />
                </div>
                <div className='chart-mask'>
                    <div></div>
                </div>
            </div>
        </div>
    );
};
export default Skills
