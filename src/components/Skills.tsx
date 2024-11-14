 import React from 'react';
import RadarChart from './RadarChart';

const Skills: React.FC = () => {
    return (
        <div className='my-skills'>
            <div className='chart-area'>
                <div className='chart'>
                    <RadarChart />
                </div>
                <div className='chart-mask'></div>
            </div>
        </div>
    );
};
export default Skills
