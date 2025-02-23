import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-gray-300 text-center p-6 ">
      <div className="flex justify-center space-x-6 mb-3">
        <a
          href="https://github.com/rizkywhaqiqi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/rizkywahyuhaqiqi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="mailto:rizkywhaqiqi@gmail.com"
          className="hover:text-white transition-colors duration-300"
        >
          <FaEnvelope size={24} />
        </a>
      </div>
      <p className="text-sm">&copy; 2025 Rizky Wahyu Haqiqi. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
