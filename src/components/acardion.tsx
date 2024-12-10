// import React, { useState } from 'react';

// interface AccordionProps {
//   title: string;
//   children: React.ReactNode;
// }

// const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="accordion">
//       <button
//         className="accordion-header flex justify-between items-center w-full p-4 text-left bg-gray-800 text-white hover:bg-gray-700"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span className="font-medium">{title}</span>
//         <span>{isOpen ? '▲' : '▼'}</span>
//       </button>
//       <div
//         className={`accordion-content transition-[max-height] duration-300 ease-in-out overflow-hidden ${
//           isOpen ? 'max-h-[500px] p-4' : 'max-h-0'
//         }`}
//         style={{ backgroundColor: '#1a1a1a', color: '#ccc' }}
//       >
//         {isOpen && <div>{children}</div>}
//       </div>
//     </div>
//   );
// };

// // export default Accordion;
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"

// export function AccordionDemo() {
//   return (
//     <Accordion type="single" collapsible className="w-full">
//       <AccordionItem value="item-1">
//         <AccordionTrigger>Is it accessible?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It adheres to the WAI-ARIA design pattern.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-2">
//         <AccordionTrigger>Is it styled?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It comes with default styles that matches the other
//           components&apos; aesthetic.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-3">
//         <AccordionTrigger>Is it animated?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It&apos;s animated by default, but you can disable it if you
//           prefer.
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   )
// }
