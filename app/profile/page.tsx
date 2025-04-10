import React from "react";
import Profile from "@/components/profile/Profile";
import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const session = await getServerSession(authOption);
  if (!session || !session.user) redirect("/");

  const res = await fetch(`http://localhost:3000/api/profile`);
  const data = await res.json();

  return <Profile {...data} />;
};

export default ProfilePage;
