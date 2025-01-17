import React from "react";
import SearchInput from "../reusable/searchInput/SearchInput";
import Categories from "./categories/Categories";
import Suggestion from "./suggestion/Suggestion";
import TopRated from "./topRated/TopRated";
import Instructors from "./instructors/Instructors";
import FreeCourses from "./freeCourses/FreeCourses";
import BottomNavigation from "../bottomNavigation/BottomNavigation";

const Home = () => {
  return (
    <>
      <div className="mb-20 mt-10 flex flex-col gap-y-6">
        <div className="px-5">
          <SearchInput placeholder="Search for a course" />
        </div>
        <Categories />
        <Suggestion />
        <TopRated />
        <Instructors />
        <FreeCourses />
        <BottomNavigation />
      </div>
    </>
  );
};

export default Home;
