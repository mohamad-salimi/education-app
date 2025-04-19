"use client";

import { useRouter, useSearchParams } from "next/navigation";

export const useCourseQueryParams = (url: string) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const getParams = () => {
    return new URLSearchParams(window.location.search);
  };

  const updateParam = (key: string, value: string) => {
    const params = getParams();

    if (value.trim()) {
      params.set(key, value.trim());
    } else {
      params.delete(key);
    }

    router.push(`${url}/${params.toString() ? `?${params.toString()}` : ""}`);
  };

  return {
    query: searchParams,
    updateParam,
  };
};
