import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Service = () => {
  return (
    <div className="container mt-10 m-auto p-5 bg-darkBlue mb-14 w-100% h-auto w-screen">
      {/* <Link href="/">
          <div className="text-orange-500 p-5 bg-slate-500 w-[100px]">back</div>
          </Link> */}
      <h1 className="text-center lg:text-[36px] md:text-[28px] text-white font-bold  my-5">
        I can suggest you...
      </h1>
      <Accordion type="single" className="border-b-2 border-white" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>CRM</AccordionTrigger>
          <AccordionContent>
            Yes. Creating automated CRM systems for the company
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" className="border-b-2 border-white" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>WebSite</AccordionTrigger>
          <AccordionContent>
            Yes. Creating websites of any complexity and providing services for
            them.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" className="border-b-2 border-white" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Platform</AccordionTrigger>
          <AccordionContent>
            Yes. A website to sell your products or service
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Service;
