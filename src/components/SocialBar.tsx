// components/SocialBar.jsx
import { FaLinkedin, FaTwitter, FaInstagram,  } from 'react-icons/fa';

export default function SocialBar() {
  return (
    <div className=" top-[73%]  left-12 -translate-y-1/2 flex flex-col items-center space-y-5 text-white opacity-50 hover:opacity-100 transition duration-300 ">
      <div className="w-px h-9 bg-gray-400 mb-4" />
        
       <a href="#" className="hover:text-white transition">
        <FaLinkedin size={20} />
      </a>
      <a href="#" className="hover:text-white transition">
        <FaTwitter size={20} />
      </a>
      <a href="#" className="hover:text-white transition">
        <FaInstagram size={20} />
      </a>
      {/* <a href="#" className="hover:text-white transition">
        <FaBehance size={20} />
      </a>
      <a href="#" className="hover:text-white transition">
        <FaDribbble size={20} />
      </a> */}
    </div>
  );
}
