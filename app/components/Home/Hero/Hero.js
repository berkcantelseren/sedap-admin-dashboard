import { Barlow } from "next/font/google";
import Image from "next/image";

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
      <div className="grid grid-cols-4 mt-20 ml-30">
        <div></div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  );
}
