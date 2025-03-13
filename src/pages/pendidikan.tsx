import React from "react";
import { motion } from "framer-motion";
import TK from "../assets/tkalmuhajirin.jpg";
import SD from "../assets/sdnpelita.jpg";
import SMP from "../assets/smpn28.jpg";
import SMK from "../assets/smkn4.jpg";

const education = [
  {
    year: "2011-2013",
    title: "Taman Kanak-Kanak",
    school: "TK Al-Muhajirin",
    description:
      "TK Al-Muhajirin adalah taman kanak-kanak yang terletak di Jalan Suryalaya Baru.",
    image: TK,
  },
  {
    year: "2013-2019",
    title: "Sekolah Dasar",
    school: "SDN 257 Pelita",
    description:
      "SDN 257 Pelita adalah sekolah dasar yang terletak di Jalan Rajamantri Kidul.",
    image: SD,
  },
  {
    year: "2019-2022",
    title: "Sekolah Menengah Pertama",
    school: "SMPN 28 Bandung",
    description:
      "Di SMPN 28 Bandung, saya mengembangkan keterampilan akademik maupun non-akademik.",
    image: SMP,
  },
  {
    year: "2022-2025",
    title: "Sekolah Menengah Kejuruan",
    school: "SMKN 4 Bandung",
    description:
      "Di SMKN 4 Bandung, saya melatih skill IT untuk masa depan saya di dunia kerja atau pendidikan lebih lanjut.",
    image: SMK,
  },
];

const Pendidikan: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 p-8">
      <h1 className="text-5xl text-center font-extrabold text-orange-400 mb-12 uppercase tracking-wide">
        Pendidikan
      </h1>
      <div className="relative w-full max-w-4xl">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-orange-500 h-full rounded-full shadow-lg"></div>
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className={`flex items-center w-full mb-12 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="relative bg-gray-800 p-8 rounded-2xl shadow-2xl w-96 flex flex-col items-center transform hover:scale-105 transition duration-300">
              <div className="absolute top-1/2 left-[-15px] transform -translate-y-1/2 w-6 h-6 bg-orange-500 rounded-full shadow-md border-4 border-gray-900"></div>
              <img
                src={edu.image}
                alt={edu.school}
                className="rounded-xl w-36 h-36 object-cover mb-6 border-4 border-orange-500 shadow-lg"
              />
              <h2 className="text-3xl font-bold text-orange-400 mb-2 text-center">
                {edu.title}
              </h2>
              <h3 className="text-xl text-white font-semibold mb-3 text-center">
                {edu.school}
              </h3>
              <p className="text-gray-300 text-center text-lg">
                {edu.description}
              </p>
              <span className="mt-4 text-sm text-gray-400 font-medium bg-gray-700 px-4 py-1 rounded-full">
                {edu.year}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pendidikan;
