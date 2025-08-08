import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { IoUnlink } from "react-icons/io5";

const Dev = () => {
  return (
    <div className="flex flex-col h-full justify-start">
      <div className="flex flex-row h-1/4 w-full justify-center items-start">
        <h1 className="text-2xl  mt-4 md:text-6xl  md:mt-12">
          some development stuff
        </h1>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-around">
        <Link
          to={"https://gearapp.travisvela.com"}
          target="_blank"
          className="block max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
        >
          <IoUnlink className="size-10" />
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            gearapp
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            app built for archiving instrument info
          </p>
        </Link>
        <Link
          to={"https://www.linkedin.com/in/travisvela/"}
          target="_blank"
          className="block max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
        >
          <FaLinkedin className={"size-10"}></FaLinkedin>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            linked in
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            resume and certs and stuff
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Dev;
