
import React from "react";
import Image from "next/image";

const Contact = () => (
  <div className="lg:flex md:flex overflow-x-hidden ml-[80px] mt-[80px] h-[600px] " id="contact">
    <div className="lg:w-3/4 md:w-full h-[400px] bg-cover bg-center bg-no-repeat" 
         style={{
           backgroundImage: 'url("/Image.jpg")',
           backgroundPosition: "bottom ",
           backgroundSize: "100% 350px",
         }}
    ></div>
    <div className="lg:w-1/4 md:w-full h-[400px] flex flex-col">
      <Image
        src="/branch with leaves.png"
        alt="logo"
        width={600}
        height={600}
        className="object-contain h-[400px]"
      />
      <div
        className="lg:bg-cover lg:bg-[#A9A9A9] lg:w-[600px] md:bg-[#A9A9A9] h-[400px] flex flex-row items-center justify-between p-[40px] "
        style={{ position: "relative", top: "-43%", left: "-200px" }}
      >
        <div className="flex flex-col ">
          <p className="text-2xl font-bold text-white mb-[10px]">contact</p>
          <div className="flex flex-row">
            <div>
              <Image
                src="/icons/Phone 2.png"
                alt="logo"
                width={50}
                height={50}
                className="object-contain "
              />
            </div>
            <div className="flex flex-col items-center justify-center ml-[10px]">
              <p className="text-sm font-bold text-[#ffff]">05 234 567 89</p>
              <p className="text-sm font-bold text-[#ffff]">05 234 567 89</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
         <div className="flex flex-row">
            <div>
              <Image
                src="/icons/Email.png"
                alt="logo"
                width={50}
                height={50}
                className="object-contain "
              />
            </div>
            <div className="flex flex-col items-center justify-center ml-[10px]">
            <p className="text-sm font-bold text-[#ffff]">greenrata@contact.com</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>

);

export default Contact;
