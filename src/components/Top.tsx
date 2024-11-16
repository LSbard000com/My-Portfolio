import topImage from '../assets/img/IMG_7005.jpeg'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const top = () => {

    // 要素の表示を監視
    const { ref, inView } = useInView()

  return (
    <div id='top' className='top'>
        <div className='title' ref={ref}>

            {/* タイトル画像 */}
            <motion.img 
                src={topImage} 
                alt='top image'
                initial={{opacity: 0, boxShadow: '0px 0px 0px #aaa'}}
                animate={inView ? { opacity: 1, boxShadow: '0px 0px 20px #aaa'} : {}}
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
                <div className='title-text name'>
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
                </div>
                <div className='title-text portfolio'>
                    <motion.h2
                        initial={{opacity: 0, x: -50}}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 2 , delay: 4}}
                    >
                        Portfolio
                    </motion.h2>
                </div>
            </div>
        </div>
        <div className='top-navigation'>
            <nav>
                <ul>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#works'>Works</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default top
