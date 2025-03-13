import React from "react";
import ProfileMain from "../assets/main bg.png";
import { motion } from "framer-motion";
import { FaGithub, FaArrowRight, FaDownload } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 items-center justify-center px-6 md:px-12">
      {/* Bagian Foto */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-40 h-40 md:w-80 md:h-80 md:mr-8 mb-4 md:mb-0 shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 border-4 border-orange-400 rounded-full overflow-hidden"
      >
        <img
          src={ProfileMain}
          alt="Profile"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Bagian Teks */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left md:ml-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white hover:scale-105 transition-transform duration-300">
            Halo, Saya <span className="text-orange-400">Mochamad Akhsan</span>
          </h2>
          <p className="text-white mt-3 text-base md:text-lg">
            Selamat datang di website portofolio saya. Jelajahi proyek dan
            pengalaman saya di dunia teknologi!
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-4 space-y-3 md:space-y-0 md:space-x-4">
            <a
              className="flex items-center btn btn-outline text-white hover:bg-orange-500 transition-all duration-300 px-4 py-2 rounded-lg"
              target="_blank"
              href="https://github.com/aksnhfiiz/Akhsan"
            >
              <FaGithub className="mr-2" /> GITHUB
            </a>
            <a
              href="/cv-akhsan.pdf"
              download
              className="flex items-center btn btn-outline text-white hover:bg-orange-500 transition-all duration-300 px-4 py-2 rounded-lg"
            >
              <FaDownload className="mr-2" /> Unduh CV
            </a>
            <a
              href="/about"
              className="flex items-center text-orange-400 hover:text-orange-500 transition-all duration-300"
            >
              Tentang Saya <FaArrowRight className="ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
