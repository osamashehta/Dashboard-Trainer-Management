import course_gray from "../assets/images/course-gray.svg";
import people_gray from "../assets/images/people-gray.svg";
import payment_gray from "../assets/images/payment-gray.svg";
const Dashboard = () => {
  return (
    <div className="Container pb-8 ">
      <h3 className="mt-8 mb-4 text-2xl font-semibold">Dashboard</h3>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6 lg:col-span-3  flex justify-start  items-center gap-2 bg-emerald-600 rounded-[12px] px-4 py-4">
          <img
            src={people_gray}
            alt="people"
            className=" w-[60px] height-[40px] bg-white p-2 rounded-[8px]"
          />
          <div className="flex  flex-col gap-2 justify-center items-start text-md font-medium text-slate-100">
            <p>Total Trainers</p>
            <p>18</p>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3  flex justify-start  items-center gap-2 bg-emerald-600 rounded-[12px] px-4 py-4">
          <img
            src={course_gray}
            alt="people"
            className=" w-[60px] height-[40px] bg-white p-2 rounded-[8px]"
          />
          <div className="flex  flex-col gap-2 justify-center items-start text-md font-medium text-slate-100">
            <p>Active Courses</p>
            <p>4</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3  flex justify-start  items-center gap-2 bg-emerald-600 rounded-[12px] px-4 py-4">
          <img
            src={payment_gray}
            alt="people"
            className=" w-[60px] height-[40px] bg-white p-2 rounded-[8px]"
          />
          <div className="flex  flex-col gap-2 justify-center items-start text-md font-medium text-slate-100">
            <p>Revenue</p>
            <p>3000$</p>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFF] pb-4 px-4 rounded-[12px] mt-8 shadow-md shadow-slate-300">
        <h3 className="mt-8 mb-4 text-2xl font-semibold">Recent Activities</h3>
        <div className="border-b  border-slate-300 py-2  px-4">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <p className="font-semibold shadow-slate-700">New Course Added</p>
              <p className="font-medium text-gray-600">
                {" "}
                Advanced React Course
              </p>
            </div>
            <p className="font-medium text-gray-600">2 hours ago</p>
          </div>
        </div>

        <div className="border-b  border-slate-300 py-2  px-4">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <p className="font-semibold shadow-slate-700">Trainer Assigned</p>
              <p className="font-medium text-gray-600">
                {" "}
                Osama Saqr to React fundamental course
              </p>
            </div>
            <p className="font-medium text-gray-600">8 hours ago</p>
          </div>
        </div>

        <div className=" py-2  px-4">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <p className="font-semibold shadow-slate-700">Payment Received</p>
              <p className="font-medium text-gray-600"> $100 from Ali Ahmed</p>
            </div>
            <p className="font-medium text-gray-600">16 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
