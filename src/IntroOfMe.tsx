import React from "react";

const IntroOfMe = () => {
  return (
    <div className="p-4 text-left flex mb-4" id="moreAboutMe">
      <div className="flex-1/2 justify-center content-center">
        <img src="../public/IMG_8172.jpg" alt="imageOfMe!" className="h-auto w-[50%] justify-self-center"/>
      </div>
      <div className="flex-1/2">
        <h1>More about me!</h1>
        <p className="mt-7">
          I am a Year 2 Information Technology student at Singapore Polytechnic
          with a strong interest in software development and innovation. My
          technical experience spans web development technologies such as HTML,
          CSS, JavaScript, Java, SQL and Node.js, and I have independently
          expanded my skill set to include Swift (iOS development), Lua
          (Roblox), React, and OAuth.
        </p>
        <p className="mt-4">
          Beyond academics, I serve as President of the Apple Developers
          Society, where I lead initiatives focused on iOS development.
          Collaborating with Apple on multiple events has strengthened my
          leadership, project management, and communication abilities.
        </p>
        <p className="mt-4">
          In the future, I hope to create a start-up from my multiple mini
          projects to improve people's life.
        </p>
      </div>
    </div>
  );
};

export default IntroOfMe;
