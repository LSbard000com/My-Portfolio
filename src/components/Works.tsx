import React from 'react'
import matrixCalculation from '../assets/img/行列計算.png'

interface WorkItemProps{
    img: string;
    title: string;
}

const WorksItem:React.FC<WorkItemProps> = ({img, title}) => {
    return (
        <div className="work-item">
            <div className='thumbnail'>
                <img src={img} />
            </div>
            <div className='work-content'>
                <h3>{title}</h3>
            </div>
        </div>
    )
}


const Works = () => {
  return (
    <div className="works">
        <div className="section-title">
            <h2>Works</h2>
        </div>
        <div className='items'>
            <WorksItem img={matrixCalculation} title='行列計算アプリ' />
        </div>
    </div>
  )
}

export default Works
