const page = () => {
  const transactions = [
    {
      ID: "123456",
      CardNumber: "1234567890123456",
      DeliveryDate: "02/02/2022 10:05 AM",
      Amount: "1045DA",
      Type: "outgoing",
      Status: "Failed",
      Description: "Invalid card number",
    },
    {
      ID: "123456",
      CardNumber: "1234567890123456",
      DeliveryDate: "02/02/2022 10:05 AM",
      Amount: "1045DA",
      Type: "outgoing",
      Status: "Completed",
      Description: "completed successfully",
    },
    {
      ID: "123456",
      CardNumber: "1234567890123456",
      DeliveryDate: "02/02/2022 10:05 AM",
      Amount: "1045DA",
      Type: "incoming",
      Status: "Completed",
      Description: "completed successfully",
    },
    {
      ID: "123456",
      CardNumber: "1234567890123456",
      DeliveryDate: "02/02/2022 10:05 AM",
      Amount: "1045DA",
      Type: "incoming",
      Status: "Completed",
      Description: "completed successfully",
    },
    {
      ID: "123456",
      CardNumber: "1234567890123456",
      DeliveryDate: "02/02/2022 10:05 AM",
      Amount: "1045DA",
      Type: "more",
      Status: "failed",
      Description: "Exceeds withdrawal limit",
    },
    {
      ID: "123456",
      CardNumber: "1234567890123456",
      DeliveryDate: "02/02/2022 10:05 AM",
      Amount: "1045DA",
      Type: "Failed",
      Status: "Completed",
      Description: "Expired card",
    },
    {
      ID: "1045DA",
      CardNumber: "1234567890123456",
      DeliveryDate: "02/02/2022 10:05 AM",
      Amount: "1045DA",
      Type: "incoming",
      Status: "Failed",
      Description: "Invalid transaction",
    },
    {
      ID: "123456",
      CardNumber: "1234567890123456",
      DeliveryDate: "02/02/2022 10:05 AM",
      Amount: "1045DA",
      Type: "incoming",
      Status: "Failed",
      Description: "Exceeds withdrawal limit",
    },
    {
      ID: "123456",
      CardNumber: "1234567890123456",
      DeliveryDate: "02/02/2022 10:05 AM",
      Amount: "1045DA",
      Type: "incoming",
      Status: "Failed",
      Description: "Exceeds withdrawal limit",
    },
    {
      ID: "123456",
      CardNumber: "1234567890123456",
      DeliveryDate: "02/02/2022 10:05 AM",
      Amount: "1045DA",
      Type: "outgoing",
      Status: "Failed",
      Description: "Invalid card number",
    },
    {
      ID: "123456",
      CardNumber: "1234567890123456",
      DeliveryDate: "02/02/2022 10:05 AM",
      Amount: "1045DA",
      Type: "outgoing",
      Status: "Completed",
      Description: "completed successfully",
    },
    {
      ID: "123456",
      CardNumber: "1234567890123456",
      DeliveryDate: "02/02/2022 10:05 AM",
      Amount: "1045DA",
      Type: "incoming",
      Status: "Completed",
      Description: "completed successfully",
    },
    {
      ID: "123456",
      CardNumber: "1234567890123456",
      DeliveryDate: "02/02/2022 10:05 AM",
      Amount: "1045DA",
      Type: "incoming",
      Status: "Completed",
      Description: "completed successfully",
    },
    {
      ID: "123456",
      CardNumber: "1234567890123456",
      DeliveryDate: "02/02/2022 10:05 AM",
      Amount: "1045DA",
      Type: "more",
      Status: "failed",
      Description: "Exceeds withdrawal limit",
    },
    {
      ID: "123456",
      CardNumber: "1234567890123456",
      DeliveryDate: "02/02/2022 10:05 AM",
      Amount: "1045DA",
      Type: "Failed",
      Status: "Completed",
      Description: "Expired card",
    },
    {
      ID: "1045DA",
      CardNumber: "1234567890123456",
      DeliveryDate: "02/02/2022 10:05 AM",
      Amount: "1045DA",
      Type: "incoming",
      Status: "Failed",
      Description: "Invalid transaction",
    },
  ];
  return (
    <section className="m-10">
      <h2 className="text-500 font-semibold mb-10 text-accent">Transactoins</h2>
      {/* <div className="grid px-10 grid-cols-[repeat(7,1fr)]"></div> */}
      <div className="grid grid-cols-[repeat(7,auto)] items-center gap-y-5 gap-x-32 rounded-lg shadow-lg p-10">
        <div className="opacity-60">ID</div>
        <div className="opacity-60">Card Number</div>
        <div className="opacity-60">Delievery Data</div>
        <div className="opacity-60">Amount</div>
        <div className="opacity-60">Type</div>
        <div className="opacity-60">Status</div>
        <div className="opacity-60">Description</div>
        {transactions.map(({ ID, CardNumber, DeliveryDate, Amount, Type, Status, Description }, index) => {
          return (
            <>
              <div className="font-semibold">{ID}</div>
              <div>{CardNumber}</div>
              <div>{DeliveryDate}</div>
              <div>{Amount}</div>
              <div>{Type}</div>
              <div className={`w-fit px-3 rounded-full ${Status == "Completed" ? "bg-green-200" : "bg-red-200"}`}>{Status}</div>
              <div>{Description}</div>
            </>
          );
        })}
      </div>
    </section>
  );
};
export default page;
