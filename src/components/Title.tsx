import React from 'react'

type TitleProps = {
    title: string;
    text: string;
}

const Title:React.FC<TitleProps> = ({title, text}) => {
  return (
    <>
    <div className="section-title">
        <h2>{title}</h2>
    </div>
    <div className='section-text'>
        <p>{text}</p>
    </div>
    </>
  )
}

export default Title
