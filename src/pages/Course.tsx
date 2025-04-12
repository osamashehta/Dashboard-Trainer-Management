import { useEffect, useState } from "react";
import CourseInputs from "../components/Course/CourseInputs";
import CourseHeader from "../components/Course/CourseHeader";
import CourseTable from "../components/Course/CourseTable";
import { TTableData } from "../lib/types";



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
      instructor: "Osama Saqr",
      duration: "4 weeks",
      price: "100",
      status: "Active",
    },
    {
      id: generateUniqueId(),
      courseName: "React js",
      instructor: "Ahmed Ali",
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
      instructor: "",
      duration: "",
      price: "",
      status: "Active",
    });
    setEdit(true);
    setIsAdd(true);
  };

  return (
    <div className="Container pb-8">
      {/* Header */}
      <CourseHeader handleAdd={handleAdd} />

      {/* Table */}
      <CourseTable
        allData={allData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

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
