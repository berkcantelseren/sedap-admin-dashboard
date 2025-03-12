import { Barlow } from "next/font/google";

const BarlowFont = Barlow({
  weight: "600",
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <div className="ml-[350px] -mt-[575px]">
      {/* text section  */}
      <h1 className={` ${BarlowFont.className} font-bold text-2xl`}>
        Dashboard
      </h1>
      <p className="text-gray-400">Hi, Berkcan. Welcome back to Sedap Admin!</p>
    </div>
  );
}
