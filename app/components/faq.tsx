"use client";

import { Collapse } from "@arco-design/web-react";
import React from "react";
const CollapseItem = Collapse.Item;

const Faq = () => {
  return (
    <div className="flex flex-col py-10">
      <p className="text-4xl text-center max-md:text-3xl">
        Frequently Asked Questions
      </p>
      <div className="pt-6 flex lg:w-[60%] max-lg:w-[90%] place-self-center">
        <Collapse accordion className=" w-full">
          <CollapseItem
            header="Do you manufacture all your furniture?"
            name="1"
          >
            Yes, we do. We operate 2 state of the art factories in Mushin,
            Lagos. Iyalla factory is for all our board work: doors, kitchen,
            wardrobes, consoles, tables, etc Bishop Aggey factory houses our
            upholstery, carpentry, and spray department.
          </CollapseItem>
          <CollapseItem header="When is my order confirmed?" name="2">
            Your order is accepted when you make a deposit of 80% of the
            invoice. The balance of 20% will be paid after production, i.e., the
            items will be fully paid for before they are picked up from the
            factory. You can also make 100% payment if you wish. Yes. It comes
            with default styles that matches the other components&apos;
            aesthetic.
          </CollapseItem>
          <CollapseItem
            header="How long does it take to process orders?"
            name="3"
          >
            Depending on the type of product and quantity you ordered, our
            products are manufactured within 1 week upwards. Please make sure
            you chat with our representative for detailed information about the
            product you are ordering. You can do this via WhatsApp.
          </CollapseItem>
          <CollapseItem
            header="Can I order my own specifications and dimensions?"
            name="4"
          >
            Yes, you can. Always share your specifications and dimensions with
            our representative on WhatsApp before ordering.
          </CollapseItem>
          <CollapseItem
            header="How do I know which fabric I'm picking?"
            name="5"
          >
            We have a range of various fabrics to choose from. Our
            representative is always available to help you choose fabric that
            suits best with your needs. We will send you samples via WhatsApp if
            necessary.
          </CollapseItem>
          <CollapseItem header="Where is your representative?" name="6">
            Click on the WhatsApp Icon at the bottom right of your screen to
            chat with our representative. Or call us on this number
            +2348022233334444
          </CollapseItem>
        </Collapse>
      </div>
    </div>
  );
};

export default Faq;
