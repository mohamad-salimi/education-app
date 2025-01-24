import React from "react";
import Instructors from "@/components/instructors/Instructors";

type InstructorsPageProps = {
  searchParams?: { [key: string]: string | undefined };
};

const InstructorsPage = async ({ searchParams }: InstructorsPageProps) => {
  const params = await searchParams;
  const splitedParams = params?.field_of_teaching?.split("_");

  const res = await fetch(
    `http://localhost:3000/api/instructors?field_of_teaching=${splitedParams}`,
  );
  const data = await res.json();

  return <Instructors {...data} />;
};

export default InstructorsPage;
