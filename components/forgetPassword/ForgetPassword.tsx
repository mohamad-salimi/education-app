"use client";

import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import Button from "../reusable/button/Button";
import InputField from "../reusable/inputField/InputField";
import Typography from "../reusable/typography/Typography";

interface IFormInput {
  email: string;
}

const ForgetPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      email: "",
    },
  });
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<IFormInput> = async (payload) => {
    setLoading(false);
    console.log(payload);

    // TODO: Test Api

    // setLoading(true);
    // try {
    //   const res = await fetch("/api/auth/forgetPassword", {
    //     method: "POST",
    //     body: JSON.stringify(payload),
    //     headers: { "Content-Type": "application/json" },
    //   });
    //   const data = await res.json();

    //   setLoading(false);

    //   if (res.status === 201) {
    //     toast.success(data.message);
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
        <Typography variant="h1">Please enter you email</Typography>
        <Typography variant="body_big" component={"p"} color="text">
          We will send you a confirmation email
        </Typography>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-16 flex flex-col gap-4"
      >
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
            <>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm" htmlFor="email">
                  Email Address
                </label>
                <InputField
                  {...field}
                  placeholder="hello@example.c"
                  id="email"
                  onChange={field.onChange}
                  value={field.value}
                  error={!!errors?.email}
                  description={errors?.email?.message}
                />
              </div>
            </>
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

export default ForgetPassword;
