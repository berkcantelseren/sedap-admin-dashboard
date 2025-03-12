import { Barlow } from "next/font/google";

const BarlowFont = Barlow({
  weight: "600",
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <div className="ml-[345px] -mt-[575px]">
      <h1 className="font-bold text-2xl">Dashboard</h1>
      <p>Hi, Berkcan. Welcome back to Sedap Admin!</p>
    </div>
  );
}
