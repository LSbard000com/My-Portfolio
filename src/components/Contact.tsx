import myPhoto from '../assets/img/自己紹介画像.jpg'
import Title from './Title'

const Contact = () => {
  return (
    <div id='contact' className="contact">

        {/* タイトル */}
        <Title 
            title='Contact'
            text='下記のリンクより気軽にお問い合わせください'
        />

        {/* 自己紹介画像 */}
        <div className="plofile-img">
            <div className='img-area'>
            <   img src={myPhoto} />
            </div>
        </div>

        {/* 各種コンテンツ */}
        <div className='contents'>
            <ul>
                <li>
                    <a href='https://github.com/LSbard000com'><i className="fa-brands fa-github"></i></a>
                    <span>GitHub</span>
                </li>
                <li>
                    <div>
                        <a href='https://note.com/ready_dietes6250/'><i className="fa-solid fa-pen-to-square"></i></a>
                        <span>note</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Contact
