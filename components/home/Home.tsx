import React from "react";
import Badge from "../reusable/badge/Badge";
import Button from "../reusable/button/Button";
import InputField from "../reusable/inputField/InputField";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center flex-wrap gap-3 mt-10">
        <Badge title="Design" format="primary" />
        <Badge title="Social Sciences" format="info" />
        <Badge title="Sport" format="warning" />
        <Badge title="Language Learning" format="error" />
        <Badge title="Medicine" format="success" />
        <Button format="tonal">Sign In</Button>
        <div className="flex items-center gap-3">
          <Button format="primary">Show 34 results</Button>
          <Button format="text">Sign In</Button>
        </div>
        <InputField placeholder="Name" />
      </div>
    </>
  );
};

export default Home;
