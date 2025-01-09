import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import Signin from "@/components/signin/Signin";

const SigninPage = async () => {
  const session = await getServerSession(authOption);
  if (session) redirect("/");
  return <Signin />;
};

export default SigninPage;
