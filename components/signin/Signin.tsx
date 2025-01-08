import React from "react";
import Typography from "../reusable/typography/Typography";
import InputField from "../reusable/inputField/InputField";
import Link from "next/link";
import Button from "../reusable/button/Button";

const Signin = () => {
  return (
    <div className="flex flex-col p-5">
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
      <div>
        <div className="mt-4 flex items-center justify-center gap-6">
          <hr className="divide-y-2 border-divider" />
          <Typography variant="body_smallest">or login with</Typography>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Signin;
