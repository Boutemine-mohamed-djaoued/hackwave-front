import MainButton from "../../../lib/components/MainButton";
import { useticketContext } from "../../context/ticket";
const Trace = () => {
  const ticket = useticketContext();
  const closeTicket = async () => {
    try {
      const res = await fetch("http://192.168.169.243:3000/ticket/close", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ticketId: ticket.value.ticket._id }),
      });
      setTimeout(()=>{
        ticket.setValue(null)
      },1000)
    } catch (err) {
      console.log(err);
    }
  };

  if (!ticket.value) return null; 
  return (
    <MainButton onClick={closeTicket} className="mx-auto mt-10">
      Close This Ticket
    </MainButton>
  );
};
export default Trace;
