import { useEffect, useState } from "react";

import PaymentHeader from "../components/Payment/PaymentHeader";
import PaymentTable from "../components/Payment/PaymentTable";
import { TPaymentTableData } from "../lib/types";

const Payment = () => {
  const [allData, setAllData] = useState<TPaymentTableData[]>([]);

  const generateUniqueId = () => Math.floor(Math.random() * 1000000);

  const tableData: TPaymentTableData[] = [
    {
      id: generateUniqueId(),
      courseName: "javaScript",
      status: "Paid",
      trainer: "Osama Saqr",
      amount: "1000",
      date: "2023-01-01",
    },
    {
      id: generateUniqueId(),
      courseName: "React js",
      status: "Pending",
      trainer: "Ahmed Ali",
      amount: "2000",
      date: "2024-04-06",
    },
    {
      id: generateUniqueId(),
      courseName: "Node js",
      status: "Processing",
      trainer: "Hany Mohamed",
      amount: "6000",
      date: "2025-02-02",
    },
  ];

  useEffect(() => {
    setAllData(tableData);
  }, []);
  return (
    <div className="Container pb-8">
      <PaymentHeader />

      <div className="mt-8 w-full bg-white  rounded-[14px] p-4 text-start text-[18px] font-bold">
        Payment History
      </div>

      <PaymentTable allData={allData} />
    </div>
  );
};

export default Payment;
