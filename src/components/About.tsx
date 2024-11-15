import aboutImg from '../assets/img/IMG_7007.jpeg'
import Title from './Title'

const About = () => {
  return (
    <div id='about' className="about">
      <Title 
        title='About'
        text='自己紹介をします'
       />
      <div className='main'>
        <div className='img'>
          <img src={aboutImg} />
        </div>
        <div className='text-area'>
          <div className='text'>
            大学卒業後、公立中学校の数学科教員として6年間務めました。
            業務の中で、プログラミング言語に出会いエンジニアを志しました。
            フロントエンドエンジニアを目指し、HTML,CSS,JavaScriptをはじめ、React,TypeScriptでの開発を通してスキル向上に努めています。
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
