import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-black w-full">
      <div className="container text-white grid grid-cols-5 gap-8 py-10">
        <div className="flex flex-col text-[16px] gap-3">
          <small>Usefull Links</small>
          <Link href="#">Returns policy</Link>
          <Link href="#">Terms & Conditions</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#">Our Sitemap</Link>
        </div>
        <div className="flex flex-col text-[16px] gap-3">
          <small>Our Vision</small>
          <p>
            Our vision is to continue to put smiles on the faces of our
            customers through sustainable and dependable products.
          </p>

          <p>XYLO Building 307 Adeola Odeku Victoria Island, Lagos.</p>
          <p>Phone: +234 906 150 0002</p>
        </div>
        <div className="flex flex-col text-[16px] gap-3">
          <small>pages</small>
          <Link href="#">Bedroom</Link>
          <Link href="#">Kitchen</Link>
          <Link href="#">Dinning</Link>
          <Link href="#">LivingRoom</Link>
          <Link href="#">Babies & Kids</Link>
          <Link href="#">Office</Link>
          <Link href="#">Tables</Link>
        </div>
        <div className="flex flex-col">
          <Link href="#">FAQ</Link>
          <Link href="#">Blog & Articles</Link>
          <Link href="#">My Account</Link>
          <Link href="#">Privacy Policy</Link>
        </div>
        <div className="flex flex-col text-[16px] gap-3">
          <small>Nav Link</small>

          <Link href="#">Home</Link>
          <Link href="#">Gallery</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
