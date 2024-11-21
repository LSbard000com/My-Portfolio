import { useEffect, useState } from "react";

const Header = () => {
    // スクロール位置を取得
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        setScrollPosition(window.scrollY); 
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // トップ画面から出たらヘッダーが出現
    const [onHeader, setOnHeader] = useState<boolean>(false)

    useEffect(() => {
        setOnHeader(scrollPosition > innerHeight)
    },[scrollPosition])



    // セクションをホバーのオンオフで一覧を表示
    const [openSectin, setOpenSection] = useState<boolean>(false)
    const [openContact, setOpenContact] = useState<boolean>(false)

  return (
    <div className='header'>
        <div className={`header-area ${onHeader ? 'open' : 'close'}`}>
            <div className="title">
                <a href="/"><h1 className="title-h">Masato Komukai's Portofolio</h1></a>
            </div>
            <div className="header-navigation">
                <div className={`header-nav ${openSectin ? 'open-sec' : ''}`} onMouseEnter={()=>setOpenSection(true)} onMouseLeave={()=>setOpenSection(false)}>
                    <h2>Section</h2>
                    <nav className="section-items">
                        <ul>
                            <li><a href='#top'>Top</a></li>
                            <li><a href='#blog'>Blog</a></li>
                            <li><a href='#about'>About</a></li>
                            <li><a href='#works'>Works</a></li>
                            <li><a href='#skills'>Skills</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={`header-nav ${openContact ? 'open-cont' : ''}`}  onMouseEnter={()=>setOpenContact(true)} onMouseLeave={()=>setOpenContact(false)}>
                    <h2>Contact</h2>
                    <nav className="link-items">
                        <ul>
                            <li>
                                <a href='mailto:m.komukai0123@gmail.com'>e-mail  <i className="fa-regular fa-envelope"></i></a>
                                
                            </li> 
                            <li>
                                <a href='https://github.com/LSbard000com'>GitHub  <i className="fa-brands fa-github"></i></a>
                                
                            </li>
                            <li>
                                <a href='https://note.com/ready_dietes6250/'>note  <i className="fa-solid fa-pen-to-square"></i></a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
            
            
        </div>
    </div>
  )
}

export default Header
