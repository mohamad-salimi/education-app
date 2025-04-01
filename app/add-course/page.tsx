import React from "react";
import AddCourse from "@/components/addCourse/AddCourse";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/route";

const AddCoursePage = async () => {
  const session = await getServerSession(authOption);
  if (!session) redirect("/");
  return <AddCourse />;
};

export default AddCoursePage;
