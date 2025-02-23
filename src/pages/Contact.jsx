import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      <div className="max-w-lg w-full bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl uppercase font-bold mb-4">Kontak Saya</h2>
        <p className="text-gray-300 mb-6">Hubungi saya melalui sosial media berikut:</p>

        <div className="flex justify-center space-x-6 text-3xl">
          <a href="https://linkedin.com/in/rizkywahyuhaqiqi" target="_blank" rel="noopener noreferrer" 
             className="text-blue-400 hover:text-blue-500 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/rizkywhaqiqi" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-gray-500 transition">
            <FaGithub />
          </a>
          <a href="https://instagram.com/rizkywhaqiqi" target="_blank" rel="noopener noreferrer" 
             className="text-pink-400 hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="mailto:rizkywhaqiqi@gmail.com" className="text-red-400 hover:text-red-500 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
