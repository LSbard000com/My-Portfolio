import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { FadeInLeft, FadeInRight } from './Animation'


type TitleProps = {
    title: string;
    text: string;
    animationType: "right" | "left"
}

const Title:React.FC<TitleProps> = ({title, text, animationType}) => {
  // 要素の表示を監視
  const { ref, inView } = useInView()


  // アニメーションの種類を指定
  const [animation, setAnimation] = useState<any>({})
  useEffect(() => {
    if(animationType === "right"){
      setAnimation(FadeInRight)
    } else if (animationType === "left"){
      setAnimation(FadeInLeft)
    }
  },[animationType])

  return (
    <>
    <div className="section-title" ref={ref}>
        <motion.h2
          initial={animation.inital}
          animate={inView ? animation.animate : {}}
          transition={animation.transition}
          exit={animation.exit}
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
