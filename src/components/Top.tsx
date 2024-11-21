import topImage from '../assets/img/IMG_7005.jpeg'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Rssfeed from './Rssfeed'
import { useEffect, useState } from 'react'

const top = () => {

    // 要素の表示を監視
    const { ref, inView } = useInView({triggerOnce: true})

    // ナビゲーションの要素
    const navList = [
        {name: 'Blog', id: '#blog'},
        {name: 'About', id: '#about'},
        {name: 'Works', id: '#works'},
        {name: 'Skills', id: '#skills'},
        {name: 'Contact', id: '#contact'},
    ]

    // タイトルテキスト
    const text = "MASATO   KOMUKAI   PORTFOLIO   "


    // ビューポートの幅によって半径を設定
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight)
          };
      
          // リサイズイベントのリスナーを追加
          window.addEventListener("resize", handleResize);
      
          // クリーンアップ関数でリスナーを削除
          return () => {
            window.removeEventListener("resize", handleResize);
          };
        }, []);
    
    const r = 1.8 // 半径
    const fontSize = Math.min( width, height ) / 160  // フォントサイズ
    
    const radius = Math.min( width, height ) / r // 半径

  return (
    <div id='top' className='top'>
        <div className='title' ref={ref}>

            {/* タイトル画像 */}
            <motion.img 
                src={topImage} 
                alt='top image'
                initial={{opacity: 0 }}
                animate={inView ? { opacity: 1} : {}}
                transition={{ duration: 6, delay: 4 }}
            />

            {/* タイトルテキスト */}
            <motion.div
                className='welcome'
                animate={inView ? { opacity: [0, 1, 0] , scale: [1, 1, 1, 4] } : {}}
                transition={{ duration: 3, delay: 1 }}

            >
                <h1>Welcome</h1>
            </motion.div>
            <div className='title-text'>
                <motion.div 
                className='circle-text'
                style={{
                    width: `${radius * 2}px`,
                    height: `${radius * 2}px`,
                    top: `${radius}px)`
                }}
                animate={{ rotate: 360 }} // 360度回転
                transition={{
                    duration: 40, // 10秒で一周
                    ease: "linear", // 一定速度
                    repeat: Infinity, // 無限ループ
                }}
                >
                {text.split("").map((char, index) => {
                    const angle = (360 / text.length) * index; // 各文字の角度
                    return (
                    <motion.span
                        key={index}
                        style={{
                            transform: `rotate(${angle}deg) translate(${radius}px) rotate(90deg)`,
                            fontSize: `${fontSize}rem`,
                        }}
                        initial={{opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 6, delay: 4 }}
                    >
                        {char}
                    </motion.span>
                    );
                })}
                </motion.div>
            </div>
        </div>

        {/* ブログの新着情報 */}
        <motion.div 
            className='rss-feed'
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{duration: 6, delay: 4}}
        >
            <Rssfeed />
        </motion.div>

        <div className='top-navigation'>
            <nav>
                <ul>
                    {navList.map((li,index) => (
                        <motion.li
                        initial={{opacity: 0, x: -50}}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 2 , delay: index / 4 + 6}}
                        key={index}
                        >
                        <a href={li.id}>{li.name}</a>
                        </motion.li>

                    ))}
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default top
