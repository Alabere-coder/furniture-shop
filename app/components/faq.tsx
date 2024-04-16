"use client";

import { Collapse } from "@arco-design/web-react";
import React from "react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
const CollapseItem = Collapse.Item;

const Faq = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center max-md:w-[90%] m-auto my-10">
      <p className="text-4xl text-center max-md:text-3xl">
        Frequently Asked Questions
      </p>
      <Collapse accordion style={{ maxWidth: 1180 }}>
        <CollapseItem header="Do you manufacture all your furniture?" name="1">
          Yes, we do. We operate 2 state of the art factories in Mushin, Lagos.
          Iyalla factory is for all our board work: doors, kitchen, wardrobes,
          consoles, tables, etc Bishop Aggey factory houses our upholstery,
          carpentry, and spray department.
        </CollapseItem>
        <CollapseItem header="Beijing Toutiao Technology Co., Ltd." name="2">
          Beijing Toutiao Technology Co., Ltd.
        </CollapseItem>
        <CollapseItem header="Beijing Toutiao Technology Co., Ltd." name="3">
          Beijing Toutiao Technology Co., Ltd.
        </CollapseItem>
      </Collapse>
      {/* <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Do you manufacture all your furniture?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we do. We operate 2 state of the art factories in Mushin,
            Lagos. Iyalla factory is for all our board work: doors, kitchen,
            wardrobes, consoles, tables, etc Bishop Aggey factory houses our
            upholstery, carpentry, and spray department.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>When is my order confirmed?</AccordionTrigger>
          <AccordionContent>
            Your order is accepted when you make a deposit of 80% of the
            invoice. The balance of 20% will be paid after production, i.e., the
            items will be fully paid for before they are picked up from the
            factory. You can also make 100% payment if you wish.
            {/* Yes. It comes with default styles that matches the other
            components&apos; aesthetic. 
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            How long does it take to process orders?
          </AccordionTrigger>
          <AccordionContent>
            Depending on the type of product and quantity you ordered, our
            products are manufactured within 1 week upwards. Please make sure
            you chat with our representative for detailed information about the
            product you are ordering. You can do this via WhatsApp.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Can I order my own specifications and dimensions?
          </AccordionTrigger>
          <AccordionContent>
            Yes, you can. Always share your specifications and dimensions with
            our representative on WhatsApp before ordering.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            How do I know which fabric I'm picking?
          </AccordionTrigger>
          <AccordionContent>
            We have a range of various fabrics to choose from. Our
            representative is always available to help you choose fabric that
            suits best with your needs. We will send you samples via WhatsApp if
            necessary.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Where is your representative?</AccordionTrigger>
          <AccordionContent>
            Click on the WhatsApp Icon at the bottom right of your screen to
            chat with our representative. Or call us on this number
            +2348022233334444
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}
    </div>
  );
};

export default Faq;
