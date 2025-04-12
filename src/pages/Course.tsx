import { useEffect, useState } from "react";
import CourseInputs from "../components/CourseInputs";
import add from  "../assets/images/add.svg";

type TTableData = {
  id: number;
  courseName: string;
  duration: string;
  price: string;
  status: "Active" | "Upcoming";
};

const Course = () => {
  const [edit, setEdit] = useState(false);
  const [selectedData, setSelectedData] = useState<TTableData | undefined>();
  const [allData, setAllData] = useState<TTableData[]>([]);
  const [isAdd, setIsAdd] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

// Helper function to generate unique IDs
const generateUniqueId = () => Math.floor(Math.random() * 1000000);

  const tableData: TTableData[] = [
    {
      id: generateUniqueId(),
      courseName: "javaScript",
      duration: "4 weeks",
      price: "100",
      status: "Active",
    },
    {
      id: generateUniqueId(),
      courseName: "React js",
      duration: "8 weeks",
      price: "150",
      status: "Active",
    },
   
  ];

  useEffect(() => {
    setAllData(tableData);
  }, []);

  const handleEdit = (id: number) => {
    setIsAdd(false);
    setIsUpdate(true);
    const item = allData.find((item) => item.id === id);
    if (item) {
      setSelectedData(item);
      setEdit(true);
    }
  };

  const handleDelete = (id: number) => {
    const updatedData = allData.filter((item) => item.id !== id);
    setAllData(updatedData);
  };
  const handleAdd = () => {
    setSelectedData({
      id: generateUniqueId(),
      courseName: "",
      duration: "",
      price: "",
      status: "Active",
    });
    setEdit(true);
    setIsAdd(true);
  };

  return (
    <div className="Container pb-8">
      <div className="flex justify-between items-center mt-8 mb-4 ">
        <h3 className=" font-light text-sm md:font-semibold md:text-2xl">
          Courses Management
        </h3>
        <button
          onClick={() => handleAdd()}
          className="bg-blue-600 text-white px-[6px] py-[2px] md:px-2 md:py-[8px] rounded-[8px] md:rounded-[12px] flex gap-2 items-center cursor-pointer" 
        >
    <img src={add} alt="" className="w-[18px] h-[18px]" />

          Add Course
        </button>
      </div>
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
                {item.courseName}
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

     
      {edit && selectedData && (
        <CourseInputs
          selectedData={selectedData}
          setAllData={setAllData}
          allData={allData}
          setEdit={setEdit}
          isAdd={isAdd}
          isUpdate={isUpdate}
          setIsAdd={setIsAdd}
          setIsUpdate={setIsUpdate}

        />
      )}
    </div>
  );
};

export default Course;
