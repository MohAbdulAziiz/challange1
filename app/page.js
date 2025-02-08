"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function CV() {
  const [gradient, setGradient] = useState("from-blue-400 via-green-300 to-blue-400");

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen bg-gradient-to-r ${gradient} p-6`}>
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-3xl text-center border border-gray-200">
        {/* Dropdown untuk mengganti warna gradasi */}
        <div className="mb-4">
          <label className="text-gray-700 font-semibold">Choose Background Gradient:</label>
          <select
            className="ml-2 p-2 border rounded-lg"
            onChange={(e) => setGradient(e.target.value)}
            value={gradient}
          >
            <option value="from-blue-400 via-green-300 to-blue-400">Blue-Green</option>
            <option value="from-purple-500 via-pink-400 to-red-400">Purple-Pink-Red</option>
            <option value="from-yellow-300 via-orange-400 to-red-500">Yellow-Orange-Red</option>
          </select>
        </div>

        {/* Profile Image */}
        <img
          src="aziz.jpeg"
          alt="Moh. Abdul Aziz"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
        />
        <h1 className="text-3xl font-bold text-gray-800">Moh. Abdul Aziz</h1>
        <p className="text-gray-600">NIM: 232505059</p>
        <p className="text-gray-600">Program Studi: Sistem Informasi</p>
        <p className="text-gray-600">Alamat: Cicalengka, Kab. Bandung</p>

        {/* About Section */}
        <div className="mt-6 text-left">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">About Me</h2>
          <p className="text-gray-600 mt-2">
            I am a passionate software engineer specializing in Python and TypeScript, with a keen interest in
            machine learning and data analysis. Currently pursuing a degree in Information Systems at Universitas Ma'soem.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-6 text-left">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Skills</h2>
          <ul className="text-gray-600 list-disc list-inside mt-2">
            <li>Data Analysis</li>
            <li>Python & TypeScript</li>
            <li>Machine Learning</li>
            <li>SQL & Database Management</li>
            <li>Public Speaking</li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="mt-6 text-left">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Services</h2>
          <ul className="text-gray-600 list-disc list-inside mt-2">
            <li>Custom Software Development</li>
            <li>Data Analysis & Visualization</li>
            <li>Machine Learning & AI Solutions</li>
            <li>Consultation in System Design</li>
            <li>Website & Web Application Development</li>
          </ul>
        </div>

        {/* Portfolio Section */}
        <div className="mt-6 text-left">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Portfolio</h2>
          <ul className="text-gray-600 list-disc list-inside mt-2">
            <li>
              <a href="https://github.com/yourusername/project1" className="text-blue-500 hover:underline">
                Project 1: Data Visualization Dashboard
              </a>
            </li>
            <li>
              <a href="https://github.com/yourusername/project2" className="text-blue-500 hover:underline">
                Project 2: Machine Learning Model for Sales Prediction
              </a>
            </li>
            <li>
              <a href="https://github.com/yourusername/project3" className="text-blue-500 hover:underline">
                Project 3: Web Application for Task Management
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="mt-6 text-left">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Contact</h2>
          <p className="text-gray-600 mt-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> mohamad.abdaziz@example.com
          </p>
          <p className="text-gray-600">
            <FontAwesomeIcon icon={faPhone} className="mr-2" /> +62 812 3456 7890
          </p>
          <p className="text-gray-600">
            <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
            <a href="https://linkedin.com/in/mohabdaziz" className="text-blue-500 hover:underline">linkedin.com/in/mohabdaziz</a>
          </p>
          <p className="text-gray-600">
            <FontAwesomeIcon icon={faTwitter} className="mr-2" />
            <a href="https://twitter.com/mohabdaziz" className="text-blue-500 hover:underline">twitter.com/mohabdaziz</a>
          </p>
          <p className="text-gray-600">
            <FontAwesomeIcon icon={faInstagram} className="mr-2" />
            <a href="https://instagram.com/mohabdaziz" className="text-blue-500 hover:underline">instagram.com/mohabdaziz</a>
          </p>
          <p className="text-gray-600">
            <FontAwesomeIcon icon={faGlobe} className="mr-2" />
            <a href="https://mohabdaziz.com" className="text-blue-500 hover:underline">mohabdaziz.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
