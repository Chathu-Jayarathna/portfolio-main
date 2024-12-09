import { FaLocationArrow, FaWhatsapp, FaLinkedin, FaEnvelope, FaSkype } from "react-icons/fa";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { FloatingDock } from "./ui/FloatingDock";

const Footer = () => {
  const dockItems = [
    {
      title: "WhatsApp",
      icon: <FaWhatsapp size={24} />,
      href: "https://wa.me/+94742269976", 
    },
    {
      title: "LinkedIn",
      icon: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/in/chathushi-jayarathna-578098234", 
    },
    {
      title: "Email",
      icon: <FaEnvelope size={24} />,
      href: "mailto:chathushi0707@gmail.com", 
    },
    {
      title: "Skype",
      icon: <FaSkype size={24} />,
      href: "https://join.skype.com/invite/sneaIOJ34nBW", // Replace with your Skype username or link
    },

  ];

  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Looking for a <span className="text-purple">Creative</span> Partner?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let’s connect and create something amazing together.
        </p>

      

        <a href="mailto:chathushi0707@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
          {/* FloatingDock Component */}
        <FloatingDock items={dockItems} className="my-6" />
      </div>

      {/* Full-width background for copyright with top margin and light white color */}
      <div className="w-full bg-[#95a0e116] text-white flex justify-center items-center mt-8">
        <p className="text-sm md:text-base font-light">
          Copyright © 2024 Chathu Jayarathna
        </p>
      </div>
    </footer>
  );
};

export default Footer;
