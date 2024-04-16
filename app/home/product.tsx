import React from "react";
import { FaHandsHelping, FaIdeal } from "react-icons/fa";
import { LuArmchair } from "react-icons/lu";
import { MdOutlineTableRestaurant } from "react-icons/md";

const Product = () => {
  const productitems = [
    {
      id: 1,
      title: "Quality Furniture",
      subTitle: "Living Room",
    },
    {
      id: 2,
      title: "Modern Design",
      subTitle: "Bedroom",
    },
    {
      id: 3,
      title: "Amazing Deals",
      subTitle: "Living Room",
    },
    {
      id: 4,
      title: "Best Support",
      subTitle: "Kitchen Appliances",
    },
  ];
  return (
    <div className="container">
      <div className="grid grid-cols-4 max-md:grid-cols-1 max-lg:grid-cols-2 gap-2 p-2">
        {productitems.map((item) => (
          <div
            key={item.id}
            className="w-full h-full bg-gray-500 flex flex-col justify-between py-6 px-8"
          >
            <div className="h-20 w-20 rounded-full bg-red-300 flex justify-center items-center">
              <MdOutlineTableRestaurant size={66} color="white" />
            </div>
            <p className="text-2xl py-2">Quality Furniture</p>
            <p className="text-[17px]">
              Far far away, behind the word mountains, far from the countries
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
