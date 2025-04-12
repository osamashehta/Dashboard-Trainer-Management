import arrowRight from "../assets/images/arrowright.svg";
import arrowLeft from "../assets/images/arrowleft.svg";
import { useParams } from "react-router-dom";
const CourseDetails = () => {
  const { details } = useParams();
  const detailsArray = details?.split("-");

  const [courseName, instructor, duration, price, status] = detailsArray || [];

  return (
    <div className="Container pb-8">
      <div className="flex justify-between items-center mt-8 mb-4">
        <h3 className="font-light text-sm md:font-semibold md:text-2xl">
          Course
        </h3>
      </div>
      <div className="bg-white rounded-[12px] px-4 py-4 shadow-md space-x-2 space-y-3 w-full">
        <div className="flex justify-between items-center gap-2">
          <p className="font-semibold text-sm ">{courseName}</p>
          <p className="font-semibold text-sm ">{instructor}</p>
          <p className="font-semibold text-sm text-gray-400">{duration}</p>
          <p className="font-semibold text-sm text-gray-400">${price}</p>
        </div>
      </div>

      {status === "Active" ? (
        <div className="mt-6 bg-white rounded-[12px] px-4 py-4 shadow-md space-x-2 space-y-3 w-full flex flex-col items-center">
          <p className="font-semibold text-sm">Lecture 1</p>
          <video max-width="750" max-height="500" controls className="w-full">
            <source src="..Videos/video1.mp4" type="video/mp4" />
          </video>
          <ul className="flex gap-3">
            <img src={arrowLeft} alt="arrow" />

            {[...Array(4)].map((_, index) => (
              <li key={index}>
                <p className="font-semibold text-sm"> {index + 2}</p>
              </li>
            ))}
            <img src={arrowRight} alt="arrow" />
          </ul>
        </div>
      ) : (
        <div className="mt-6 bg-white rounded-[12px] px-4 py-4 shadow-md space-x-2 space-y-3 w-full flex flex-col items-center">
          <p className="font-semibold text-sm">
            This course is coming soon. Stay tuned!
          </p>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
