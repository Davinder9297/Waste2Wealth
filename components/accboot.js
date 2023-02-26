import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

const Faq = () => (
 <div className='flex justify-center h-auto '>
   <div className='w-1/2 '>
    <h1>Frequently Asked Questions? </h1>
    <div className='bg-white text-white'><Accordion>
      <AccordionItem className="bg-white " title="Title 1">
        <div className='text-white'>fdfadfadfadfd</div>
      </AccordionItem>
      <AccordionItem title="Title 2">
        fdfadfadfadfd
      </AccordionItem>

      <AccordionItem title="Title 3">
        fdfadfadfadfd
      </AccordionItem>

    </Accordion>
    </div>
  </div>

  <div>
    <img src="faq.png" alt="" />
  </div>
 </div>
);



export default Faq;