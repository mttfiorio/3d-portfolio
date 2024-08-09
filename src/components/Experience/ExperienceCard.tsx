import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

type ExperienceCardProps = {
  title: string;
  company_name: string;
  icon: any;
  iconBg: string;
  date: string;
  points: string[];
};

const ExperienceCard = ({
  title,
  company_name,
  icon,
  iconBg,
  date,
  points,
}: ExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      className="custom-icon"
      contentStyle={{
        background: "var(--color-dark)",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  var(--color-dark)" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={icon}
            alt={company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
