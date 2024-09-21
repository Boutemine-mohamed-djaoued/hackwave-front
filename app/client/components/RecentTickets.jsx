import MainButton from "../../../lib/components/MainButton";
const RecentTickets = () => {
  const tickets = [
    {
      id: "#123456",
      subject: "Invalid card number",
      date: "02/02/2022",
      time: "10:05 AM",
      status: "pending",
    },
    {
      id: "#123456",
      subject: "Completed successfully",
      date: "02/02/2022",
      time: "10:05 AM",
      status: "pending",
    },
    {
      id: "#123456",
      subject: "Completed successfully",
      date: "02/02/2022",
      time: "10:05 AM",
      status: "Closed",
    },
    {
      id: "#123456",
      subject: "Completed successfully",
      date: "02/02/2022",
      time: "10:05 AM",
      status: "Closed",
    },
    {
      id: "#123456",
      subject: "Exceeds withdrawal limit",
      date: "02/02/2022",
      time: "10:05 AM",
      status: "Closed",
    },
    {
      id: "#123456",
      subject: "Expired card",
      date: "02/02/2022",
      time: "10:05 AM",
      status: "Closed",
    },
    {
      id: "#123456",
      subject: "Invalid transaction",
      date: "02/02/2022",
      time: "10:05 AM",
      status: "Closed",
    },
    {
      id: "#123456",
      subject: "Exceeds withdrawal limit",
      date: "02/02/2022",
      time: "10:05 AM",
      status: "Closed",
    },
    {
      id: "#123456",
      subject: "Exceeds withdrawal limit",
      date: "02/02/2022",
      time: "10:05 AM",
      status: "Closed",
    },
    {
      id: "#123456",
      subject: "Exceeds withdrawal limit",
      date: "02/02/2022",
      time: "10:05 AM",
      status: "Closed",
    },
  ];

  return (
    <section className="rounded-lg border-2 border-grey-300 p-10">
      <div className="flex justify-between">
        <h2 className="text-accent text-500 font-semibold">Recent Tichets</h2>
        <MainButton className={"me-16"}>+ New Problem</MainButton>
      </div>
      <div className="grid gap-y-5 mt-5 grid-cols-[repeat(5,auto)]">
        <div  className="opacity-60 font-medium">id</div>
        <div className="opacity-60 font-medium">subject</div>
        <div className="opacity-60 font-medium">date</div>
        <div className="opacity-60 font-medium">time</div>
        <div className="opacity-60 font-medium">status</div>
        {tickets.map(({ id, subject, date, time, status }, index) => {
          return (
            <>
              <div>{id}</div>
              <div>{subject}</div>
              <div>{date}</div>
              <div>{time}</div>
              <div>{status}</div>
            </>
          );
        })}
      </div>
    </section>
  );
};
export default RecentTickets;
