import { FcOvertime, FcPhone } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="bg-[#151515] h-[250px] flex flex-col mt-24 rounded-md md:flex-row items-center justify-evenly">
      <div className="flex items-center gap-4">
        <FcOvertime className="w-[40px] h-[40px]"></FcOvertime>
        <div className="text-white">
          <p>We are open monday-friday</p>
          <h3 className="font-bold text-2xl">7:00 am - 9:00 pm</h3>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <FcPhone className="w-[40px] h-[40px]"></FcPhone>
        <div className="text-white">
          <p>Have a question?</p>
          <h3 className="font-bold text-2xl">+2546 251 2658</h3>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <FaLocationDot className="w-[40px] h-[40px] text-red-600"></FaLocationDot>
        <div className="text-white">
          <p>Need a repair? our address</p>
          <h3 className="font-bold text-2xl">Liza Street, New York</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
