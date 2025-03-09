import { CgHome } from "react-icons/cg";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

export const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <CgHome className="text-[#00B074] " />,
  },
  { label: "Order List", href: "/profile", icon: <HiOutlineMenuAlt1 /> },
  { label: "Order Detail", href: "/messages", icon: <HiOutlineMenuAlt1 /> },
  { label: "Customer", href: "/settings", icon: <CgHome /> },
  { label: "Analytics", href: "/notifications", icon: <CgHome /> },
  { label: "Reviews", href: "/analytics", icon: <CgHome /> },
  { label: "Foods", href: "/help", icon: <CgHome /> },
  { label: "Food Detail", href: "/logout", icon: <CgHome /> },
  { label: "Customer Detail", href: "/logout", icon: <CgHome /> },
  { label: "Calendar", href: "/logout", icon: <CgHome /> },
  { label: "Chat", href: "/logout", icon: <CgHome /> },
  { label: "Wallet", href: "/logout", icon: <CgHome /> },
];
