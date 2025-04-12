import { useEffect, useState } from "react";
import add from "../assets/images/add.svg";
import TrainerInputs from "../components/TrainerInputs";

type TCardData = {
  id: number;
  trainerName: string;
  stack: string;
  status: "Active" | "On Leave";
  rating: string;
  activeCourses: string;
};

const Trainer = () => {
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<TCardData | undefined>(
    undefined
  );
  const [allData, setAllData] = useState<TCardData[]>([]);
  const [isAdd, setIsAdd] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  // Helper function to generate unique IDs
  const generateUniqueId = () => Math.floor(Math.random() * 1000000);

  // Initial Trainer data
  const initialCardData: TCardData[] = [
    {
      id: generateUniqueId(),
      trainerName: "Osama Saqr",
      stack: "React, JavaScript",
      status: "Active",
      rating: "4.5",
      activeCourses: "2",
    },
    {
      id: generateUniqueId(),
      trainerName: "Ahmed Ali",
      stack: "Python, Data Science",
      status: "On Leave",
      rating: "4.2",
      activeCourses: "1",
    },
  ];

  // Set initial card data to the state
  useEffect(() => {
    setAllData(initialCardData);
  }, []);

  // Handle edit logic
  const handleEdit = (id: number) => {
    setIsAdd(false);
    setIsUpdate(true);
    const item = allData.find((item) => item.id === id);
    setSelectedData(item);
    setOpen(true);
  };

  // Handle delete logic
  const handleDelete = (id: number) => {
    const updatedData = allData.filter((item) => item.id !== id);
    setAllData(updatedData);
  };

  // Handle adding a new trainer
  const handleAdd = () => {
    setSelectedData({
      id: generateUniqueId(),
      trainerName: "",
      stack: "",
      rating: "",
      status: "Active",
      activeCourses: "",
    });
    setOpen(true);
    setIsAdd(true);
  };

  return (
    <div className="Container pb-8">
      <div className="flex justify-between items-center mt-8 mb-4">
        <h3 className="font-light text-sm md:font-semibold md:text-2xl">
          Trainers Management
        </h3>
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white p-1 md:p-2 rounded-[12px] flex  md:gap-2 items-center cursor-pointer"
        >
          <img src={add} alt="Add" className="w-[18px] h-[18px]" />
          Add Trainer
        </button>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {allData.map((item) => (
          <div
            key={item.id}
            className="col-span-12 md:col-span-6 lg:col-span-3 bg-white rounded-[12px] px-4 py-4 shadow-md space-x-2 space-y-3"
          >
            <div className="flex gap-2 justify-start items-center">
              <p className="bg-emerald-600 text-white px-2 py-1 rounded-[8px]">
                {item.trainerName
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase())}
              </p>
              <div className="flex flex-col items-start justify-center">
                <p className="font-semibold">{item.trainerName}</p>
                <p className="text-sm text-gray-400">{item.stack}</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2 justify-center items-start text-md font-medium">
                <p className="text-sm text-gray-600">Active Courses</p>
                <p className="text-sm text-gray-400">{item.activeCourses}</p>
              </div>
              <div className="flex flex-col gap-2 justify-center items-start text-md font-medium">
                <p className="text-sm text-gray-600">Rating</p>
                <p className="text-sm text-gray-400">{item.rating}/5.0</p>
              </div>
            </div>

            <div className="flex gap-2 justify-between items-start text-md font-medium">
              <p>Status</p>
              <p
                className={`px-2 py-1 rounded-[8px] ${
                  item.status === "Active"
                    ? "bg-emerald-300/[0.3] text-emerald-600"
                    : "bg-yellow-300/[0.3] text-yellow-600"
                }`}
              >
                {item.status}
              </p>
            </div>

            <div className="flex justify-between items-center">
              <button
                className="bg-blue-500/[0.4] px-4 py-2 text-blue-700 rounded-[10px]"
                onClick={() => handleEdit(item.id)}
              >
                Edit
              </button>
              <button
                className="bg-red-500/[0.4] px-4 py-2 text-red-700 rounded-[10px]"
                onClick={() => handleDelete(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {open && selectedData && (
        <TrainerInputs
          selectedData={selectedData}
          setAllData={setAllData}
          allData={allData}
          setOpen={setOpen}
          isAdd={isAdd}
          setIsAdd={setIsAdd}
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
        />
      )}
    </div>
  );
};

export default Trainer;
