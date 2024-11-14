import { useState } from 'react'
import topImage from '../assets/img/IMG_7005.jpeg'

const top = () => {
    // トグルボタンをクリックするたびにクラスを付与したり外したりする
    const [open, setOpen] = useState<boolean>(false)

  return (
    <div id='top' className={`top ${open ? 'open' : ''}`}>
        <div className='title'>
            <img src={topImage} alt='top image' />
            <div className='title-text name'>
                <h2 className='first'>Masato</h2>
                <h2 className='last'>Komukai</h2>
            </div>
            <div className='title-text portfolio'>
                <h2>Portfolio</h2>
            </div>
        </div>
        <div className='nav-btn' onClick={()=>setOpen(!open)} >
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div>
            <nav className='navigation'>

            </nav>
        </div>
    </div>
  )
}

export default top
