"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import Typography from "../reusable/typography/Typography";
import InputField from "../reusable/inputField/InputField";
import Button from "../reusable/button/Button";
import facebookIcon from "@/public/social-icons/facebook.png";
import googleIcon from "@/public/social-icons/google.png";
import macicon from "@/public/social-icons/mac.png";
import toast, { Toaster } from "react-hot-toast";

interface IFormInput {
  fullname: string;
  email: string;
  password: string;
}

const Signup = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
    },
  });

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<IFormInput> = async (payload) => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();

      setLoading(false);

      if (res.status === 201) {
        signIn("credentials", {
          email: payload.email,
          password: payload.password,
          callbackUrl: "/",
        });
      } else {
        toast.error(data.error);
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setLoading(false);
      toast.error("An Error Occurred In Server");
    }
  };

  return (
    <div className="flex h-screen flex-col px-5 py-8">
      <div className="flex flex-col gap-3">
        <Typography variant="h1">Create an Account</Typography>
        <Typography variant="body_big" component={"p"} color="text">
          We are happy to welcome you to this platform
        </Typography>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 flex flex-col gap-4"
      >
        <Controller
          name="fullname"
          control={control}
          rules={{ required: "Full Name is required" }}
          render={({ field }) => (
            <InputField
              {...field}
              label="Full Name"
              placeholder="Full Name"
              id="fullname"
              onChange={field.onChange}
              value={field.value}
              error={!!errors?.fullname}
              description={errors?.fullname?.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => (
            <InputField
              {...field}
              label="Email Address"
              placeholder="hello@example.c"
              id="email"
              onChange={field.onChange}
              value={field.value}
              error={!!errors?.email}
              description={errors?.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          }}
          render={({ field }) => (
            <InputField
              {...field}
              label="Password"
              placeholder="Password"
              type="password"
              id="password"
              onChange={field.onChange}
              value={field.value}
              error={!!errors?.password}
              description={errors?.password?.message}
            />
          )}
        />

        <Button
          format="primary"
          className="mt-4"
          type="submit"
          disabled={loading}
        >
          Create an Account
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
          <span
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="flex w-full min-w-24 cursor-pointer items-center justify-center rounded-lg border border-gray-200 p-4 hover:bg-background"
          >
            <Image src={googleIcon} alt="google" width={20} height={20} />
          </span>
          <span className="flex w-full min-w-24 cursor-pointer items-center justify-center rounded-lg border border-gray-200 p-4 hover:bg-background">
            <Image src={macicon} alt="mac" width={20} height={20} />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1">
        <Typography variant="body_small" color="text">
          Have an Account?
        </Typography>
        <Link href={"/signin"} className="text-sm font-semibold text-primary">
          Sign in here
        </Link>
      </div>

      <Toaster />
    </div>
  );
};

export default Signup;
