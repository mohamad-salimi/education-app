import React from "react";
import Image from "next/image";
import Link from "next/link";
import Typography from "../reusable/typography/Typography";
import InputField from "../reusable/inputField/InputField";
import Button from "../reusable/button/Button";
import facebookIcon from "@/public/social-icons/facebook.png";
import googleIcon from "@/public/social-icons/google.png";
import macicon from "@/public/social-icons/mac.png";

const Signin = () => {
  return (
    <div className="flex h-screen flex-col px-5 py-8">
      <div className="flex flex-col gap-3">
        <Typography variant="h1">Welcome back</Typography>
        <Typography variant="body_big" component={"p"} color="text">
          Welcome back. Enter your credentials to access your account
        </Typography>
      </div>
      <form action="" className="mt-10 flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm" htmlFor="email">
            Email Address
          </label>
          <InputField placeholder="hello@example.c" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm" htmlFor="email">
            Password
          </label>
          <InputField placeholder="Password" type="password" />
        </div>
        <Link
          href={"#"}
          className="flex justify-end text-sm font-semibold text-primary"
        >
          Forgot Password?
        </Link>
        <Button format="primary" className="mt-4">
          Sign In
        </Button>
      </form>
      <div className="mt-5 flex flex-1 flex-col gap-7">
        <div className="flex w-full items-center gap-6 rounded-full">
          <span className="flex-1 border-b border-gray-200"></span>
          <Typography variant="body_smallest">or login with</Typography>
          <span className="flex-1 border-b border-gray-200"></span>
        </div>
        <div className="flex justify-between gap-3">
          <span className="flex w-full min-w-24 cursor-pointer items-center justify-center rounded-lg border border-gray-200 p-4 hover:bg-background">
            <Image src={facebookIcon} alt="facebook" width={20} height={20} />
          </span>
          <span className="flex w-full min-w-24 cursor-pointer items-center justify-center rounded-lg border border-gray-200 p-4 hover:bg-background">
            <Image src={googleIcon} alt="google" width={20} height={20} />
          </span>
          <span className="flex w-full min-w-24 cursor-pointer items-center justify-center rounded-lg border border-gray-200 p-4 hover:bg-background">
            <Image src={macicon} alt="mac" width={20} height={20} />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1">
        <Typography variant="body_small" color="text">
          Don’t have an Account?
        </Typography>
        <Link href={"/signup"} className="text-sm font-semibold text-primary">
          Sign up here
        </Link>
      </div>
    </div>
  );
};

export default Signin;
