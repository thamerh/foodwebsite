import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SlArrowRightCircle } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="full-width flex-col items-center px-[100px] py-16 grid lg:grid-cols-3 gap-8 bg-black text-white">
      <div>
        <Image
          src="/LOGO FOOTER.png"
          alt="logo"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="text-2xl font-bold text-white">MORE INFOS</h6>
          <ul>
            {["About", "Our partners", "Our technics"].map((item, index) => (
              <li key={index} className="py-2 text-sm font-bold text-[#B5E742]">
                <Link href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="flex w-[170px] items-center justify-between space-x-2 mt-1">
                    <p>{item}</p>
                    <SlArrowRightCircle color="#ffff" size={25} />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col w-[170px] h-[160px] items-center justify-between">
          <h6 className="text-2xl font-bold text-white">WORK TIME</h6>
          <div>
            <Image
              src="/icons/Clock.png"
              alt="logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
          <p className="text-sm font-bold text-[#B5E742]">7/7 DAYS 24H</p>
        </div>
        <div className="flex flex-col w-[350px] h-[160px] items-center justify-between">
          <p className="text-[13px] text-white">
            Naturally, discussions of the mechanism cannot rely only on The
            Bounce of Various Ratio (Wendell Kilgore in The Book of the
            Strategic Management) On the contrary, the lack of knowledge of the
            evolution of the systolic approach will possibly result in the
            systolic approach. Therefore, the concept of the production cycle
            can be treated as the only solution. So, can it be regarded as a
            common pattern?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
