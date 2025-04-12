import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { connectDB } from "@/utils/connectDB";
import { authOption } from "../auth/[...nextauth]/route";
import User from "@/models/User";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: Request) {
  await connectDB();

  const session = await getServerSession(authOption);
  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await User.findOne({ email: session.user.email }).select(
    "-password -_id -__v",
  );

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ data: user }, { status: 200 });
}

export async function PATCH(req: Request) {
  await connectDB();

  const session = await getServerSession(authOption);
  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { phone, gender, bio, headline } = body;

  try {
    const user = await User.findOneAndUpdate(
      { email: session.user.email },
      {
        phone: phone || null,
        gender: gender || null,
        bio: bio || "",
        headline: headline || "",
      },
      { new: true },
    ).select("-password -_id -__v");

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.log("Profile update error:", error);
    return NextResponse.json(
      { error: "An Error Occurred In Server" },
      { status: 500 },
    );
  }
}
