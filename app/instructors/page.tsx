import Instructors from "@/components/instructors/Instructors";
import React from "react";

const InstructorsPage = async () => {
  const res = await fetch("http://localhost:3000/api/instructors");
  const data = await res.json();

  return <Instructors {...data} />;
};

export default InstructorsPage;
