import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { IoUnlink } from "react-icons/io5";

const Dev = () => {
  return (
    <div className="flex flex-col h-full justify-start">
      <div className="flex flex-row h-1/4 justify-self-center items-start">
        <h1 className="text-3xl mt-4 md:mt-12 md:text-6xl">
          some development stuff
        </h1>
      </div>

      <div className={"flex flex-row w-full justify-around items-center"}>
        <Link to={"https://gearapp.travisvela.com"} target="_blank">
          <IoUnlink className="size-20" />
          <span>app built for archiving instrument info</span>
        </Link>
        <Link to={"https://www.linkedin.com/in/travisvela/"} target="_blank">
          <FaLinkedin className={"size-20"}></FaLinkedin>
        </Link>
      </div>
    </div>
  );
};

export default Dev;
