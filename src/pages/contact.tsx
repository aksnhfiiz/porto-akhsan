import React from "react";
import { FaEnvelope, FaPhone, FaInstagram } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900 p-6">
      <div className="w-full max-w-2xl bg-gray-800 bg-opacity-90 p-6 md:p-8 rounded-3xl shadow-xl">
        <h1 className="text-3xl md:text-4xl text-center font-bold text-orange-400 mb-6">
          Hubungi Saya
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Instagram */}
          <a
            href="https://instagram.com/aksnhfiiz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-gray-700 p-4 rounded-xl shadow-md transition-transform hover:scale-105 hover:bg-orange-500"
          >
            <FaInstagram className="text-white text-4xl mb-2" />
            <h2 className="text-lg font-semibold text-white">Instagram</h2>
            <p className="text-white text-sm">@aksnhfiiz</p>
          </a>

          {/* Email */}
          <a
            href="mailto:akhsanhafizh1@gmail.com"
            className="flex flex-col items-center bg-gray-700 p-4 rounded-xl shadow-md transition-transform hover:scale-105 hover:bg-orange-500"
          >
            <FaEnvelope className="text-white text-4xl mb-2" />
            <h2 className="text-lg font-semibold text-white">Email</h2>
            <p className="text-white text-sm">Klik untuk kirim</p>
          </a>

          {/* Telepon */}
          <a
            href="https://wa.me/6282116257766"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-gray-700 p-4 rounded-xl shadow-md transition-transform hover:scale-105 hover:bg-orange-500"
          >
            <FaPhone className="text-white text-4xl mb-2" />
            <h2 className="text-lg font-semibold text-white">WhatsApp</h2>
            <p className="text-white text-sm">Klik untuk chat</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
