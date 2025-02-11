import React from "react";
import profile from "../../Assets/profile_img.png";
import profilebackground from "../../Assets/photo.jpg"; // Make sure to add this image to your assets
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/ArpitYadav_resume_4.pdf`;
    link.download = "ArpitYadav_resume_4.pdf";
    link.click();
  };

  return (
    <div id="home" className="relative min-h-screen flex">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${profilebackground})`,
          opacity: 0.1, // Adjust this value to change the opacity
        }}
      ></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex items-center justify-center pl-20 px-4 sm:px-6 lg:px-8 z-10"
      >
        <div className="max-w-4xl w-full bg-white bg-opacity-90 rounded-xl shadow-xl p-8">
          <div className="text-center">
            <motion.img
              src={profile}
              alt="Arpit Yadav"
              className="rounded-full w-32 h-32 mx-auto mb-6 border-4 border-blue-200 shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            />
            <motion.h3
              className="text-2xl md:text-3xl mb-2 font-bold text-gray-800"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm Arpit Yadav 👋
            </motion.h3>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Software Web Developer
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Backend-heavy Java + React developer with 4+ years of experience.
              Passionate about creating efficient and scalable web solutions.
            </motion.p>

            <motion.div
              className="flex justify-center space-x-4 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                <FaTwitter size={24} />
              </a>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <a
                href="#contact"
                className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Contact Me
              </a>
              <button
                onClick={handleDownload}
                className="px-8 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Download Resume
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
