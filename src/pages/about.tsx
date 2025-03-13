import React from "react";
import Foto from "../assets/profile photo.jpeg";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-5 text-white flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto p-8 bg-gray-800 rounded-lg shadow-lg text-center"
      >
        <h1 className="text-4xl font-bold mb-4 text-orange-400">
          Tentang Saya
        </h1>
        <motion.img
          src={Foto}
          alt="Tentang Saya"
          className="rounded-full w-48 h-48 border-4 border-blue-400 object-cover mx-auto mb-6 hover:scale-110 transition-transform duration-300"
        />
        <p className="text-xl leading-relaxed">
          Mochamad Akhsan Hafizh Alghifary, seorang pelajar yang penuh semangat
          dengan kecintaan pada pembuatan aplikasi web dan pengelolaan data.
          Saya senang belajar teknologi baru dan menerapkannya untuk memecahkan
          masalah dunia nyata. Saya merupakan seorang murid SMKN 4 Bandung yang
          memiliki tekad tinggi untuk mencari tau hal-hal baru di kehidupan
          saya, karena rasa ingin tau yang tinggi membantu saya menciptakan
          kehidupan yang tidak pernah bosan.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 flex justify-center space-x-4"
        >
          <a
            href="mailto:akhsanhafizh1@gmail.com"
            className="flex items-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <FaEnvelope className="mr-2" /> Email Saya
          </a>
          <a
            href="https://www.linkedin.com/in/akhsan-hafizh-602374348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
