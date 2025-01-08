import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import Signup from "@/components/signup/Signup";

const SignupPage = async () => {
  const session = await getServerSession(authOption);
  console.log(session);
  if (session) redirect("/");
  return <Signup />;
};

export default SignupPage;
