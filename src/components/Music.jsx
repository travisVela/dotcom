import React from "react";
import { Link } from "react-router-dom";

import { RiSoundcloudFill } from "react-icons/ri";
import { BsYoutube } from "react-icons/bs";

const Music = () => {
  return (
    <div className="flex flex-col h-full justify-start">
      <div className="flex flex-row h-1/4  justify-self-center items-start">
        <h1 className="text-3xl md:text-6xl mt-4 md:mt-12">some music stuff</h1>
      </div>

      <div className={"flex flex-row w-full justify-around items-center"}>
        <Link to={"https://soundcloud.com/travisvela"} target="_blank">
          <RiSoundcloudFill className="size-20" />
          <span>recordings</span>
        </Link>
        <Link to={"https://www.youtube.com/@travisvela/shorts"} target="_blank">
          <BsYoutube className={"size-20"}></BsYoutube>
          <span>guitar and steel videos</span>
        </Link>
      </div>
    </div>
  );
};

export default Music;
