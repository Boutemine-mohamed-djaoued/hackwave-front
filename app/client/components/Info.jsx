import Image from "next/image";
import { IoPersonSharp } from "react-icons/io5";

const Info = () => {
  return (
    <section className="rounded-md ring-2 bg-white ring-gray-200 p-10">
      <div className="flex gap-5 items-center mb-5">
        <IoPersonSharp className="bg-gray-200 pt-2 rounded-full" size={80} />
        <span className="text-4xl">Ayoub Kazar</span>
      </div>
      <div className="grid gap-16 grid-cols-[repeat(5,1fr)]">
        <div>
          <div className="opacity-60">Email</div>
          <div className="font-medium">fake@gmail.com</div>
        </div>
        <div>
          <div className="opacity-60">Birthday</div>
          <div className="font-medium">24 June 2004</div>
        </div>
        <div>
          <div className="opacity-60">Adress</div>
          <div className="font-medium">24 June 2022</div>
        </div>
        <div>
          <div className="opacity-60">Phone</div>
          <div className="font-medium">0566666666</div>
        </div>
        <div>
          <div className="opacity-60">Plan</div>
          <div className="font-medium">Intro</div>
        </div>
      </div>
    </section>
  );
};
export default Info;
