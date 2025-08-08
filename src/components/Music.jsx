import React from "react";
import { Link } from "react-router-dom";

import { RiSoundcloudFill } from "react-icons/ri";
import { BsYoutube } from "react-icons/bs";
import { FaSpotify } from "react-icons/fa";

const Music = () => {
  return (
    <div className="flex flex-col h-full justify-start  ">
      <div className="flex flex-row h-1/4 w-full justify-center items-start">
        <h1 className="text-2xl  mt-4 md:text-6xl  md:mt-12">
          some music stuff
        </h1>
      </div>

      <div className="flex flex-col md:flex-row w-full justify-around">
        <Link
          to={"https://soundcloud.com/travisvela"}
          target="_blank"
          className="block max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
        >
          <RiSoundcloudFill className="size-10" />
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            focus
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            recording from a few years ago
          </p>
        </Link>
        <Link
          to={"https://www.youtube.com/@travisvela/shorts"}
          target="_blank"
          className="block max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
        >
          <BsYoutube className={"size-10"}></BsYoutube>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            videos
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            guitar and steel videos
          </p>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-around">
        <Link
          to={"https://open.spotify.com/artist/0qfC2n7Tlxdvhq81PVOBhm"}
          target="_blank"
          className="block max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
        >
          <FaSpotify className={"size-10"}></FaSpotify>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            pochos chidos
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            cumbia, rock and roll stuff
          </p>
        </Link>
        <Link
          to={"https://open.spotify.com/artist/0ciAhZ8BWQnyXi7q6MYbRN"}
          target="_blank"
          className="block max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
        >
          <FaSpotify className={"size-10"}></FaSpotify>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            the 501s
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            classic country stuff
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Music;
