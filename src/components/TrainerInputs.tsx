import { useEffect, useState, useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import close from "../assets/images/close.svg";

type TCardData = {
  id: number;
  trainerName: string;
  stack: string;
  status: "Active" | "On Leave";
  rating: string;
  activeCourses: string;
};

type Props = {
  selectedData: TCardData;
  setAllData: React.Dispatch<React.SetStateAction<TCardData[]>>;
  allData: TCardData[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isAdd: boolean;
  isUpdate: boolean;
  setIsAdd: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
};

const TrainerInputs = ({
  selectedData,
  setAllData,
  allData,
  setOpen,
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
  } = useForm<TCardData>();

  // Reset form when selectedData changes
  useEffect(() => {
    reset(selectedData);
  }, [reset, selectedData]);

  // Handles form submission
  const onSubmit: SubmitHandler<TCardData> = (data) => {
    setIsPending(true);

    let updatedData = [...allData];

    if (isUpdate) {
      // Update the existing trainer data
      updatedData = updatedData.map((item) =>
        item.id === selectedData.id ? { ...item, ...data } : item
      );
      setIsUpdate(false);
    }

    if (isAdd) {
      // Add new trainer data
      updatedData.push(data);
      setIsAdd(false);
    }

    setAllData(updatedData);

    setTimeout(() => {
      setIsPending(false);
      setOpen(false);
    }, 1000);
  };

  // Handles cancel action
  const handleCancel = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <div className="absolute inset-0 bg-black/[0.4] py-12 z-50 flex justify-center items-center">
      <form
        className="flex flex-col max-w-[350px] w-full justify-center items-center gap-6 bg-white p-8 rounded-xl shadow-xl"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <p
          className="absolute top-10 right-10 cursor-pointer"
          onClick={handleCancel}
        >
          <img src={close} alt="close" className="w-[36px] h-[36px]" />
        </p>

        {["trainerName", "stack", "activeCourses", "rating"].map((field) => (
          <div key={field} className="relative">
            <input
              className="border border-gray-300 px-2 py-2 text-black rounded-[8px] max-w-[250px] w-full"
              type="text"
              placeholder={field.replace(/([A-Z])/g, " $1")}
              {...register(field as keyof TCardData, {
                required: "This field is required",
                pattern:
                  field === "activeCourses"
                    ? { value: /^[0-9]+$/, message: "Enter a valid number" }
                    : field === "rating"
                    ? {
                        value: /^(?:[0-4](?:\.\d+)?|5(?:\.0+)?)$/,
                        message: "Enter a valid number",
                      }
                    : undefined,
              })}
            />
            {errors[field as keyof TCardData] && (
              <span className="text-red-500 absolute top-[-16px] left-2 bg-white px-2">
                {errors[field as keyof TCardData]?.message}
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
            <option value="On Leave">On Leave</option>
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

export default TrainerInputs;
