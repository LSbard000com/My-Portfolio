import React from 'react';
import RadarChart from './RadarChart';
import Title from './Title';


const Skills: React.FC = () => {
    return (
        <div id='skills' className='my-skills'>

            {/* タイトル */}
            <Title 
                title='Skills'
                text='使用している技術を紹介します'
            />

            {/* チャート */}
            <div className='chart-area'>
                <div className='chart'>
                    <RadarChart />
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
