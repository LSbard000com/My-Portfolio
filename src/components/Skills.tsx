import React from 'react';
import RadarChart from './RadarChart';


const Skills: React.FC = () => {
    return (
        <div className='my-skills'>

            {/* タイトル */}
            <div className="section-title">
                <h2>Skills</h2>
            </div>

            {/* チャート */}
            <div className='chart-area'>
                <div className='chart'>
                    <div>
                        <RadarChart />
                    </div>
                </div>

                {/* チャートの説明欄 */}
                <div className='chart-explanation'>
                    <table>
                        <thead>
                            <tr>
                                <th>レベル</th><th>経験値</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>5</td><td>実務5年以上</td>
                            </tr>
                            <tr>
                                <td>4</td><td>実務3年以上</td>
                            </tr>
                            <tr>
                                <td>3</td><td>実務経験有り</td>
                            </tr>
                            <tr>
                                <td>2</td><td>開発経験有り</td>
                            </tr>
                            <tr>
                                <td>1</td><td>学習中</td>
                            </tr>
                        </tbody>
                    </table>
                </div> 
            </div>
        </div>
    );
};
export default Skills
