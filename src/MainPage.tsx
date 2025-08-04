import React from "react";

const MainPage = () => {
  return (
    <div className="containerBackground">
      <div className="w-screen text-left h-screen p-25 flex flex-col place-content-evenly">
        <div className="flex justify-between ">
          <div className="flex flex-col gap-3 flex-wrap content-center">
            <h1 className="text-white">Hi,</h1>
            <h1 className="text-white">I am Shanna</h1>
            <h1 className="text-white">Web Developer </h1>
          </div>
          <div className="text-white gap-10 flex flex-col">
            <h1>About me!</h1>
            <h1>My projects</h1>
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
