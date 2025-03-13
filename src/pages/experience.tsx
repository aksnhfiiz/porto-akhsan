import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Anggota OSIS",
    description:
      "Sebagai anggota Organisasi Siswa Intra Sekolah (OSIS), saya terlibat dalam berbagai kegiatan organisasi yang mengasah kemampuan kepemimpinan dan kerjasama tim.",
  },
  {
    title: "Ekskul Orbit",
    description:
      "Bergabung dalam ekskul Orbit telah memperluas pengetahuan dan keterampilan saya dalam pemrograman. Saya belajar mengembangkan aplikasi dan proyek berbasis teknologi.",
  },
  {
    title: "PKL di PT Curaweda (QA)",
    description:
      "Saya pernah menjalani Praktik Kerja Lapangan (PKL) di PT Curaweda sebagai Quality Assurance (QA), di mana saya bertanggung jawab dalam pengujian perangkat lunak untuk memastikan kualitasnya.",
  },
  {
    title: "Berpartisipasi dalam Tugas Akhir Proyek V4LET",
    description:
      "Saya turut serta dalam pengembangan V4LET, sebuah sistem parkir berbasis barcode untuk sekolah. Proyek ini mencakup pendaftaran siswa, verifikasi data, serta pencatatan parkir harian secara otomatis.",
  },
];

const Pengalaman: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full bg-gray-800 bg-opacity-80 p-8 rounded-3xl shadow-xl"
      >
        <h1 className="text-4xl text-center font-bold text-orange-400 mb-6">
          Pengalaman Saya
        </h1>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition"
            >
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                {exp.title}
              </h2>
              <p className="text-white-600">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Pengalaman;
