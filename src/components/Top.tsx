import topImage from '../assets/img/IMG_7005.jpeg'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Rssfeed from './Rssfeed'

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

  return (
    <div id='top' className='top'>
        <div className='title' ref={ref}>
            <motion.div 
            className='Masato-Komukai'
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{duration: 1, delay: 7}}
            >
            Masato Komukai Portfolio
            </motion.div>

            {/* タイトル画像 */}
            <motion.img 
                src={topImage} 
                alt='top image'
                initial={{opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 5, delay: 6 }}
            />

            {/* タイトルテキスト */}
            <motion.div
                className='welcome'
                animate={inView ? { opacity: [0, 1, 0] } : {}}
                transition={{ duration: 3, delay: 1 }}

            >
                <h1>Welcome to</h1>
            </motion.div>
            <div className='title-texts'>
                <div className='title-text'>
                    <motion.h2 
                        className='first'
                        initial={{opacity: 0, x: -50}}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 2, delay: 3 }}
                    >
                        Masato
                    </motion.h2>
                    <motion.h2 
                        className='last'
                        initial={{opacity: 0, x: -50}}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 2 , delay: 3.5}}
                    >
                        Komukai
                    </motion.h2>
                    <motion.h2
                        className='portfolio'
                        initial={{opacity: 0, x: -50}}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 2 , delay: 4}}
                    >
                        Portfolio
                    </motion.h2>
                </div>
            </div>
        </div>

        {/* ブログの新着情報 */}
        <motion.div 
            className='rss-feed'
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{duration: 1, delay: 7}}
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
