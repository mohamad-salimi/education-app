import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import ResetPassword from "@/components/resetPassword/ResetPassword";

const ResetPasswordPage = async () => {
  const session = await getServerSession(authOption);
  if (session) redirect("/");
  return <ResetPassword />;
};

export default ResetPasswordPage;
