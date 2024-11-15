import { useEffect, useState } from "react";

const Footer = () => {
  // 画面上部ではジャンプボタンを非表示
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

  // 表示画面の高さ分スクロールしたらジャンプボタンのクラスを変化させる
  const [jumpBtn, setJumpBtn] = useState<boolean>(false)

  useEffect(() => {
    setJumpBtn(scrollPosition > innerHeight)
  },[scrollPosition])

  return (
    <div className='footer'>
      <div className='copyright'>
        <div>&copy; Masato Komukai Portfolio</div>
      </div>
      <div className={jumpBtn ? 'open' : 'close'}>
        <div className='jump-btn'>
          <a href='#top'>
            <span></span>
            <span></span>
          </a>
        </div>
      </div> 
    </div>
  )
}

export default Footer
