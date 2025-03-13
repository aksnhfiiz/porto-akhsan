import React, { useState } from "react";
import Profile from "../assets/profile photo.jpeg";

const Navbar: React.FC = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <div className="navbar bg-base-100 sticky w-full z-40 top-0 flex justify-between px-4 md:px-8 py-2 shadow-lg">
        <button
          className="btn btn-square btn-ghost"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <h2 className="text-xl text-white font-bold">Portofolio</h2>
        <div className="flex gap-6">
          <a
            className="text-white text-lg font-bold hover:text-orange-400 transition"
            href="/"
          >
            Home
          </a>
          <a
            className="text-white text-lg font-bold hover:text-orange-400 transition"
            href="/contact"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Sidebar dengan scrolling */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-3/4 md:w-1/4 bg-gray-900 p-5 rounded-e-lg flex flex-col transform transition-transform duration-300 overflow-y-auto max-h-screen ${
          sidebarVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="btn btn-square btn-ghost mb-4 self-end"
          onClick={toggleSidebar}
          aria-label="Close sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="flex flex-col items-center text-center">
          <img
            src={Profile}
            alt="Profile"
            className="rounded-full mb-4 h-24 w-24 object-cover border-4 border-orange-400"
          />
          <h1 className="text-xl font-bold text-white">Mochamad Akhsan</h1>
          <p className="text-gray-300">SMKN 4 Bandung</p>
          <nav className="mt-6 w-full">
            <ul className="space-y-3">
              <li>
                <a
                  href="/skill"
                  className="block py-2 text-white hover:bg-orange-500 rounded-lg"
                >
                  Keahlian
                </a>
              </li>
              <li>
                <a
                  href="/pendidikan"
                  className="block py-2 text-white hover:bg-orange-500 rounded-lg"
                >
                  Pendidikan
                </a>
              </li>
              <li>
                <a
                  href="/pengalaman"
                  className="block py-2 text-white hover:bg-orange-500 rounded-lg"
                >
                  Pengalaman
                </a>
              </li>
              <li>
                <a
                  href="/proyek"
                  className="block py-2 text-white hover:bg-orange-500 rounded-lg"
                >
                  Proyek
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
