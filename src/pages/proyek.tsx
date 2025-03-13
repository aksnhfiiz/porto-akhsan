import React, { useState } from "react";
import { motion } from "framer-motion";
import taskflowImg from "../assets/TaskFlow.jpg";
import prdTaskflowImg from "../assets/PRD.png";
import uatTaskflowImg from "../assets/UAT.png";
import manualBookImg from "../assets/VBZoom.png";
import v4letImg from "../assets/v4let.jpg";
import SadeImg from "../assets/ManualBook_Sade.png";

const projects = [
  {
    name: "TaskFlow",
    description: "Task Management System untuk mengelola tugas dan proyek.",
    bg: "bg-blue-500",
    image: taskflowImg,
  },
  {
    name: "PRD TaskFlow",
    description: "Dokumen Product Requirement untuk TaskFlow.",
    bg: "bg-green-500",
    image: prdTaskflowImg,
  },
  {
    name: "UAT TaskFlow",
    description: "Pengujian User Acceptance Testing untuk TaskFlow.",
    bg: "bg-yellow-500",
    image: uatTaskflowImg,
  },
  {
    name: "Virtual Background Zoom",
    description: "Desain Virtual Background Zoom PT Curaweda.",
    bg: "bg-purple-500",
    image: manualBookImg,
  },
  {
    name: "V4LET",
    description:
      "Website Manajemen Parkir dengan fitur pendaftaran dan verifikasi.",
    bg: "bg-red-500",
    image: v4letImg,
  },
  {
    name: "Manual Book SADe",
    description:
      "Website Sekolah Alam Depok adalah website yang mengelola pendaftaran hingga keuangan sekolah.",
    bg: "bg-gray-500",
    image: SadeImg,
  },
];

const Proyek: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 p-8">
      <h1 className="text-5xl text-center font-extrabold text-orange-400 mb-12 uppercase tracking-wide">
        Proyek
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`p-6 rounded-2xl shadow-xl text-white ${project.bg} hover:scale-105 transition-transform flex flex-col items-center`}
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="w-36 h-36 object-cover rounded-lg mb-4 border-4 border-white shadow-md cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              />
            )}
            <h2 className="text-2xl font-bold mb-2 text-center">
              {project.name}
            </h2>
            <p className="text-lg text-center">{project.description}</p>
          </motion.div>
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Selected Project"
            className="max-w-full max-h-full rounded-lg shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
    </div>
  );
};

export default Proyek;
