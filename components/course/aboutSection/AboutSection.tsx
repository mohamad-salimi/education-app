import React, { FC } from "react";
import Typography from "@/components/reusable/typography/Typography";
import GlobalIcon from "@/components/icons/globalIcon/GlobalIcon";
import TimerIcon from "@/components/icons/timerIcon/TimerIcon";
import ChartIcon from "@/components/icons/chartIcon/ChartIcon";
import MessageIcon from "@/components/icons/messageIcon/MessageIcon";

interface AboutSectionProps {
  level: "beginner" | "intermediate" | "advanced";
}

const options = (level: "beginner" | "intermediate" | "advanced") => {
  return [
    {
      icon: <GlobalIcon />,
      title: "100% Online",
      description: "Start instantly and learn in your own schedule",
    },
    {
      icon: <TimerIcon />,
      title: "Flexible terms",
      description: "Reset deadlines in accordance to your schedule",
    },
    {
      icon: <ChartIcon />,
      title: `${level} Level`,
      description: "You will learn from the beginning",
    },
    {
      icon: <MessageIcon />,
      title: "Chat with Mentor",
      description: "Ask questions and communicate with fellow students",
    },
  ];
};

const AboutSection: FC<AboutSectionProps> = ({ level }) => {
  return (
    <div className="flex flex-col gap-y-4 px-5">
      <Typography variant="h2">About Course</Typography>
      <div className="flex flex-col rounded-lg bg-background">
        {options(level)?.map((item, index) => (
          <div
            key={`ABOUT_${index}`}
            className="flex items-center gap-x-4 border-b border-secondary px-4 py-3 last:border-none"
          >
            <span className="flex text-primary">{item.icon}</span>
            <div className="flex flex-col gap-y-1">
              <Typography variant="body_big" className="capitalize">
                {item.title}
              </Typography>
              <Typography variant="body_main" color="text">
                {item.description}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
