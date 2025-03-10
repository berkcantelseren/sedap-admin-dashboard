"use client";

import { navItems } from "./NavItems";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppinsFont = Poppins({
  weight: "600",
  subsets: ["latin"],
});

export default function Sidebar() {
  const pathname = usePathname();

  const getActiveClass = (href) => {
    const isActive =
      pathname === href || (pathname === "/" && href === "/dashboard");
    return isActive
      ? "bg-green-100 text-[#00B074] font-bold hover:fill-[#00B074]"
      : "hover:bg-green-100 hover:text-[#00B074] hover:fill-[#00B074]";
  };

  return (
    <div className="sticky top-0 h-screen w-[345px] bg-white text-black flex flex-col p-4">
      {/* Logo */}
      <div className="py-4 ml-10 mb-10">
        <h1
          className={`${poppinsFont.className} text-[3rem] font-bold text-[#333333] custom-selection-2`}
        >
          Sedap
          <span className="text-[#00B074] text-[25px] relative left-[2px] top-[7px] select-none">
            •
          </span>
        </h1>

        <p className="text-[18px] text-gray-400 custom-selection-2">
          Modern Admin Dashboard
        </p>
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col gap-2 mt-4 pl-10">
        {navItems.map((item, index) => {
          const isActive =
            pathname === item.href ||
            (pathname === "/" && item.href === "/dashboard");

          return (
            <a
              key={index}
              href={item.href}
              className={`relative px-4 py-2 rounded-md transition select-none ${getActiveClass(
                item.href
              )}`}
            >
              {/* Green indicator */}
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-1 h-8 bg-[#00B074] rounded-r-md select-none cursor-auto"></span>
              )}
              <span className="flex items-center gap-4">
                <span className="text-xl">{item.icon}</span>
                {item.label}
              </span>
            </a>
          );
        })}
        {/* // Banner  */}
        <div className="bg-[#00B074] w-[260px] h-[149px] mt-15 mb-15 rounded-lg text-white text-[0.75rem] flex justify-between items-center p-4">
          <div className="flex flex-col justify-start items-center w-full select-none">
            <div className="text-start m-5">
              <span className="whitespace-nowrap">Please, organize your</span>
              <span className="block whitespace-nowrap">
                menus through button
              </span>
              <span className="block">below!</span>
            </div>
            <button className="bg-white text-[15px] text-black font-md rounded-md w-[116px] h-[37px] mb-5 mr-1 cursor-pointer">
              +Add Menus
            </button>
          </div>

          <div className="ml-4 flex-grow flex justify-center items-center">
            <Image
              src="/images/illustration.svg"
              alt="image of chef wearing chef hat"
              width={76.59}
              height={90.83}
              className="transform scale-150 mr-5 select-none"
            />
          </div>
        </div>
      </nav>
      {/* Footer Part  */}
      <footer className="w-[245px] h-[78px] items-center p-4 ml-7 select-none">
        <div>
          <span className="font-bold text-[13px] block leading-4 text-nowrap text-gray-400">
            Sedap Restaurant Admin Dashboard
          </span>
          <span className="text-sm text-gray-400 text-nowrap block">
            © 2025 All Rights Reserved
          </span>

          <span className="text-sm text-gray-400 text-nowrap block mt-5">
            Made with <span className="text-rose-500">♥</span> by
            <a
              href="https://peterdraw.co/"
              className="ml-1 hover:text-rose-500 hover:underline"
            >
              Peterdraw
            </a>
          </span>
          <span className="text-sm text-gray-400 text-nowrap block">
            Used with <span className="text-rose-500">♥</span> by
            <a
              href="https://www.linkedin.com/in/berkcantelseren/"
              className="ml-1 hover:text-rose-500 hover:underline"
            >
              brkcntlsrn
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
