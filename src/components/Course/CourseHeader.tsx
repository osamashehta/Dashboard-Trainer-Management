import add from "../../assets/images/add.svg";

const CourseHeader = ({handleAdd}:{handleAdd:()=>void}) => {
  return (
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
  )
}

export default CourseHeader