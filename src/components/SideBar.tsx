import { useState } from 'react'

const SideBar = () => {
    // トグルボタンをクリックするたびにクラスを付与したり外したりする
    const [open, setOpen] = useState<boolean>(false)

  return (
    <div className={`sidebar ${open ? 'open' : ''}`}>
        <div className='nav-btn' onClick={()=>setOpen(!open)} >
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div>
            <nav className='navigation'>
                <ul>
                    <li onClick={()=>setOpen(!open)}><a href='#top'>Top</a></li>
                    <li onClick={()=>setOpen(!open)}><a href='#about'>About</a></li>
                    <li onClick={()=>setOpen(!open)}><a href='#works'>Works</a></li>
                    <li onClick={()=>setOpen(!open)}><a href='#skills'>Skills</a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default SideBar
