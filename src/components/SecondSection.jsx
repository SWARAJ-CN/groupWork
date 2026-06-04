// import React from 'react'
import { CiSettings } from "react-icons/ci";
import { RxCrosshair2 } from "react-icons/rx";
import { FaEdit } from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { VscCommentDiscussion } from "react-icons/vsc";
import laptopFrame from "../assets/notebook.svg";
import screenImage from "../assets/notebook-kali-2024.1.jpg";

const SecondSection = () => {
  return (
    <>
      <div className="bg-black w-full h-[220vh]">
        <div className="p-20 space-y-8 text-center flex flex-col justify-center items-center">
          <p className="text-5xl font-bold bg-linear-to-tr from-indigo-500 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
            The Industry Standard
          </p>
          <p className="text-white text-[26px] w-150">
            Kali Linux is not about its tools, nor the operating system. Kali
            Linux is a <b>platform</b>.
          </p>
        </div>

        <div className="max-w-6xl mx-auto text-white text-center">
          <div className="grid grid-cols-3 space-x-12">
            <div className="text-start space-y-5">
              <button className="flex items-center text-xl gap-2 cursor-pointer">
                <CiSettings className="text-blue-500 text-2xl" />
                Make Your Job Easier
              </button>

              <p className="text-justify">
                You can take any Linux and install pentesting tools on it, but
                you have to set the tools up manually and configure them. Kali
                is optimized to reduce the amount of work, so a{" "}
                <a href="" className="text-blue-500">
                  professional
                </a>{" "}
                can just sit down and go.
              </p>
            </div>
            <div className="text-start space-y-5">
              <button className="flex items-center text-xl gap-2 cursor-pointer">
                <RxCrosshair2 className="text-blue-500 text-2xl" /> Kali
                Everywhere
              </button>
              <p className="text-justify">
                A version of Kali is always close to you, no matter where you
                need it. Mobile devices, Containers, ARM, Cloud providers,
                Windows Subsystem for Linux, Pre-built Virtual Machine,
                Installer Images, and others are all{" "}
                <a href="" className="text-blue-500">
                  available
                </a>
                .
              </p>
            </div>
            <div className="text-start space-y-5">
              <button className="flex items-center text-xl gap-2 cursor-pointer">
                <FaEdit className="text-blue-500 text-2xl" />
                Customization
              </button>

              <p className="text-justify">
                With the use of{" "}
                <a href="" className="text-blue-500">
                  metapackages
                </a>
                , optimized for the specific tasks of a security professional,
                and a highly accessible and well documented{" "}
                <a href="" className="text-blue-500">
                  ISO customization process
                </a>
                , it's always easy to generate an optimized version of Kali for
                your specific needs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 w-2/3 mx-auto mt-20">
            <div className="text-start space-y-5">
              <button className="flex items-center text-xl gap-2 cursor-pointer">
                <HiOutlineBookOpen className="text-blue-500 text-2xl" />
                Documentaion
              </button>

              <p className="text-justify">
                Whether you are a seasoned veteran or a novice, our
                <a href="" className="text-blue-500">
                  documentation
                </a>{" "}
                will have all the information you will need to know about Kali
                Linux. Multiple tips and “recipes” are available, to help ease
                doubts or address any issues. All documentation is open, so you
                can easily contribute.
              </p>
            </div>
            <div className="text-start space-y-5">
              <button className="flex items-center text-xl gap-2 cursor-pointer">
                <VscCommentDiscussion className="text-blue-500 text-2xl" />
                Community
              </button>

              <p className="text-justify">
                Kali Linux, with its{" "}
                <a href="" className="text-blue-500">
                  BackTrack
                </a>{" "}
                lineage, has a vibrant and{" "}
                <a href="" className="text-blue-500">
                  active community
                </a>
                . There are active Kali forums, IRC Channel, Kali Tools
                listings, an open bug tracker system, and even community
                provided tool suggestions.
              </p>
            </div>
          </div>
        </div>

        <div className="relative max-w-8xl mx-auto mt-15">
          <img src={laptopFrame} className="w-full" />

          <img
            src={screenImage}
            className="absolute inset-0 m-auto w-[79%] -top-23 object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default SecondSection;
