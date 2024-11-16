import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'


type TitleProps = {
    title: string;
    text: string;
}

const Title:React.FC<TitleProps> = ({title, text}) => {
  // 要素の表示を監視
  const { ref, inView } = useInView()

  return (
    <>
    <div className="section-title" ref={ref}>
        <motion.h2
          initial={{opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          exit={{opacity: 0}}
        >{title}</motion.h2>
    </div>
    <div className='section-text' ref={ref}>
        <motion.p
          initial={{opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 2, delay: 0.8 }}
          exit={{opacity: 0}}
        >{text}</motion.p>
    </div>
    </>
  )
}

export default Title
