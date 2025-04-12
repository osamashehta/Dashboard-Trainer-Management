import course_gray from "../assets/images/course-gray.svg";
import people_gray from "../assets/images/people-gray.svg";
import payment_gray from "../assets/images/payment-gray.svg";
import { TRecentActivities } from "../lib/types";

const Dashboard = () => {
  const generateUniqueId = () => Math.floor(Math.random() * 1000000);
  const recentActivities: TRecentActivities[] = [
    {
      id: generateUniqueId(),
      event: "New Course Added",
      eventTitle: "Advanced React Course",
      time: "2 hours ago",
    },
    {
      id: generateUniqueId(),
      event: "Trainer Assigned",
      eventTitle: "Osama Saqr to React fundamental course",
      time: "8 hours ago",
    },
    {
      id: generateUniqueId(),
      event: "Payment Received",
      eventTitle: "$100 from Ali Ahmed",
      time: "16 hours ago",
    },
  ];
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

        {recentActivities.map((activity) => (
          <div
            key={activity.id}
            className="border-t  border-slate-300 py-2  px-4"
          >
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
                <p className="font-semibold shadow-slate-700">
                  {activity.event}
                </p>
                <p className="font-medium text-gray-600">
                  {" "}
                  {activity.eventTitle}
                </p>
              </div>
              <p className="font-medium text-gray-600">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
