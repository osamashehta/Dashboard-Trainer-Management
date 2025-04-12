import { Link } from "react-router-dom";
type TTableData = {
  id: number;
  courseName: string;
  instructor: string;
  duration: string;
  price: string;
  status: "Active" | "Upcoming";
};

const CourseTable = ({
  allData,
  handleEdit,
  handleDelete,
}: {
  allData: TTableData[];
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => void;
}) => {
  return (
    <table className="w-full rounded-[14px] shadow-xl text-center">
      <thead>
        <tr className="text-slate-800 border-b border-slate-200 h-[60px] bg-emerald-300/[0.4] space-y-4">
          <th className="text-[12px] font-light md:text-[18px] md:font-semibold">
            Course Name
          </th>
          <th className="text-[12px] font-light md:text-[18px] md:font-semibold">
            Duration
          </th>
          <th className="text-[12px] font-light md:text-[18px] md:font-semibold">
            Price
          </th>
          <th className="text-[12px] font-light md:text-[18px] md:font-semibold">
            Status
          </th>
          <th className="text-[12px] font-light md:text-[18px] md:font-semibold">
            Actions
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
              <Link
                to={`/courses/${item.id}-${item.courseName}-${item.instructor}-${item.duration}-${item.price}-${item.status}`}
                className="flex flex-col"
              >
                <p>{item.courseName}</p>{" "}
                <p className="text-[12px] text-gray-400">{item.instructor}</p>
              </Link>
            </td>
            <td className="text-gray-500 text-[10px] font-medium md:text-[18px] md:font-semibold">
              {item.duration}
            </td>
            <td className="text-gray-500 text-[10px] font-medium md:text-[18px] md:font-semibold">
              $ {item.price}
            </td>
            <td>
              <span
                className={`text-[12px] font-light md:font-bold rounded-[8px] md:rounded-[14px] py-[2px] px-1 md:py-[4px] md:px-[10px] ${
                  item.status === "Active"
                    ? "bg-[#D9F7F1] text-[#00B37E]"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {item.status}
              </span>
            </td>
            <td>
              <div className="flex justify-center items-center h-full gap-4 text-[12px] font-light md:font-bold md:text-[14px]">
                <button
                  className="text-blue-500 cursor-pointer"
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </button>
                <button
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourseTable;
