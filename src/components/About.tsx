import myPhoto from '../assets/img/自己紹介画像.jpg'
import Timeline from './Timeline'
import Title from './Title'

const About = () => {
  return (
    <div id='about' className="about">
      <Title 
        title='About'
        text='はじめましてどうぞごゆくっりご覧ください'
       />
      <div className='main'>
        <div className='profile'>
          <div className='photo'>
            <img src={myPhoto} alt='自己紹介写真' />
          </div>
          <div className='info'>
            <table>
              <tbody>
                <tr>
                  <th>名前：</th><td>小向 真人（こむかい まさと）</td>
                </tr>
                <tr>
                  <th>生年月日：</th><td>1997年 1月 23日</td>
                </tr>
                <tr>
                  <th>趣味：</th><td>バドミントン、数学</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='timeline'>
          <Timeline />
        </div>
      </div>
    </div>
  )
}

export default About
