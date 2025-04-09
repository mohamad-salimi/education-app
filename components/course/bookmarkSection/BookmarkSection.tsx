"use client";
import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

const BookmarkSection = () => {
  const [bookmark, setBookmark] = useState<boolean>(false);

  const toggleBookmark = () => {
    setBookmark((prev) => !prev);
  };

  return (
    <button className="text-primary" onClick={toggleBookmark}>
      {bookmark ? <IoMdHeart size={24} /> : <IoMdHeartEmpty size={24} />}
    </button>
  );
};

export default BookmarkSection;
