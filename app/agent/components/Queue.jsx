"use client";
import { useState, useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../components/ui/Accordion";
import { useticketContext } from "../../context/ticket";
const Queue = () => {
  const [curr, setCurr] = useState(null);
  const [queue, setQueue] = useState([]);
  const [pinned, setPinned] = useState([]);
  const ticket = useticketContext();

  if (!ticket.value)
    return <h2>Currently there are no tickets</h2>

  return (
    <section className="text-500">
      <h2>Current Ticket</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            {ticket.value.ticket.info}
          </AccordionTrigger>
          <AccordionContent>Exceeds withdrawal limit</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
export default Queue;
