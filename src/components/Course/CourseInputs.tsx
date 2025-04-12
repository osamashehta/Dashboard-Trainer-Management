import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import close from "../../assets/images/close.svg";
import { TTableData } from "../../lib/types";


type Props = {
  selectedData: TTableData;
  setAllData: React.Dispatch<React.SetStateAction<TTableData[]>>;
  allData: TTableData[];
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  isAdd: boolean;
  isUpdate: boolean;
  setIsAdd: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
};

const CourseInputs = ({
  selectedData,
  setAllData,
  allData,
  setEdit,
  isAdd,
  isUpdate,
  setIsAdd,
  setIsUpdate,
}: Props) => {
  const [isPending, setIsPending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TTableData>();

  useEffect(() => {
    reset(selectedData);
  }, [reset, selectedData]);

  const onSubmit: SubmitHandler<TTableData> = (data) => {
    setIsPending(true);
    let updatedData = [...allData];
    if (isUpdate) {
      updatedData = updatedData.map((item) =>
        item.id === selectedData.id ? { ...item, ...data } : item
      );
      setIsUpdate(false);
    }

    if (isAdd) {
      updatedData.push(data);
      setIsAdd(false);
    }

    setAllData(updatedData);

    setTimeout(() => {
      setIsPending(false);
      setEdit(false);
    }, 1000);
  };

  const handleCancel = () => {
    setEdit(false);
  };

  return (
    <div className="absolute inset-0 bg-black/[0.4] py-12 z-50 flex justify-center items-center">
      <form
        className="flex flex-col max-w-[350px] w-full justify-center items-center gap-6 bg-white p-8 rounded-xl shadow-xl"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <p
          className="absolute top-10 right-10 cursor-pointer "
          onClick={handleCancel}
        >
          <img src={close} alt="close" className="w-[36px] h-[36px]" />
        </p>

        {["courseName","instructor", "duration", "price"].map((field) => (
          <div key={field} className="relative">
            <input
              className="border border-gray-300 px-2 py-2 text-black rounded-[8px] max-w-[250px] w-full"
              type="text"
              placeholder={field.replace(/([A-Z])/g, " $1")}
              {...register(field as keyof TTableData, {
                required: "This field is required",
                pattern:
                  field === "price"
                    ? { value: /^[0-9]+$/, message: "Enter a valid number" }
                    : undefined,
              })}
            />
            {errors[field as keyof TTableData] && (
              <span className="text-red-500 absolute top-[-16px] left-2 bg-white px-2">
                {errors[field as keyof TTableData]?.message}
              </span>
            )}
          </div>
        ))}

        <div className="relative max-w-[250px] w-full px-5">
          <select
            className="border border-gray-300 px-2 py-2 text-black rounded-[8px] outline-none w-full"
            {...register("status", { required: "This field is required" })}
          >
            <option value="Active">Active</option>
            <option value="Upcoming">Upcoming</option>
          </select>
          {errors.status && (
            <span className="text-red-500 absolute top-[-16px] left-2 bg-white px-2">
              {errors.status.message}
            </span>
          )}
        </div>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-[8px] max-w-[250px] w-full"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Saving..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default CourseInputs;
