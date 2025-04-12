import React from "react";
import Profile from "@/components/profile/Profile";
import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

const ProfilePage = async () => {
  const session = await getServerSession(authOption);
  if (!session || !session.user) redirect("/");

  const rawHeaders = await headers(); // headers() returns a Promise
  const headersObj: Record<string, string> = {};

  // Convert ReadonlyHeaders into a plain object
  rawHeaders.forEach((value, key) => {
    headersObj[key] = value;
  });

  const res = await fetch(`http://localhost:3000/api/profile`, {
    method: "GET",
    headers: headersObj,
  });
  const data = await res.json();

  return <Profile {...data} />;
};

export default ProfilePage;
