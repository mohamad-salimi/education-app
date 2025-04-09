import React, { FC } from "react";
import Badge from "@/components/reusable/badge/Badge";
import Typography from "@/components/reusable/typography/Typography";

interface SkillType {
  _id: string;
  value: string;
}

interface SkillsSectionProps {
  skills: SkillType[];
}

const SkillsSection: FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <div className="flex flex-col gap-y-4 px-5">
      <Typography variant="h2">Skill you will gain</Typography>
      <div className="flex flex-wrap gap-3">
        {skills?.map((skill) => (
          <Badge key={skill?._id} format="primary" title={skill?.value} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
