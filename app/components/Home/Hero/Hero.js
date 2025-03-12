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
        {/* icons section  */}
        <div>
          <Image
            src="images/Icon_Order.svg"
            alt="order icon"
            width={85}
            height={85}
          />
        </div>
        <div>
          <Image
            src="images/Icon_Delivered.svg"
            alt="order icon"
            width={85}
            height={85}
          />
        </div>
        <div>
          <Image
            src="images/Icon_Cancel.svg"
            alt="order icon"
            width={85}
            height={85}
          />
        </div>
        <div>
          <Image
            src="images/Icon_Revenue.svg"
            alt="order icon"
            width={85}
            height={85}
          />
        </div>
      </div>
    </div>
  );
}
