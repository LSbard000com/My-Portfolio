import { useState } from 'react'
import topImage from '../assets/img/IMG_7005.jpeg'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const top = () => {
    // トグルボタンをクリックするたびにクラスを付与したり外したりする
    const [open, setOpen] = useState<boolean>(false)



    // 要素の表示を監視
    const { ref, inView } = useInView()

  return (
    <div id='top' className={`top ${open ? 'open' : ''}`}>
        <div className='title' ref={ref}>
            <motion.img 
                src={topImage} 
                alt='top image'
                initial={{opacity: 0, boxShadow: '0px 0px 0px #aaa'}}
                animate={inView ? { opacity: 1, boxShadow: '0px 0px 20px #aaa'} : {}}
                transition={{ duration: 5 }}
            />
            <div className='title-text name'>
                <motion.h2 
                    className='first'
                    initial={{opacity: 0, x: -50}}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    Masato
                </motion.h2>
                <motion.h2 
                    className='last'
                    initial={{opacity: 0, x: -50}}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1 , delay: 2}}
                >
                    Komukai
                </motion.h2>
            </div>
            <div className='title-text portfolio'>
                <motion.h2
                    initial={{opacity: 0, x: -50}}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1 , delay: 2.5}}
                >
                    Portfolio
                </motion.h2>
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
