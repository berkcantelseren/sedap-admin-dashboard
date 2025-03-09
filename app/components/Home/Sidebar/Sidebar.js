"use client";

import { navItems } from "./NavItems";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";

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
    <div className="h-screen w-[345px] bg-white text-black flex flex-col p-4">
      {/* Logo */}
      <div className="py-4 ml-10 mb-10">
        <h1
          className={`${poppinsFont.className} text-[3rem] font-bold text-[#333333]`}
        >
          Sedap
          <span className="text-[#00B074] text-[25px] relative left-[2px] top-[7px]">
            •
          </span>
        </h1>

        <p className="text-[18px] text-gray-400">Modern Admin Dashboard</p>
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
              className={`relative px-4 py-2 rounded-md transition ${getActiveClass(
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
        <div className="bg-[#00B074] w-[260px] h-[149px] rounded-xl text-white text-[0.75rem]">
          Please, organize your menus through button bellow!
        </div>
      </nav>
    </div>
  );
}
