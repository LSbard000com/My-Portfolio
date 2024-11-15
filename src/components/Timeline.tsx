import { InView } from "react-intersection-observer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimeLine = () => {
    // タイムラインのデータ
    const timelineElements = [
        {
            id: 'event-2019-4',
            title: '2019 - April',
            content: '公立中学校に数学科教員として採用。初任から担任を務める。'
        },
        {
            id: 'event-2020-2',
            title: '2020 - February',
            content: 'コロナの影響で一斉休校に。春休み開けからは在宅勤務になり、オンライン授業を取り入れる中で授業動画作成を担当する。'
        },
        {
            id: 'event-2023-4',
            title: '2023 - April',
            content: '今年度の行事のリーダーになる。教員の仕事分担や渉外を通して、マネジメントの大変さを学ぶ。行事が実施される10月まで大忙しだったが、とても良い経験となった。'
        },
        {
            id: 'event-2023-8',
            title: '2023 - August',
            content: 'アナログな作業を効率化させようとVBAを学習しプログラミングに出会う。プログラミング言語の便利さと複雑さゆえの楽しさに気づき興味を持ち始める。'
        },
        {
            id: 'event-2024-7',
            title: '2024 - July',
            content: 'エンジニアになることを決意し本格的にプログラミングの学習を始める。Webエンジニアとしてのキャリアを軸に、HTML、CSS、JavaScriptの学習をする。現在はRactでの開発、Next.jsの学習に没頭中。'
        },
    ]

    // 画面に表示されたイベントを監視
    return (
        <VerticalTimeline animate={false}>
            {timelineElements.map((element) => (
                <InView key={element.id} threshold={0.5}>
                    {({ref, inView}) => (
                        <div className="vertical-timeline-element" ref={ref} key={element.id}>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ 
                                background: "rgba(0, 80, 112, 0.9)",
                                color: "#fff",
                                boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.5)",
                                transform: inView ? "translateX(0)" : "translateX(50px)",
                                opacity: inView ? 1 : 0,
                                transition: "all 0.5s ease-out",
                            }}
                            contentArrowStyle={{ borderRight: "7px solid rgba(0, 80, 112, 0.9)" }}
                            iconStyle={{ background: "#e5cf6e", color: "#fff" }}         
                        >
                            <h2>{element.title}</h2>
                            <p>{element.content}</p>
                        </VerticalTimelineElement>
                        </div>
                    )}
                    
                </InView>
                
            ))}
            
        </VerticalTimeline>
      );
    };

export default TimeLine
