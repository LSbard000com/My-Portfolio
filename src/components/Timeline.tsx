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
            date: '2024年 4月'

        }
    ]

    // 


    return (
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(255, 255, 255, 0.2)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.2)" }}
            date="2019年 4月"
            iconStyle={{ background: "#193278", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">公立中学校に配属</h3>
            <p>初任から担任を務める</p>
          </VerticalTimelineElement>
    
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(255, 255, 255, 0.2)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.2)" }}
            date="2019年 4月"
            iconStyle={{ background: "#193278", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">公立中学校に配属</h3>
            <p>初任から担任を務める</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(255, 255, 255, 0.2)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.2)" }}
            date="2019年 4月"
            iconStyle={{ background: "#193278", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">公立中学校に配属</h3>
            <p>初任から担任を務める</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(255, 255, 255, 0.2)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.2)" }}
            date="2019年 4月"
            iconStyle={{ background: "#193278", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">公立中学校に配属</h3>
            <p>初任から担任を務める</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(255, 255, 255, 0.2)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.2)" }}
            date="2019年 4月"
            iconStyle={{ background: "#193278", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">公立中学校に配属</h3>
            <p>初任から担任を務める</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      );
    };

export default TimeLine
