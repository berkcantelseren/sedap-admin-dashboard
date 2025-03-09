"use client";

import { navItems } from "./NavItems";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const getActiveClass = (href) => {
    const isActive =
      pathname === href || (pathname === "/" && href === "/dashboard");
    return isActive
      ? "bg-green-100 text-[#00B074]"
      : "hover:bg-green-100 hover:text-[#00B074]";
  };

  return (
    <div className="h-screen w-[345px] bg-white text-black flex flex-col p-4">
      {/* Logo */}
      <div className="py-4 ml-8">
        <h1 className="text-[2.5rem] font-bold text-[#333333]">
          Sedap
          <span className="text-[#00B074] text-[25px] relative left-[2px] top-[7px]">
            •
          </span>
        </h1>

        <p className="text-sm text-gray-400">Modern Admin Dashboard</p>
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col gap-2 mt-4 pl-8">
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
                <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-1 h-8 bg-[#00B074] rounded-r-md"></span>
              )}
              <span className="flex items-center gap-4">
                <span className="text-xl">{item.icon}</span>
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
