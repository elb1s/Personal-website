import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
function Experience() {
  return (
    <div className="experience" style={{ paddingBottom: 152 }}>
      <VerticalTimeline lineColor="#ECE8EF">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016-2020"
          iconStyle={{ background: "#F09D51", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Your University</h3>
          <p>University Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021-2024"
          iconStyle={{ background: "#FF7E6B", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Your Work Experince
          </h3>
          <p>I worked here as a Developer etc.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2024-2025"
          iconStyle={{ background: "#FF7E6B", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Your Work Experince
          </h3>
          <p>I worked here as a Developer etc.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
