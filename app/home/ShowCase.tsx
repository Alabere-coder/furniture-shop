import Link from "next/link";
import React from "react";
import image1 from "../../public/bed2.jpg";
import image2 from "../../public/sofa/sofa9.jpg";
import image3 from "../../public/drawer3a.webp";
import image4 from "../../public/wardrobe1.webp";
import image5 from "../../public/img-grid-3.jpg";
import Image from "next/image";

const ShowCase = () => {
  return (
    <div className="flex flex-col gap-6 p-6 max-md:p-4">
      <div className="flex max-lg:flex-col w-[100%] gap-4">
        <div className="w-[60%] max-lg:w-full relative h-[25rem] bg-slate-500 border-2">
          <div className="absolute bottom-10 z-10 left-5 max-md:left-4 text-white">
            <p className="font-bold text-3xl max-lg:text-3xl">BED</p>
            <p className="text-xl animate-pulse">Explore More</p>
          </div>
          <Image src={image1} alt="" className="h-full hover:grayscale-[50%]" />
        </div>
        <div className="flex w-[50%] max-lg:w-full max-md:flex-col gap-4">
          <div className="relative w-full max-md:w-full h-[25rem] bg-slate-500 border-2">
            <div className="absolute z-10 bottom-10 left-5 max-md:left-4 text-white">
              <p className="font-bold text-3xl max-lg:text-3xl">WARDROBE</p>
              <p className="text-xl animate-pulse">Explore More</p>
            </div>
            <Image
              src={image4}
              alt=""
              className="h-full hover:grayscale-[50%]"
            />
          </div>
          <div className="relative w-full max-md:w-full h-[25rem] bg-slate-500 border-2">
            <div className="absolute z-10 bottom-10 left-5 max-md:left-4 text-white">
              <p className="font-bold text-3xl max-lg:text-3xl">STOOL-CHAIR</p>
              <p className="text-xl animate-pulse">Explore More</p>
            </div>
            <Image
              src={image5}
              alt=""
              className="h-full hover:grayscale-[50%]"
            />
          </div>
        </div>
      </div>
      <div className="flex max-lg:flex-col w-[100%] gap-4">
        <div className="flex w-[50%] max-lg:w-full max-md:flex-col gap-4">
          <div className="relative w-full max-md:w-full h-[25rem] bg-black text-white border-2">
            <div className="absolute bottom-8 left-8 flex flex-col gap-1 text-[20px]">
              <p className="font-medium text-[12px]">BROWSE MORE</p>
              <p className="hover:text-orange-700">Accessories</p>
              <p className="hover:text-orange-700">Bedroom</p>
              <p className="hover:text-orange-700">Kitchen</p>
              <Link
                href="/gallery/livingRoom"
                className="hover:text-orange-700"
              >
                Living-Room
              </Link>
              <p className="hover:text-orange-700">Office</p>
              <p className="hover:text-orange-700">Dinning-Room</p>
              <p className="hover:text-orange-700">Baby and Kids</p>
            </div>
          </div>
          <div className="relative w-full max-md:w-full h-[25rem] bg-slate-500 border-2">
            <div className="absolute z-10 bottom-10 left-5 max-md:left-4 text-white">
              <p className="font-bold text-3xl max-lg:text-3xl">DRAWER</p>
              <p className="text-xl animate-pulse">Explore More</p>
            </div>
            <Image
              src={image3}
              alt=""
              className="h-full hover:grayscale-[50%]"
            />
          </div>
        </div>
        <div className="w-[60%] max-lg:w-full relative h-[25rem] bg-slate-500 border-2">
          <div className="absolute z-10 bottom-10 left-5 max-md:left-4 text-white">
            <p className="font-bold text-3xl max-lg:text-3xl">SOFA</p>
            <p className="text-xl animate-pulse">Explore More</p>
          </div>
          <Image src={image2} alt="" className="h-full hover:grayscale-[50%]" />
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
