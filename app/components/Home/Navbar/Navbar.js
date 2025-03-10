import { CgSearch } from "react-icons/cg";
import { GoBellFill } from "react-icons/go";
import { RiMessage2Line } from "react-icons/ri";
import { SlPresent } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="w-[80%] fixed ml-[55px] justify-items-center h-24">
      <div>
        {/* search section  */}
        <input
          type="text"
          placeholder="Search here"
          className="w-[41rem] h-[2.5rem] rounded-lg text-gray-500 align-center justify-center flex ml-20 mt-10 text-left p-5 border border-gray-300 outline-0"
        />
        <div className="flex justify-end">
          <CgSearch className="w-6 h-6 text-gray-400 mt-[-31px] mr-[12px]" />
        </div>
      </div>
      {/* icons section  */}
      <div className="justify-center items-center flex w-[250px] ml-250 mt-[-50] h-15">
        {/* right line  */}
        <div className="absolute right-[-85px] h-[60px] w-[2px] bg-gray-300"></div>

        <div className="grid grid-cols-4 gap-15 p-5">
          <div className="bg-blue-300/40 rounded-xl p-4 mx-auto cursor-pointer ">
            <GoBellFill className="w-6 h-6 text-blue-400 hover:scale-120" />
          </div>
          <div className="bg-blue-300/40 rounded-xl p-4 mx-auto cursor-pointer ">
            <RiMessage2Line className="w-6 h-6 text-blue-400 hover:scale-120" />
          </div>
          <div className="bg-purple-900/25 rounded-xl p-4 mx-auto cursor-pointer">
            <SlPresent className="w-6 h-6 text-[#5e6c93] hover:scale-120" />
          </div>
          <div className="bg-rose-500/25 rounded-xl p-4 mx-auto cursor-pointer">
            <IoSettingsOutline className="w-6 h-6 text-rose-500 hover:scale-120" />
          </div>
        </div>
      </div>
    </div>
  );
}
