import React, { FC } from "react";
import SearchInput from "../reusable/searchInput/SearchInput";
import Categories from "./categories/Categories";
import Suggestion from "./suggestion/Suggestion";
import TopRated from "./topRated/TopRated";
import Instructors from "./instructors/Instructors";
import FreeCourses from "./freeCourses/FreeCourses";
import BottomNavigation from "../layout/bottomNavigation/BottomNavigation";
import { CategoriesType, CourseType, InstructorType } from "./types/Home.types";

interface HomeProps {
  categories: CategoriesType[];
  courses: CourseType[];
  instructors: InstructorType[];
}

const Home: FC<HomeProps> = ({ categories, courses, instructors }) => {
  return (
    <>
      <div className="mb-20 mt-2 flex flex-col gap-y-4">
        <div className="sticky top-0 z-[100] bg-white px-5 py-3">
          <SearchInput placeholder="Search for a course" />
        </div>
        <Categories categories={categories} />
        <Suggestion courses={courses} />
        <TopRated courses={courses} />
        <Instructors instructors={instructors} />
        <FreeCourses courses={courses} />
        <BottomNavigation />
      </div>
    </>
  );
};

export default Home;
