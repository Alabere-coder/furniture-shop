import React from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const ScreenLinks = () => {
  return (
    <div className="flex gap-6 rotate-90 text-white">
      <p>Follow Us</p>
      <FaArrowRight />
      <div className="flex text-[16px] gap-1 items-center">
        <FaFacebookF color="blue" />
        <small>Facebook</small>
      </div>
      <div className="flex text-[16px] gap-1 items-center">
        <FaInstagram color="purple" />
        <small>Instagram</small>
      </div>
      <div className="flex text-[16px] gap-1 items-center">
        <FaWhatsapp color="green" />
        <small>WhatsApp</small>
      </div>
      <div className="flex text-[16px] gap-1 items-center">
        <FaTwitter color="royalblue" />
        <small>Twitter</small>
      </div>
    </div>
  );
};

export default ScreenLinks;
