import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimeLine = () => {
    return (
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#6ca0dc", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #6ca0dc" }}
            date="2015年"
            iconStyle={{ background: "#6ca0dc", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">市役所勤務開始</h3>
            <p>市民サービス部門に配属され、地域活性化プロジェクトに従事。</p>
          </VerticalTimelineElement>
    
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#f9c74f", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #f9c74f" }}
            date="2023年"
            iconStyle={{ background: "#f9c74f", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">ReactとFirebaseを学ぶ</h3>
            <p>個人プロジェクトを通じて、モダンウェブ開発に取り組む。</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      );
    };

export default TimeLine
