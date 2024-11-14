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

            </nav>
        </div>
    </div>
  )
}

export default SideBar
