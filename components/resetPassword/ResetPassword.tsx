"use client";

import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import Button from "../reusable/button/Button";
import InputField from "../reusable/inputField/InputField";
import Typography from "../reusable/typography/Typography";
import { useSearchParams } from "next/navigation";

interface IFormInput {
  password: string;
  rePassword: string;
}

const ResetPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormInput>({
    defaultValues: {
      password: "",
      rePassword: "",
    },
  });
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";
  const id = searchParams.get("id") || "";

  const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
    if (formData.password !== formData.rePassword) {
      setError("rePassword", {
        message: "The password is not the same as repeating it",
      });
      return;
    }

    const payload = {
      id,
      token,
      newPassword: formData.password,
    };
    setLoading(false);
    console.log(payload);

    // TODO: Test Api

    // setLoading(true);
    // try {
    //   const res = await fetch("/api/auth/resetPassword", {
    //     method: "POST",
    //     body: JSON.stringify(payload),
    //     headers: { "Content-Type": "application/json" },
    //   });
    //   const data = await res.json();

    //   setLoading(false);

    //   if (res.status === 201) {
    //     toast.success(data.message)
    //     router.push('/')
    //   } else {
    //     toast.error(data.error);
    //   }
    //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // } catch (err) {
    //   setLoading(false);
    //   toast.error("An Error Occurred In Server");
    // }
  };
  return (
    <div className="flex h-screen flex-col px-5 py-8">
      <div className="flex flex-col gap-3">
        <Typography variant="h1">Please enter new password</Typography>
        <Typography variant="body_big" component={"p"} color="text">
          At least one capital letter and Latin alphabet
        </Typography>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-16 flex flex-col gap-4"
      >
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
              label=" Password"
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

        <Controller
          name="rePassword"
          control={control}
          rules={{
            required: "Confirm password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          }}
          render={({ field }) => (
            <InputField
              {...field}
              label="Confirm Password"
              placeholder="Password"
              type="password"
              id="rePassword"
              onChange={field.onChange}
              value={field.value}
              error={!!errors?.rePassword}
              description={errors?.rePassword?.message}
            />
          )}
        />

        <Button
          format="primary"
          className="mt-4"
          type="submit"
          disabled={loading}
        >
          Continue
        </Button>
      </form>

      <Toaster />
    </div>
  );
};

export default ResetPassword;
