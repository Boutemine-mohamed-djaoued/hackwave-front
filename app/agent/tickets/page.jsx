import Image from "next/image";
const page = () => {
  const tickets = [
    {
      id: "#123456",
      subject: "Invalid card number",
      priority: "Low",
      category: "ATM",
      client: "KAZAR Ayoub",
      ticketDate: "02/02/2022",
      type: "10:05 AM",
      status: Math.random() < 0.5 ? "pending" : "closed",
    },
    {
      id: "#123457",
      subject: "Completed successfully",
      priority: "Low",
      category: "card stolen",
      client: "KAZAR Ayoub",
      ticketDate: "02/02/2022",
      type: "10:05 AM",
      status: Math.random() < 0.5 ? "pending" : "closed",
    },
    {
      id: "#123458",
      subject: "Completed successfully",
      priority: "Low",
      category: "card stolen",
      client: "KAZAR Ayoub",
      ticketDate: "02/02/2022",
      type: "10:05 AM",
      status: Math.random() < 0.5 ? "pending" : "closed",
    },
    {
      id: "#123459",
      subject: "Completed successfully",
      priority: "Low",
      category: "card stolen",
      client: "KAZAR Ayoub",
      ticketDate: "02/02/2022",
      type: "10:05 AM",
      status: Math.random() < 0.5 ? "pending" : "closed",
    },
    {
      id: "#123460",
      subject: "Exceeds withdrawal limit",
      priority: "Medium",
      category: "card stolen",
      client: "KAZAR Ayoub",
      ticketDate: "02/02/2022",
      type: "10:05 AM",
      status: Math.random() < 0.5 ? "pending" : "closed",
    },
    {
      id: "#123461",
      subject: "Expired card",
      priority: "High",
      category: "card stolen",
      client: "KAZAR Ayoub",
      ticketDate: "02/02/2022",
      type: "10:05 AM",
      status: Math.random() < 0.5 ? "pending" : "closed",
    },
    {
      id: "#123462",
      subject: "Invalid transaction",
      priority: "High",
      category: "card stolen",
      client: "KAZAR Ayoub",
      ticketDate: "02/02/2022",
      type: "10:05 AM",
      status: Math.random() < 0.5 ? "pending" : "closed",
    },
    {
      id: "#123463",
      subject: "Exceeds withdrawal limit",
      priority: "High",
      category: "card stolen",
      client: "KAZAR Ayoub",
      ticketDate: "02/02/2022",
      type: "10:05 AM",
      status: Math.random() < 0.5 ? "pending" : "closed",
    },
    {
      id: "#123464",
      subject: "Exceeds withdrawal limit",
      priority: "High",
      category: "card stolen",
      client: "KAZAR Ayoub",
      ticketDate: "02/02/2022",
      type: "10:05 AM",
      status: Math.random() < 0.5 ? "pending" : "closed",
    },
  ];

  return (
    <section className="m-10">
      <h2 className="text-500 font-semibold mb-10 text-accent">Tickets</h2>
      <div className="grid grid-cols-[repeat(9,auto)] items-center gap-y-5 gap-x-32 rounded-lg shadow-lg p-10">
        <div className="opacity-60">Ticket ID</div>
        <div className="opacity-60">Subject</div>
        <div className="opacity-60">Priority</div>
        <div className="opacity-60">Category</div>
        <div className="opacity-60">Client</div>
        <div className="opacity-60">Ticket Date</div>
        <div className="opacity-60">Type</div>
        <div className="opacity-60">Status</div>
        <div></div>
        {tickets.map(({ id, subject, priority, category, client, ticketDate, type, status }, index) => (
          <>
            <div className="font-semibold">{id}</div>
            <div>{subject}</div>
            <div className={`rounded-full w-fit px-3 ${priority == "Low" ? "bg-green-200" : priority == "Medium" ? "bg-yellow-200" : "bg-red-200"}`}>{priority}</div>
            <div>{category}</div>
            <div>{client}</div>
            <div>{ticketDate}</div>
            <div>{type}</div>
            <div>{status}</div>
            <Image className={`${status == "pending" ? "opacity-60" : null}`} src="/repeat.svg" alt="" width={50} height={50}></Image>
          </>
        ))}
      </div>
    </section>
  );
};

export default page;
