import { FaSearch } from "react-icons/fa";
import { FaCreditCard, FaMoneyBillAlt, FaExclamationTriangle, FaExchangeAlt, FaLock, FaClock } from "react-icons/fa";
import { useChatContext } from "../context/chat";
import {useState} from 'react';
const Suggestions = () => {
  const transactionProblems = [
    {
      title: "Card Declined",
      description: "Payments may be declined due to insufficient funds, expiration, or incorrect details.",
      icon: <FaCreditCard size={30} />,
    },
    {
      title: "Transaction Fees",
      description: "Additional fees may apply for some transactions, especially internationally.",
      icon: <FaMoneyBillAlt size={30} />,
    },
    {
      title: "Failed Online Payment",
      description: "Payments can fail due to incorrect info, expired cards, or poor connectivity.",
      icon: <FaExclamationTriangle size={30} />,
    },
    {
      title: "ATM Withdrawal Errors",
      description: "Issues like cash not dispensing or card getting stuck may need bank assistance.",
      icon: <FaExchangeAlt size={30} />,
    },
    {
      title: "Unauthorized Transactions",
      description: "Watch for suspicious activity or unauthorized charges on your account.",
      icon: <FaLock size={30} />,
    },
    {
      title: "Payment Delays",
      description: "Transactions may take longer to process, particularly for international transfers.",
      icon: <FaClock size={30} />,
    },
  ];
  const chat = useChatContext();
  const [inputValue, setInputValue] = useState("");
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      chat.setValue(inputValue);
      setInputValue("");
    }
  };
  return (
    <section className="flex-[3] text-center my-5">
      <h4>AI Agent</h4>
      <h2 className="text-500 my-4 font-semibold tracking-wide text-accent">Ask Us Anything</h2>
      <p className="opacity-60">Have any questions? We're here to assist you.</p>
      <div className="flex items-center gap-3 mt-8 mx-auto border-2 border-gray-400 w-fit rounded-md px-3 py-1">
        <FaSearch className="text-gray-400" />
        <input type="text" className="min-w-[25rem]" placeholder="Type your question" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyPress}></input>
      </div>
      <div className="grid grid-cols-3 text-start gap-5 mt-10">
        {transactionProblems.map(({ title, description, icon }, index) => {
          return (
            <div className="bg-white shadow-md p-3 rounded-md" key={index} onClick={() => chat.setValue(description)}>
              <div className="text-gray-500 mb-3">{icon}</div>
              <div className="font-semibold opacity-70 mb-2">{title}</div>
              <div className="opacity-60">{description}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Suggestions;
