import React, { useState } from 'react'
import matrixCalculation from '../assets/img/行列計算.png'


// 個々の作品を表示するコンポーネント
type WorkItemProps = {
    img: string;
    title: string;
    skills: string[];
    explanation: string;
    setDetail: () => void;
    setTitle: (e:string) => void
    setSkill: (e:string[]) => void;
    setExplanation: (e:string) => void;
}

const WorksItem:React.FC<WorkItemProps> = (
    {
        img,
        title,
        skills,
        explanation,
        setDetail,
        setTitle,
        setSkill,
        setExplanation
    }) => {
        // サムネイルをクリック時にskillsとexplanationをセット
        const ClickSetWorkInformation = () => {
            setDetail()
            setTitle(title)
            setSkill(skills)
            setExplanation(explanation)
        }


    return (
        <div className="work-item">
            <div className='thumbnail' onClick={ClickSetWorkInformation}>
                <img src={img} />
            </div>
            <div className='title'>
                <h3>{title}</h3>
            </div>
        </div>
    )
}

const Works = () => {
    // 作品サムネイルクリックで詳細画面を展開
    const [isDetail, setIsDetail] = useState<boolean>(false)
    const detailOpenAndClose = () => {
        setIsDetail(!isDetail)
    }

    // クリック時に作品のタイトルと使用技術と説明文をセット
    const [title, setTitle] = useState<string>('')
    const [skills, setSkill] = useState<string[]>([])
    const [explanation, setExplanation] = useState<string>('')



  return (
    <div className="works">
        <div className="section-title">
            <h2>Works</h2>
        </div>
        <div className='items'>
            <WorksItem 
                img={matrixCalculation}
                title='行列計算アプリ'
                skills={['HTML','CSS','JavaScript','React','Git','GitHub',' Netlify']}
                explanation='行列の積の計算ができるアプリケーションです。計算する行列のサイズを自由に指定することができます。Reactを初めて用いたアプリケーションで、この開発を通してステートやフックの基本的な使い方を理解することができました。'
                setDetail={detailOpenAndClose}
                setTitle={setTitle}
                setSkill={setSkill}
                setExplanation={setExplanation}
            />
        </div>
        <div className={isDetail ? 'open' : 'close'}>
            <div className='detail'>
                <div className='explanation'>
                    <div className='work-title'>- {title} -</div>
                    <p>{explanation}</p>
                </div>
                <div className='skills'>
                    <div className='work-title'>- 使用した技術など -</div>
                    <ul>
                        {skills.map((skill) => (
                            <li>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='mask' onClick={detailOpenAndClose}></div>
        </div>
    </div>
  )
}

export default Works
