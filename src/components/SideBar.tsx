import { useState } from 'react'

const SideBar = () => {
    // トグルボタンをクリックするたびにクラスを付与したり外したりする
    const [open, setOpen] = useState<boolean>(false)

  return (
    <div className={`sidebar ${open ? 'open' : ''}`}>

        {/* トグルボタン */}
        <div className='nav-btn' onClick={()=>setOpen(!open)} >
            <span></span>
            <span></span>
            <span></span>
        </div>

        {/* ナビゲーション */}
        <div className='navigation'>
            <nav className='nav'>
                <ul>
                    <li onClick={()=>setOpen(!open)}><a href='#top'>Top</a></li>
                    <li onClick={()=>setOpen(!open)}><a href='#about'>About</a></li>
                    <li onClick={()=>setOpen(!open)}><a href='#works'>Works</a></li>
                    <li onClick={()=>setOpen(!open)}><a href='#skills'>Skills</a></li>
                    <li onClick={()=>setOpen(!open)}><a href='#contact'>Contact</a></li>
                </ul>
            </nav>
            <div className='links'>
                <ul>
                    <li>
                        <i className="fa-brands fa-github"></i>
                        <a href='https://github.com/LSbard000com'>GitHub</a>
                    </li>
                    <li>
                        <i className="fa-solid fa-pen-to-square"></i>
                        <a href='https://note.com/ready_dietes6250/'>note</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SideBar
