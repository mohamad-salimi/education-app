import React from "react";
import Badge from "../reusable/badge/Badge";
import BottomNavigation from "../bottomNavigation/BottomNavigation";

const Home = () => {
  return (
    <>
      <div className="mt-10 flex flex-col flex-wrap items-center gap-3">
        <Badge title="Design" format="primary" />
        <Badge title="Social Sciences" format="info" />
        <Badge title="Sport" format="warning" />
        <Badge title="Language Learning" format="error" />
        <Badge title="Medicine" format="success" />
        <BottomNavigation />
      </div>
    </>
  );
};

export default Home;
