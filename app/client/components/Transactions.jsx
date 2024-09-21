import MainButton from "../../../lib/components/MainButton";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../components/ui/Accordion";

const Transactions = () => {
  const transactions = [
    {
      status: "Transaction Failed",
      date: "Apr 27, 24",
    },
    {
      status: "Transaction Failed",
      date: "Apr 27, 24",
    },
    {
      status: "Transaction Failed",
      date: "Apr 27, 24",
    },
    {
      status: "Transaction Failed",
      date: "Apr 27, 24",
    },
    {
      status: "Transaction Completed",
      date: "Apr 27, 24",
    },
    {
      status: "Transaction Completed",
      date: "Apr 27, 24",
    },
  ];

  return (
    <section className="border-2 rounded-lg border-grey-200 p-10">
      <h2 className="text-500 mb-5 text-accent font-medium">My Cards</h2>
      <div className="flex">
        <Image className="mx-auto" src="/card.png" width={250} height={150}></Image>
      </div>
      <div className="flex justify-around">
        <div>
          <p className="opacity-60">Balance</p>
          <p className="font-semibold">120.000Da </p>
        </div>
        <div>
          <p className="opacity-60">Status</p>
          <p className="text-green-400 font-semibold">Active</p>
        </div>
      </div>
      <h2 className="text-500 mb-5 text-accent font-medium">Recent Transactions</h2>
      <div>
        {transactions.map(({ status, date }, index) => {
          return (
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                    {status}/ {date}
                </AccordionTrigger>
                <AccordionContent>Exceeds withdrawal limit</AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </section>
  );
};
export default Transactions;
