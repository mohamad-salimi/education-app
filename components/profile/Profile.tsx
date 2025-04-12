"use client";

import React, { FC, useState } from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import InputField from "../reusable/inputField/InputField";
import SelectOption from "../reusable/selectOption/SelectOption";
import TextArea from "../reusable/textArea/TextArea";
import Typography from "../reusable/typography/Typography";
import Button from "../reusable/button/Button";
import InstructorButton from "./instructorButton/InstructorButton";
import toast, { Toaster } from "react-hot-toast";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ProfileType } from "./types/Profile.types";

interface IProfile {
  phone: null | string;
  gender: "MALE" | "FEMALE" | "OTHER" | "" | null;
  bio: null | string;
  headline: null | string;
}

interface ProfileProps {
  data: ProfileType;
}

const genders = [
  { title: "Male", value: "MALE" },
  { title: "Female", value: "FEMALE" },
  { title: "Other", value: "OTHER" },
];

const Profile: FC<ProfileProps> = ({ data }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const defaultValues: IProfile = {
    bio: data?.bio || "",
    gender: data?.gender || "",
    headline: data?.headline || "",
    phone: data?.phone || "",
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ProfileType>({ defaultValues });

  const isStudent = data?.role === "STUDENT";

  const onSubmit: SubmitHandler<ProfileType> = async (payload) => {
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
    }
  };

  return (
    <div className="flex flex-col gap-y-3 px-5 pb-24 pt-4">
      {isStudent && (
        <div className="border-b border-b-secondary pb-4">
          <InstructorButton />
        </div>
      )}

      <div className="flex flex-col items-center gap-y-3">
        <Image
          alt="avatar"
          src={"/placeholder/placeholder-avatar.png"}
          width={94}
          height={94}
          className="rounded-full p-[1px] outline outline-2 outline-primary"
        />
        <div className="flex flex-col items-center gap-y-1">
          <Typography variant="h3">{data?.fullname}</Typography>
          <Typography variant="body_main" color="text">
            {data?.email}
          </Typography>
        </div>
      </div>

      <form
        className="flex flex-1 flex-col gap-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="phone"
          control={control}
          rules={{
            pattern: {
              value: /^[0-9+()\s-]*$/,
              message: "Only phone numbers are allowed",
            },
          }}
          render={({ field: { value, onChange } }) => {
            return (
              <InputField
                type="tel"
                label="Phone"
                placeholder="(555) 555-1234"
                value={value?.toString()}
                onChange={onChange}
                error={!!errors?.phone}
                description={errors?.phone?.message}
              />
            );
          }}
        />

        <Controller
          name="headline"
          control={control}
          rules={{
            maxLength: {
              value: 100,
              message: "Headline must be 100 characters or less",
            },
          }}
          render={({ field: { value, onChange } }) => {
            return (
              <InputField
                label="Headline"
                value={value as string}
                onChange={onChange}
                maxLength={100}
                error={!!errors?.headline}
                description={errors?.headline?.message}
              />
            );
          }}
        />

        <Controller
          name="gender"
          control={control}
          render={({ field: { value, onChange } }) => {
            return (
              <SelectOption
                id="gender"
                label="Gender"
                options={genders}
                placeholder="Select Gender"
                value={value as string}
                onChange={onChange}
                error={!!errors?.gender}
                description={errors?.gender?.message}
              />
            );
          }}
        />

        <Controller
          name="bio"
          control={control}
          rules={{
            maxLength: {
              value: 1000,
              message: "Bio must be 1000 characters or less",
            },
          }}
          render={({ field: { value, onChange } }) => {
            return (
              <TextArea
                label="Bio"
                id="bio"
                placeholder="Share a little about yourself—your interests, work, or anything fun."
                onChange={onChange}
                value={value as string}
                maxLength={1000}
                error={!!errors?.bio}
                description={errors?.bio?.message}
              />
            );
          }}
        />
        <Button format="tonal" type="submit" disabled={loading}>
          Submit Changes
        </Button>
      </form>

      <button
        className="rounded-xl border border-red-500 py-3.5 text-red-500"
        onClick={() => signOut()}
      >
        Logout
      </button>

      <Toaster />
    </div>
  );
};

export default Profile;
