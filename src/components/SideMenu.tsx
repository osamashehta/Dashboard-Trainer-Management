import dashboard_gray from "../assets/images/dashboard-gray.svg";
import dashboard_blue from "../assets/images/dashboard-blue.svg";
import course_gray from "../assets/images/course-gray.svg";
import course_blue from "../assets/images/course-blue.svg";
import people_gray from "../assets/images/people-gray.svg";
import people_blue from "../assets/images/people-blue.svg";
import link_gray from "../assets/images/link-gray.svg";
import link_blue from "../assets/images/link-blue.svg";
import payment_gray from "../assets/images/payment-gray.svg";
import payment_blue from "../assets/images/payment-blue.svg";
import logout from "../assets/images/logout.svg";
import menu from "../assets/images/menu.svg";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
type TMenuItems = {
  title: string;
  icon: string;
  activeIcon: string;
  link: string;
};
const SideMenu = () => {
  const [open, setOpen] = useState(true);

  const pathName = useLocation().pathname;
  console.log("pathName", pathName);

  const menuItems: TMenuItems[] = [
    {
      title: "Dashboard",
      icon: dashboard_gray,
      activeIcon: dashboard_blue,
      link: "/",
    },
    {
      title: "Courses",
      icon: course_gray,
      activeIcon: course_blue,
      link: "/courses",
    },
    {
      title: "Trainers",
      icon: people_gray,
      activeIcon: people_blue,
      link: "/trainers",
    },
    {
      title: "Link Courses",
      icon: link_gray,
      activeIcon: link_blue,
      link: "#",
    },
    {
      title: "Payment",
      icon: payment_gray,
      activeIcon: payment_blue,
      link: "#",
    },
  ];

  return (
    <>
      <aside
        className={` fixed md:static bg-white px-2 py-4 md:py-8  md:shadow-xl shadow-blue-300/70 min-h-screen text-gray-800 transition-all duration-200  ${
          open
            ? "max-w-[200px] w-full col-span-2"
            : "col-span-1 max-w-[50px] w-full"
        }`}
      >
        <div className=" mb-4 cursor-pointer" onClick={() => setOpen(!open)}>
          <img src={menu} alt="menu" className="w-[30px] h-[30px] " />
        </div>
        <ul
          className={`flex flex-col gap-4 transition-all duration-200 ${
            open ? "" : "hidden"
          }`}
        >
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className={`flex items-center gap-2 p-2 ${
                  pathName === item.link
                    ? "text-blue-600 font-semibold border-r-[4px] border-blue-600 bg-blue-300/[0.2]"
                    : ""
                }`}
              >
                <img
                  src={pathName === item.link ? item.activeIcon : item.icon}
                  alt={item.title}
                />
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/login"
              className="flex items-center text-red-600 gap-2 p-2"
            >
              <img src={logout} alt="Logout" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default SideMenu;
