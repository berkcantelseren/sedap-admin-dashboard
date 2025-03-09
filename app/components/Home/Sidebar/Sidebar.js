import { FaCircle } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-white text-black flex flex-col p-4">
      {/* Logo */}
      <div className="py-4 ml-8">
        <h1 className="text-4xl font-bold">
          Sedap
          <span className="text-[#00B074] text-[25px] relative left-[2px] top-[7px]">
            •
          </span>
        </h1>

        <p className="text-sm text-gray-500">Modern Admin Dashboard</p>
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col gap-2 mt-4 pl-8">
        {[
          "Dashboard",
          "Profile",
          "Messages",
          "Settings",
          "Notifications",
          "Analytics",
          "Help",
          "Logout",
        ].map((item, index) => (
          <a
            key={index}
            href="#"
            className="px-4 py-2 hover:bg-gray-700 rounded-md"
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
}
