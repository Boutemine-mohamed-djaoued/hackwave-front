import Image from "next/image";
import { IoPersonSharp } from "react-icons/io5";
import { useticketContext } from "../../context/ticket";
import { Skeleton } from "../../../components/ui/skeleton";
const Info = () => {
  const ticket = useticketContext();
  if (!ticket.value) return <Skeleton className="w-full h-full" />;
  console.log(ticket.value);
  return (
    <section className="rounded-md ring-2 bg-white ring-gray-200 p-10">
      <div className="flex gap-5 items-center mb-5">
        <IoPersonSharp className="bg-gray-200 pt-2 rounded-full" size={80} />
        <span className="text-2xl">Ayoub Kazar</span>
      </div>
      <div className="grid gap-x-16 gap-y-5 text-400">
        <div>
          <div className="opacity-60">Email</div>
          <div className="font-medium">{ticket.value.client.email}</div>
        </div>
        <div>
          <div className="opacity-60">type</div>
          <div className="font-medium">{ticket.value.client.clientType}</div>
        </div>
        <div>
          <div className="opacity-60">Phone</div>
          <div className="font-medium">{ticket.value.client.phoneNumber}</div>
        </div>
      </div>
    </section>
  );
};
export default Info;
