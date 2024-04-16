import React from "react";
import Image from "next/image";
import img1 from "../../public/gallery/dinner3.jpg";
import img2 from "../../public/gallery/center5.jpg";
import img3 from "../../public/gallery/office8.jpg";
import img4 from "../../public/gallery/kichen5.jpg";
import img5 from "../../public/gallery/sidetable4.webp";
import img6 from "../../public/gallery/sofa11.jpeg";
import img7 from "../../public/gallery/baby7.webp";
import img8 from "../../public/gallery/product-3.png";
import img9 from "../../public/gallery/tv-stand6.jpg";
import img10 from "../../public/gallery/drawer9.webp";
import img11 from "../../public/gallery/single-sofa-03.jpg";
import img12 from "../../public/gallery/wardrobe3.webp";
import Link from "next/link";

const FeaturedCategory = () => {
  const photos = [
    { id: 1, imgSrc: img1, title: "Dinning Table", link: "/#" },
    { id: 2, imgSrc: img2, title: "Center Table", link: "/#" },
    { id: 3, imgSrc: img3, title: "Office Table", link: "/#" },
    { id: 4, imgSrc: img4, title: "Kitchen", link: "/#" },
    { id: 5, imgSrc: img5, title: "SideTable", link: "/#" },
    { id: 6, imgSrc: img6, title: "LivigRoom Sofa", link: "/#" },
    { id: 7, imgSrc: img7, title: "Babies & kids", link: "/#" },
    { id: 8, imgSrc: img8, title: "Arm-Chair", link: "/#" },
    { id: 9, imgSrc: img9, title: "Tv-Stand", link: "/#" },
    { id: 10, imgSrc: img10, title: "DRAWER", link: "/#" },
    { id: 11, imgSrc: img11, title: "Dinning Table", link: "/#" },
    { id: 12, imgSrc: img12, title: "Tv-Stand", link: "/#" },
  ];
  return (
    <div className="flex flex-col justify-center text-center">
      <p className="text-3xl font-normal bg-gray-200 py-1 mb-6">
        FEATURED CATEGORIES
      </p>
      <div className="grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 gap-4 pb-8 px-8">
        {photos.map((item) => (
          <div key={item.id} className=" h-80 w-full">
            <Image
              src={item.imgSrc}
              alt=""
              width={100}
              height={200}
              className=" h-5/6 w-full rounded-t-xl"
              unoptimized
            />
            <div className="bg-gray-200 flex flex-col items-center justify-center rounded-b-xl ">
              <p className="text-xl font-medium">{item.title}</p>
              <Link href={item.link} className="text-red-400 underline mb-2">
                View products
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategory;
