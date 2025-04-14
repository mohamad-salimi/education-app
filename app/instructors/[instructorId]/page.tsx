import React, { FC } from "react";
import Instructor from "@/components/instructor/Instructor";

interface InstructorPageProps {
  params: {
    instructorId: string;
  };
}

const InstructorPage: FC<InstructorPageProps> = async ({ params }) => {
  const { instructorId } = await params;
  const res = await fetch(
    `http://localhost:3000/api/instructors/${instructorId}`,
  );
  const data = await res.json();

  return <Instructor {...data} />;
};

export default InstructorPage;
