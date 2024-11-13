import React, { useState } from 'react'
import matrixCalculation from '../assets/img/行列計算.png'


type WorkItemProps = {
    img: string;
    title: string;
    skills: string[];
    explanation: string;
    url: URL;
    setDetail: () => void;
    setWorkInfo: (title:string,skills:string[],explanation:string,url:URL) => void
}

interface URL {
    github: string;
    link: string;
}

// 個々の作品を表示するコンポーネント
const WorksItem:React.FC<WorkItemProps> = (
    {
        img,
        title,
        skills,
        explanation,
        url,
        setDetail,
        setWorkInfo
    }) => {


        // サムネイルをクリック時にskillsとexplanationをセット
        const ClickSetWorkInformation = () => {
            setDetail()
            setWorkInfo(title,skills,explanation,url)
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

    // クリック時に作品のタイトル、使用技術、説明文、urlをセットする関数
    const [title, setTitle] = useState<string>('')
    const [skills, setSkill] = useState<string[]>([])
    const [explanation, setExplanation] = useState<string>('')
    const [url, setUrl] = useState<URL>({github:'', link:''})

    const setWorkInfo = (title:string, skills:string[], explanation:string, url:URL) => {
        setTitle(title)
        setSkill(skills)
        setExplanation(explanation)
        setUrl(url)
    }



  return (
    <div className="works">
        {/* タイトル */}
        <div className="section-title">
            <h2>Works</h2>
        </div>

        {/* 個々の作品を表示 */}
        <div className='items'>
            <WorksItem 
                img={matrixCalculation}
                title='行列計算アプリ'
                skills={['HTML','CSS','JavaScript','React','Git','GitHub',' Netlify']}
                explanation='行列の積の計算ができるアプリケーションです。計算する行列のサイズを自由に指定することができます。Reactを初めて用いたアプリケーションで、この開発を通してステートやフックの基本的な使い方を理解することができました。'
                url={{github: 'https://github.com/LSbard000com/Matrix-Calculation', link:'https://poetic-cascaron-d91dd2.netlify.app/'}}
                setDetail={detailOpenAndClose}
                setWorkInfo={setWorkInfo}
            />
        </div>

        {/* 作品の詳細画面 */}
        <div className={isDetail ? 'open' : 'close'}>
            <div className='detail'>

                {/* 作品の説明 */}
                <div className='explanation'>
                    <div className='work-title'>- {title} -</div>
                    <p>{explanation}</p>
                </div>

                {/* 使用技術 */}
                <div className='skills'>
                    <div className='work-title'>- 使用した技術など -</div>
                    <ul>
                        {skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>

                {/* 作品に関係するURL */}
                <div className='url'>
                    {url.github ? 
                        <div className='url-item'>
                            <a href={url.github}><i className="fa-brands fa-github"></i></a>
                        </div>
                    :
                        <></>
                    }
                    {url.link ? 
                        <div className='url-item'>
                            <a href={url.link}><i className="fa-solid fa-link"></i></a>
                        </div>
                    :
                        <></>
                    }
                    
                </div>

                {/* 閉じるボタン */}
                <div className='close-btn' onClick={detailOpenAndClose}>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className='mask' onClick={detailOpenAndClose}></div>
        </div>
    </div>
  )
}

export default Works
