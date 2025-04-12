import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import spinner from "../assets/images/Ellipsis@1x-1.0s-66px-66px.svg";
import { useNavigate } from "react-router-dom";
type Inputs = {
  email: string;
  password: string;
};
const Login = () => {
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setIsPending(true);
    new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
      console.log(data);
      navigate("/");
      reset();
      setIsPending(false);
    });
  };
  return (
    <div className="flex flex-col gap-4 justify-center items-center  h-dvh Container">
      <h3 className="text-2xl font-semibold">Sign in to your account</h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-6 max-w-[350px] w-full mt-4"
      >
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
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:
                  "Password must be at least 8 characters long and contain both letters and numbers.",
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
          className="bg-green-600 text-white p-2 rounded-[10px]"
        >
          {" "}
          {isPending ? (
            <img className="w-full h-6 text-center " src={spinner} alt="" />
          ) : (
            "Sign in"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
