import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const SideInfo = () => {
  let FAQS = [
    { question: "Carte CIB", answer: "The Carte CIB is a bank card that allows customers to access banking services, make payments, and withdraw money from ATMs." },
    {
      question: "How to get a CIB card",
      answer: "You can get a CIB card by applying through your bank. The process usually involves filling out a form and providing necessary documents, such as identification and proof of income.",
    },
    {
      question: "Interbancarité",
      answer: "Interbancarité refers to the interoperability between different banks, allowing a CIB cardholder to use their card in ATMs and payment terminals belonging to other banks.",
    },
    { question: "Contrat porteur", answer: "A contract signed between a customer and the bank to obtain a CIB card. It outlines the responsibilities and terms of use for the cardholder." },
    {
      question: "PIN and E-Payment Password",
      answer: "The PIN (Personal Identification Number) is used to authorize transactions at ATMs and POS terminals. The E-Payment password is used for securing online transactions.",
    },
    { question: "Validity", answer: "The validity of a CIB card is usually indicated by an expiration date printed on the card. It specifies the period during which the card can be used." },
    { question: "ATM issues", answer: "If you encounter issues at an ATM, such as the machine not dispensing cash or swallowing your card, you should immediately contact your bank for assistance." },
    { question: "Terminal de Paiement Électronique", answer: "A Terminal de Paiement Électronique (TPE) is a device that allows merchants to accept payments via bank cards." },
  ];
  return (
    <div className="flex-1 bg-white p-5 rounded-lg shadow-md">
      <h3 className="font-semibold">FAQs</h3>
      {FAQS.map(({ question, answer }, index) => {
        return (
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
};

//  transition-[flex] duration-500 ease-in-out hover:flex-[0] hover:overflow-clip

export default SideInfo;
