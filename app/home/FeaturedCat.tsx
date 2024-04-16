import React from "react";
import Image from "next/image";
import img1 from "../../public/gallery/gallery1.jpg";
import img2 from "../../public/gallery/gallery3.jpg";
import img3 from "../../public/gallery/bed3.webp";
import img4 from "../../public/bed1.jpg";
import img5 from "../../public/gallery/gal4.jpg";
import img6 from "../../public/gallery/work1.jpeg";
import Link from "next/link";

const FeaturedCategory = () => {
  const photos = [
    { id: 1, imgSrc: img1, title: "Dinning Table", link: "/#" },
    { id: 2, imgSrc: img2, title: "Dinning Table", link: "/#" },
    { id: 3, imgSrc: img3, title: "Dinning Table", link: "/#" },
    { id: 4, imgSrc: img4, title: "Dinning Table", link: "/#" },
    { id: 5, imgSrc: img5, title: "Dinning Table", link: "/#" },
    { id: 6, imgSrc: img6, title: "Dinning Table", link: "/#" },
    { id: 7, imgSrc: img4, title: "Dinning Table", link: "/#" },
    { id: 8, imgSrc: img5, title: "Dinning Table", link: "/#" },
    { id: 9, imgSrc: img6, title: "Dinning Table", link: "/#" },
  ];
  return (
    <div className="flex flex-col justify-center text-center">
      <p className="text-xl font-normal bg-gray-200 py-1 mb-6">
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
