import { TPaymentTableData } from "../../lib/types";

const PaymentTable = ({ allData }: { allData: TPaymentTableData[] }) => {
  return (
    <table className="mt-1 w-full rounded-[14px] shadow-xl text-center">
      <thead>
        <tr className="text-slate-800 border-b border-slate-200 h-[60px] bg-emerald-300/[0.4] space-y-4">
          <th className="text-[12px] font-light md:text-[18px] md:font-semibold">
            Trainer
          </th>
          <th className="text-[12px] font-light md:text-[18px] md:font-semibold">
            Course
          </th>
          <th className="text-[12px] font-light md:text-[18px] md:font-semibold">
            Amount
          </th>
          <th className="text-[12px] font-light md:text-[18px] md:font-semibold">
            Date
          </th>
          <th className="text-[12px] font-light md:text-[18px] md:font-semibold">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {allData.map((item, id) => (
          <tr
            key={id}
            className="text-slate-500 border-b border-slate-200 h-[60px]"
          >
            <td className="text-slate-600 text-[10px] font-medium md:text-[18px] md:font-semibold">
              {item.trainer}
            </td>
            <td className="text-gray-500 text-[10px] font-medium md:text-[18px] md:font-semibold">
              {item.courseName}
            </td>
            <td className="text-gray-500 text-[10px] font-medium md:text-[18px] md:font-semibold">
              $ {item.amount}
            </td>
            <td className="text-gray-500 text-[10px] font-medium md:text-[18px] md:font-semibold">
              {item.date}
            </td>
            <td>
              <span
                className={`text-[12px] font-light md:font-bold rounded-[8px] md:rounded-[14px] py-[2px] px-1 md:py-[4px] md:px-[10px] ${
                  item.status === "Paid"
                    ? "bg-emerald-300/[0.4] text-emerald-600"
                    : item.status === "Processing"
                    ? "bg-blue-300/[0.4] text-blue-600"
                    : "bg-yellow-300/[0.4] text-yellow-600"
                }`}
              >
                {item.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PaymentTable;
