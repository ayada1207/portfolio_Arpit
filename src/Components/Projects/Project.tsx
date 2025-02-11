import React from 'react'
import { motion } from 'framer-motion'

// Import your project images here
import projectImage1 from '../../Assets/work-1.png'
import projectImage2 from '../../Assets/work-1.png'
import projectImage3 from '../../Assets/work-2.png'
import projectImage4 from '../../Assets/work-3.png'

const projects = [
    {
        title: "Frontend Project",
        category: "Web Design",
        image: projectImage1,
        link: "#"
    },
    {
        title: "Geo Based App",
        category: "Mobile App",
        image: projectImage2,
        link: "#"
    },
    {
        title: "Photography Site",
        category: "Web Design",
        image: projectImage3,
        link: "#"
    },
    {
        title: "UI/UX Designing",
        category: "UI/UX Design",
        image: projectImage4,
        link: "#"
    }
]

const Project = () => {
    return (
        <div id="work" className="w-full px-[12%] py-20 bg-gradient-to-br from-gray-100 to-gray-200">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600 uppercase tracking-wider">My portfolio</h4>
                <h2 className="text-center text-5xl font-Ovo mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-black font-bold">
                    Latest Projects
                </h2>
                <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 text-lg leading-relaxed">
                    Explore a collection of projects showcasing my expertise in front-end development, 
                    mobile app design, and UI/UX creation.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-center mt-12"
            >
                <a 
                    href="#" 
                    className="inline-block px-8 py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                >
                    View All Projects
                </a>
            </motion.div>
        </div>
    )
}

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2"
    >
        <div className="relative overflow-hidden group">
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover transition duration-300 ease-in-out group-hover:scale-110"/>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <a 
                    href={project.link} 
                    className="px-6 py-3 bg-white text-gray-800 rounded-full font-semibold hover:bg-gray-100 transition duration-300 ease-in-out"
                >
                    View Project
                </a>
            </div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
            <p className="text-gray-600">{project.category}</p>
        </div>
    </motion.div>
)

export default Project