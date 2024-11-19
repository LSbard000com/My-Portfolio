import React, { useEffect, useState } from 'react'

type SectionProps = {
    children: React.ReactNode
    layoutType: 'left' | 'right'
}

type LayoutType = 'row' | 'column' | 'row-reverse' | 'column-reverse';

const Section:React.FC<SectionProps> = ({children, layoutType}) => {
    const [layout, setLayout] = useState<LayoutType>('row')
    useEffect(() => {
        if(layoutType === 'left'){
            setLayout('row')
        }
        if(layoutType === 'right'){
            setLayout('row-reverse')
        }
    },)

    const style = {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: layout,
    }


  return (
    <div className="section" style={style}>
      {children}
    </div>
  )
}

export default Section
