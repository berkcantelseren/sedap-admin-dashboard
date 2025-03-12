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
      <div className="grid grid-cols-4 mt-20 ml-10 gap-10">
        {/* icons section  */}
        <div className="flex">
          <Image
            src="images/Icon_Order.svg"
            alt="order icon"
            width={85}
            height={85}
            className="mb-6"
          />
          <div className="ml-5">
            <h1 className="font-bold text-4xl text-gray-700">75</h1>
            <p className="mt-2">Total Orders</p>
            <div className="flex mt-1">
              <Image
                src="images/UpArrow.svg"
                alt="order icon"
                width={16}
                height={16}
              />
              <p className="text-sm text-gray-400 ml-2">4% (30 days)</p>
            </div>
          </div>
        </div>
        {/* second icon  */}
        <div className="flex">
          <Image
            src="images/Icon_Delivered.svg"
            alt="order icon"
            width={85}
            height={85}
            className="mb-6"
          />
          <div className="ml-5">
            <h1 className="font-bold text-4xl text-gray-700">357</h1>
            <p className="mt-2">Total Delivered</p>
            <div className="flex mt-1">
              <Image
                src="images/UpArrow.svg"
                alt="order icon"
                width={16}
                height={16}
              />
              <p className="text-sm text-gray-400 ml-2">4% (30 days)</p>
            </div>
          </div>
        </div>
        {/* third icon  */}
        <div className="flex">
          <Image
            src="images/Icon_Cancel.svg"
            alt="order icon"
            width={85}
            height={85}
            className="mb-6"
          />
          <div className="ml-5">
            <h1 className="font-bold text-4xl text-gray-700">65</h1>
            <p className="mt-2">Total Canceled</p>
            <div className="flex mt-1">
              <Image
                src="images/UpArrow.svg"
                alt="order icon"
                width={16}
                height={16}
              />
              <p className="text-sm text-gray-400 ml-2">25% (30 days)</p>
            </div>
          </div>
        </div>
        {/* fourth icon  */}
        <div className="flex">
          <Image
            src="images/Icon_Revenue.svg"
            alt="order icon"
            width={85}
            height={85}
            className="mb-6"
          />
          <div className="ml-5">
            <h1 className="font-bold text-4xl text-gray-700">$128</h1>
            <p className="mt-2">Total Revenue</p>
            <div className="flex mt-1">
              <Image
                src="images/UpArrow.svg"
                alt="order icon"
                width={16}
                height={16}
              />
              <p className="text-sm text-gray-400 ml-2">12% (30 days)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
