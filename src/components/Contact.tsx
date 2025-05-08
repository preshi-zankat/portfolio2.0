// pages/contact.jsx
import Head from 'next/head'
import { Montserrat } from "next/font/google";
import { Cardo } from "next/font/google";
import ContactInfo from './ContactInfo';

const montserrat = Montserrat({
  weight: ["500",],
  subsets: ["latin"],
});

const cardo = Cardo({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Your Name</title>
      </Head>
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 ">
        <div className="w-full max-w-2xl space-y-10 my-18">
          {/* Title */}
          <div className="text-center mb-15">
            <p className={`${montserrat.className} text-sm tracking-[3px] uppercase text-gray-400`}>Contact</p>
            <div className="w-6 h-[1px] bg-gray-400 mx-auto mt-3 opacity-50"></div>
            <h1 className={`${cardo.className} text-[26px] md:text-[26px] tracking-[2px] mt-4 leading-[40px]`}>Get in touch.</h1>
          </div>
           
          {/* Form */}
          <form className="space-y-10 mt-12 flex flex-col items-center justify-center">
            <div className="flex flex-col md:w-[800px]">
              <label htmlFor="name" className={`${montserrat.className} text-xs uppercase tracking-widest text-gray-400 opacity-50`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-gray-400 text-white py-2"
              />
            </div>

            <div className="flex flex-col space-y-1 md:w-[800px]">
              <label htmlFor="email" className={`${montserrat.className} text-xs uppercase tracking-widest text-gray-400 opacity-50`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-white text-white py-2"
              />
            </div>

            <div className="flex flex-col space-y-1 md:w-[800px]">
              <label htmlFor="message" className={`${montserrat.className} text-xs uppercase tracking-widest text-gray-400 opacity-50`}>
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-white text-white py-2 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className={`${montserrat.className} md:w-[800px] bg-white text-black p-3 text-sm md:tracking-widest uppercase font-semibold hover:bg-gray-200 transition duration-300`}
            >
              Send Message
            </button>
          </form>
        </div>
        
      </div>
      <ContactInfo/>
      
    </>
  )
}
