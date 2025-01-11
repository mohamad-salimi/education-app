import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import ForgetPassword from "@/components/forgetPassword/ForgetPassword";

const ForgetPasswordPage = async () => {
  const session = await getServerSession(authOption);
  if (session) redirect("/");
  return <ForgetPassword />;
};

export default ForgetPasswordPage;
