import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";

export default function ContactInfo() {
  return (
    <div className="bg-black text-white py-15 pb-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Phone */}
        <div className="flex flex-col items-center space-y-2">
          <FaPhoneAlt className="text-3xl" />
          <p className="tracking-wider">8 700 100 000</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center space-y-2">
          <HiOutlineMail className="text-4xl" />
          <p className="uppercase tracking-widest">your@mail.com</p>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center space-y-2">
          <GoLocation className="text-4xl" />
          <p className="uppercase tracking-widest">NY Brooklyn 28</p>
        </div>
      </div>
    </div>
  );
}
