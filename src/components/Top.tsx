import { useState } from 'react'
import topImage from '../assets/img/IMG_7005.jpeg'

const top = () => {
    // トグルボタンをクリックするたびにクラスを付与したり外したりする
    const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="top">
        <div className='title'>
            <img src={topImage} alt='top image' />
        </div>
        <div className='nav-btn' onClick={()=>setOpen(!open)} >
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className={open ? '' : 'open'}>
            <nav className='navigation'>

            </nav>
        </div>
    </div>
  )
}

export default top
