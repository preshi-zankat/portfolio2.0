
export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 h-auto">
      <hr className="border-white mb-10" />

      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-20 text-xs sm:text-sm tracking-[0.25em] text-gray-400 uppercase mt-10">
        
        <a href="#" className="hover:text-white transition">Instagram</a>
        <a href="#" className="hover:text-white transition">LinkedIn</a>
        <a href="#" className="hover:text-white transition">Twitter</a>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs sm:text-sm text-gray-400 mt-10 sm:mt-16 pb-6">
        Copyright © All rights reserved.
      </div>
    </footer>
  );
}
