import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import spinner from "../assets/images/Ellipsis@1x-1.0s-66px-66px.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
type Inputs = {
  name: string;
  email: string;
  password: string;
};
const Signup = () => {
  const [isPending, setIsPending] = useState(false);
  const [user, setUser] = useState<Inputs>(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") as string)
      : {}
  );
  const [isExist, setIsExist] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (user && data.email === user.email ) {
      setIsExist(true);
      return null;
    }
    setIsPending(true);
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
    new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
      toast.success("Signup successful");
      navigate("/login");
      reset();
      setIsPending(false);
    });
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center  h-dvh Container">
      <h3 className="text-2xl font-semibold text-blue-600">
        Create a new account
      </h3>
      {isExist && (
        <h3 className="text-md font-semibold bg-red-300/[0.4] px-4 py-2 rounded-[14px] text-red-600">
          {" "}
          user already exist try to login
        </h3>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-6 max-w-[350px] w-full mt-4"
      >
        <div className=" relative ">
          <label
            htmlFor="text"
            className={`absolute top-[-16px] left-4 text-[18px] bg-white px-3 ${
              errors.name ? "text-red-500" : "text-green-600"
            }`}
          >
            Name
          </label>
          <input
            type="name"
            {...register("name", {
              required: true,
            })}
            className={`border rounded-[10px] p-2 w-full ${
              errors.name ? "border-red-500" : "border-green-700"
            }`}
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>

        <div className=" relative ">
          <label
            htmlFor="email"
            className={`absolute top-[-16px] left-4 text-[18px] bg-white px-3 ${
              errors.email ? "text-red-500" : "text-green-600"
            }`}
          >
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            className={`border rounded-[10px] p-2 w-full ${
              errors.email ? "border-red-500" : "border-green-700"
            }`}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className=" relative ">
          <label
            htmlFor="password"
            className={`absolute top-[-16px] left-4 text-[18px] bg-white px-3 ${
              errors.password ? "text-red-500" : "text-green-600"
            }`}
          >
            Password
          </label>
          <input
            type="password"
            {...register("password", {
              required: true,
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
                message: "Password must be at least 8 characters long and contain both letters, numbers, and special characters.",
              },
            })}
            className={`border rounded-[10px] p-2 w-full ${
              errors.password ? "border-red-500" : "border-green-700"
            }`}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white p-2 rounded-[10px] cursor-pointer"
        >
          {" "}
          {isPending ? (
            <img className="w-full h-6 text-center " src={spinner} alt="" />
          ) : (
            "Sign Up"
          )}
        </button>
        <Link to="/login" className="text-blue-600 text-center cursor-pointer">
          You already have an account? Login
        </Link>
      </form>
    </div>
  );
};

export default Signup;
