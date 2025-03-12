import { CgSearch } from "react-icons/cg";
import { GoBellFill } from "react-icons/go";
import { RiMessage2Line } from "react-icons/ri";
import { SlPresent } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-[75%] fixed ml-[65px] bg-white justify-items-center h-24 hidden lg:block">
      <div className="group">
        {/* search section  */}
        <input
          type="text"
          placeholder="Search here"
          className="w-[41rem] h-[2.5rem] rounded-lg text-gray-500 align-center justify-center flex ml-20 mt-10 text-left p-5 border border-gray-300 outline-0"
        />
        <div className="flex justify-end">
          <CgSearch className="w-6 h-6 text-gray-400 mt-[-31px] mr-[12px] transition-transform group-focus-within:scale-125" />
        </div>
      </div>
      {/* icons section  */}
      <div className="justify-center items-center flex w-[250px] ml-250 mt-[-50] h-15 bg-white z-20">
        {/* right line  */}
        <div className="absolute right-[-110px] h-[60px] w-[2px] bg-gray-300 z-50"></div>
        <div className="grid grid-cols-4 gap-15 p-5">
          <div className="bg-blue-300/40 rounded-xl p-4 mx-auto cursor-pointer group">
            <GoBellFill className="w-6 h-6 text-blue-400 transition-transform group-hover:scale-120" />
            <div className="absolute top-0 right-0 w-5 h-5 bg-blue-400 text-white text-xs rounded-full flex items-center justify-center mr-29 mt-7 text-center">
              21
            </div>
          </div>
          <div className="bg-blue-300/40 rounded-xl p-4 mx-auto cursor-pointer group">
            <RiMessage2Line className="w-6 h-6 text-blue-400 transition-transform group-hover:scale-120" />
            <div className="absolute top-0 right-0 w-5 h-5 bg-blue-400 text-white text-xs rounded-full flex items-center justify-center mr-12 mt-7">
              53
            </div>
          </div>
          <div className="bg-purple-900/25 rounded-xl p-4 mx-auto cursor-pointer group">
            <SlPresent className="w-6 h-6 text-[#5e6c93] transition-transform group-hover:scale-120" />
            <div className="absolute top-0 right-0 w-5 h-5 bg-[#5e6c93] text-white text-xs rounded-full flex items-center justify-center -mr-5 mt-7">
              15
            </div>
          </div>
          <div className="bg-rose-500/25 rounded-xl p-4 mx-auto cursor-pointer group z-50">
            <IoSettingsOutline className="w-6 h-6 text-rose-500 transition-transform group-hover:scale-120" />
            <div className="absolute top-0 right-0 w-5 h-5 bg-rose-400 text-white text-xs rounded-full flex items-center justify-center -mr-22 mt-7">
              19
            </div>
          </div>
        </div>
        {/* bg white  */}
        <div className="fixed w-20 h-15 pt-40 mb-25 bg-white ml-80 z-0"></div>
      </div>

      {/* profile section */}
      <div className="justify-start items-center flex w-[180px] ml-390 mt-[-60] h-15 text-start bg-white relative">
        {/* bg white  */}
        <div className="absolute w-50 h-[40px] mb-24 bg-white"></div>
        <div className="ml-3">
          <p>
            <span className="text-sm text-gray-600 mr-1 z-50">Hello,</span>
            <span className="font-bold text-md text-gray-700">Berkcan</span>
          </p>
        </div>
        {/* image section  */}
        <div>
          <Image
            src="/images/pp.jpg"
            alt="profile picture"
            width={50}
            height={50}
            className="rounded-3xl ml-3 select-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
