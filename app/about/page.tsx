"use client";

import Image from "next/image";
import React from "react";
import Img from "../../public/happy.png";
import { Button } from "@arco-design/web-react";

const page = () => {
  return (
    <div className="px-10">
      <div className="h-full w-full grid grid-cols-2 py-10">
        <div className="h-[80vh] w-full flex justify-center items-center">
          <Image src={Img} alt="" className="h-full w-full" unoptimized />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-4xl font-medium mb-8">About Empire Furniture</p>
          <p className="text-[18px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
            necessitatibus dolorem nisi fuga odit, doloremque dolorum illum
            ratione quaerat, eveniet quibusdam? Iure at sapiente fugit
            blanditiis ipsam illo. Quas corporis perspiciatis minus nostrum
            veritatis optio saepe repellat alias blanditiis sint. necessitatibus
            dolorem nisi fuga odit, doloremque dolorum illum ratione quaerat,
            eveniet quibusdam? Iure at sapiente fugit blanditiis ipsam illo.
            Quas corporis perspiciatis minus nostrum veritatis optio saepe
            repellat alias blanditiis sint.
          </p>
          <div className="w-10rem mt-8">
            <Button size="large" style={{ width: "full" }}>
              Explore
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
