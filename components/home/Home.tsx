import React from "react";
import SearchInput from "../reusable/searchInput/SearchInput";
import Categories from "./categories/Categories";
import TopRated from "./topRated/TopRated";
import Instructors from "./instructors/Instructors";
import BottomNavigation from "../bottomNavigation/BottomNavigation";

const Home = () => {
  return (
    <>
      <div className="mb-20 mt-10 flex flex-col gap-y-6">
        <div className="px-5">
          <SearchInput placeholder="Search for a course" />
        </div>
        <Categories />
        <TopRated />
        <Instructors />
        <BottomNavigation />
      </div>
    </>
  );
};

export default Home;
