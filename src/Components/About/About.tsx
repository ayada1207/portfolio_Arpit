import React, { useState } from 'react'
import { motion } from 'framer-motion'
import user_image from '../../Assets/profile_img.png'
import intellij from '../../Assets/intellij.png'
import mySql from '../../Assets/mysql.png'
import vscode from '../../Assets/vscode.png'
import mongo from '../../Assets/mongodb.png'
import git from '../../Assets/git.png'

const About = () => {
  const tools = [
    { name: 'IntelliJ IDEA', icon: intellij },
    { name: 'MySQL', icon: mySql },
    { name: 'VS Code', icon: vscode },
    { name: 'MongoDB', icon: mongo },
    { name: 'Git', icon: git }
  ];
  const stats = [
    { value: '4+', label: 'Years of Experience' },
    { value: '10+', label: 'Completed Projects' },
    { value: '3', label: 'Companies Worked' }
  ];

  const skills = [
    { name: 'Java', level: 80 },
    { name: 'Spring Boot', level: 80 },
    { name: 'Microservices/Monolith Architecture', level: 70 },
    { name: 'JavaScript', level: 60 },
    { name: 'Data Structure & Algorithm', level: 80 },
    { name: 'React', level: 60 },
    { name: 'MySQL', level: 80 },
    { name: 'MongoDB', level: 60 },
    { name: 'System Design LLD/HLD', level: 70 },
    { name: 'Github', level: 80 },
  ];

  return (
    <div id="about" className="w-full px-[12%] py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h4 className="text-center mb-2 text-lg font-semibold text-blue-600 uppercase tracking-wider">About Me</h4>
        <h2 className="text-center text-4xl font-bold mb-12 text-gray-800">
          My Introduction
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
           <motion.img 
                src={user_image} 
                alt="Arpit Yadav" 
                className="w-full max-w-sm mx-auto transform transition-transform duration-300 hover:scale-110"
              />
          </motion.div>
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-gray-700 text-lg mb-6">
              I am a backend-heavy Full Stack developer from India, with 4+ years of experience in software engineering. 
              My expertise includes Java, Spring Boot, Microservices, and React development. I have a strong foundation 
              in data structures, algorithms, and system design, allowing me to create efficient and scalable solutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="text-4xl mb-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {stat.value}
            </motion.div>
            <motion.div 
              className="text-gray-600 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </div>
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <div className="mb-20">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">My Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-medium">{skill.name}</span>
                <span className="text-blue-600 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <motion.div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />
                 </div>
            </motion.div>
          ))}
        </div>
      </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Tools I Use</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => (
              <ToolItem key={index} name={tool.name} icon={tool.icon} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const ToolItem = ({ name, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center w-16 h-16 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={icon} alt={name} className="w-10 h-10 object-contain" />
      {isHovered && (
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap">
          {name}
        </div>
      )}
    </div>
  );
}

export default About