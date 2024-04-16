import React from "react";
import bg1 from "../../public/home1.jpg";
import bg2 from "../../public/bed1.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiNavigation } from "react-icons/fi";
import { MdOutlineHorizontalRule } from "react-icons/md";

const Header = () => {
  const pages = [
    {
      id: 1,
      title: "SOFA",
      subTitle: "Living Room",
      link: "/gallery/livingRoom/sofa",
    },
    {
      id: 2,
      title: "Bed Frame",
      subTitle: "Bedroom",
      link: "/gallery/bedroom",
    },
    {
      id: 3,
      title: "Center Table",
      subTitle: "Living Room",
      link: "/gallery/livingRoom",
    },
    {
      id: 4,
      title: "Kitchen Cabinetry",
      subTitle: "Kitchen Appliances",
      link: "/gallery/kitchen",
    },
  ];
  return (
    <div className="h-[600px] w-[100%] flex pt-2">
      <div className="relative w-[100%] max-lg:w-full h-6/6">
        <div className="absolute h-full w-full bg-black opacity-65"></div>
        <div className="flex flex-col max-lg:pl-6 lg:pl-8 mt-8 text-white z-10 absolute justify-center max-lg:top-0 max-lg:bottom-0 max-lg:left-0 max-lg:right-0 max-lg:m-auto">
          <p className="text-[16px] max-lg:ml-1">FURNISHED COLLECTIONS</p>
          <p className="text-4xl max-lg:text-3xl font-semibold pt-4 pb-1">
            Empire Furniture Home
          </p>
          <p className="text-4xl max-lg:text-3xl font-semibold">
            Select From Our Furnished Store
          </p>
        </div>

        <div className="absolute z-10 bottom-16 left-8 max-lg:left-6 text-white flex items-center gap-4">
          <Link href="/" className="">
            <FaFacebookF size="20" />
          </Link>
          <Link href="/" className="">
            <FaInstagram size="20" />
          </Link>
          <MdOutlineHorizontalRule className="text-4xl text-red-500" />
          <Link
            href="/"
            className="flex justify-center items-center gap-2 hover-underline"
          >
            <FiNavigation size="20" color="green" />
            <p>FURNITURE SHOWROOM</p>
          </Link>

          {/* <div className="animate"> */}
          <div className="line"></div>
          {/* </div> */}
        </div>
        <div className="max-lg:hidden absolute lg:pl-8 z-10 top-20 bottom-0 right-0 left-0 m-auto flex items-center gap-4">
          {pages.map((item) => (
            <div key={item.id}>
              <Link href={item.link}>
                <div className="relative h-[10rem] w-[12rem] border-2 border-white text-white hover:bg-white hover:opacity-75 hover:text-black">
                  <p className="absolute top-4 left-6 text-md">LEARN MORE</p>
                  <div className="absolute bottom-6 left-6">
                    <p className="text-xl font-semibold">{item.title}</p>
                    <p className="text-sx opacity-70">{item.subTitle}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div></div>
        <Image
          src={bg2}
          alt=""
          width={100}
          height={200}
          className=" w-full h-full"
          unoptimized
        />
      </div>
    </div>
  );
};

export default Header;
