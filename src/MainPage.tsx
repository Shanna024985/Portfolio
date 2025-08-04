import React from "react";

const MainPage = () => {
  return (
    <div className="containerBackground">
      <div className="w-screen text-left h-screen p-25 flex flex-col place-content-evenly">
        <div className="flex justify-between ">
          <div className="flex flex-col gap-3 flex-wrap justify-center">
            <h1 className="text-white">Hi,</h1>
            <h1 className="text-white">I am Shanna</h1>
            <h1 className="text-white">Software Engineer</h1>
          </div>
          <div className="text-white gap-10 flex flex-col">
            <a href="#moreAboutMe">
              <h1 className="text-white font-normal">About me!</h1>
            </a>

            <h1>My projects</h1>
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
