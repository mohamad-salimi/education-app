import React from "react";
import Instructors from "@/components/instructors/Instructors";

const InstructorsPage = async () => {
  const res = await fetch(`http://localhost:3000/api/instructors`);
  const data = await res.json();

  return <Instructors {...data} />;
};

export default InstructorsPage;
