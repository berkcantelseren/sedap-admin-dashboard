export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col p-4">
      {/* Logo */}
      <div className="text-2xl font-bold text-center py-4">Sedap</div>

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
