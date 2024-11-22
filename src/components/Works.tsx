import React, { useState } from 'react'
import matrixCalculation from '../assets/img/行列計算.png'
import mathQuestionBox from '../assets/img/みんなの数学質問箱.png'
import myPortfolio from '../assets/img/ポートフォリオサイト.png'
import Title from './Title';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';


type WorkItemProps = {
    img: string;
    title: string;
    skills: string[];
    explanation: string;
    url: URL;
    setDetail: () => void;
    setWorkInfo: (img:string, title:string,skills:string[],explanation:string,url:URL) => void
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
            setWorkInfo(img,title,skills,explanation,url)
        }


    return (
        <>
            <img src={img} onClick={ClickSetWorkInformation} />
        </>
    )
}




const Works = () => {
    // 作品サムネイルクリックで詳細画面を展開
    const [isDetail, setIsDetail] = useState<boolean>(false)
    const detailOpenAndClose = () => {
        setIsDetail(!isDetail)
    }

    // クリック時に作品のタイトル、使用技術、説明文、urlをセットする関数
    const [img, setImg] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [skills, setSkill] = useState<string[]>([])
    const [explanation, setExplanation] = useState<string>('')
    const [url, setUrl] = useState<URL>({github:'', link:''})

    const setWorkInfo = (img:string, title:string, skills:string[], explanation:string, url:URL) => {
        setImg(img)
        setTitle(title)
        setSkill(skills)
        setExplanation(explanation)
        setUrl(url)
    }


    // 作品リスト
    const workList = [
        {
            title: '行列計算アプリ',
            img : 
            <WorksItem 
                img={matrixCalculation}
                title='行列計算アプリ'
                skills={['HTML','CSS','JavaScript','React','Git','GitHub',' Netlify']}
                explanation='行列の積の計算ができるアプリケーションです。計算する行列のサイズを自由に指定することができます。Reactを初めて用いたアプリケーションで、この開発を通してステートやフックの基本的な使い方を理解することができました。'
                url={{github: 'https://github.com/LSbard000com/Matrix-Calculation', link:'https://poetic-cascaron-d91dd2.netlify.app/'}}
                setDetail={detailOpenAndClose}
                setWorkInfo={setWorkInfo}
            />
        },
        {
            title: 'みんなの数学質問箱',
            img :
            <WorksItem 
                img={mathQuestionBox}
                title='みんなの数学質問箱'
                skills={['HTML','CSS','TypeScript','React','React Router','Firebase Firestore','Firebase Authentication','Fuse.js','Git','GitHub']}
                explanation='数学に関する質問を投稿するWebサイトです。質問に対して回答したり、カテゴリやキーワードで検索する機能を作りました。また、Firebaseを用いてデータベースと認証機能を実装しました。TypeScriptやFirebase、ルーティングなど初めて使った技術が多かったため、かなりの試行錯誤が必要でした。この開発を通して学ぶことも多かったのでとても良い開発になりました。'
                url={{github: 'https://github.com/LSbard000com/math-question-box-app', link:''}}
                setDetail={detailOpenAndClose}
                setWorkInfo={setWorkInfo}
            />
        },
        {
            title: 'ポートフォリオサイト',
            img :
            <WorksItem 
                img={myPortfolio}
                title='ポートフォリオサイト'
                skills={['HTML','CSS','TypeScript','React','Intersection Observer','Framer Motion','react-vertical-timeline-component','Chart.js','Vite','Git','GitHub',' Netlify']}
                explanation='自分のポートフォリオサイトです。Intersection ObserverとFramer Motionを用いたアニメーションをつけたり、レスポンシブデザインを考えたりとUIを意識して開発しました。また、Viteを用いて実行環境を構築してみました。デスクトップとモバイル画面、両方でご覧いただけると幸いです。'
                url={{github: 'https://github.com/LSbard000com/My-Portfolio', link:'https://masatokomukai.netlify.app/'}}
                setDetail={detailOpenAndClose}
                setWorkInfo={setWorkInfo}
            />
        }
    ]



  return (
    <>
    <Title 
            title='Works'
            text='日々の学びを形に残した制作物をご覧ください'
            animationType='right'
    />
    <div id='works' className="works">
        {/* 個々の作品を表示 */}
        <motion.div 
            className='items'
            animate={{ x: [ 0, '-50%'] }}
            transition={{
                repeat: Infinity, // 無限ループ
                duration: 30, // アニメーション全体の時間
                ease: "linear", // 一定速度
            }}

        >
            {workList.map((item,index) => (
                <div key={index} className='item-list'>
                    {item.img}
                </div>
            ))}
            {workList.map((item,index) => (
                <div key={index + workList.length} className='item-list'>
                    {item.img}
                </div>
            ))}
        </motion.div>

        <div className='works-introduction'>
            {workList.map((item,index) => (
                <InView threshold={0.5}>
                    {({ref, inView}) => (
                        <motion.div 
                            key={index}
                            ref={ref}
                            initial={{opacity: 0, y: 50}}
                            animate={inView ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 1.5}}
                        >
                            {item.img}
                            <h2>{item.title}</h2>
                        </motion.div>
                    )}
                </InView>
            ))}
        </div>
        

        {/* 作品の詳細画面 */}
        <div className={isDetail ? 'open' : 'close'}>
            <div className='detail'>
                <div className='detail-container'>

                    {/* 作品サムネイル */}
                    <div className='image'>
                        <img src={img} alt="作品サムネイル" />
                    </div>

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
    </>
  )
}

export default Works
