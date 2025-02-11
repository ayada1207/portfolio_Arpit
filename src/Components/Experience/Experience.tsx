import React from 'react'
import optum from '../../Assets/optum.png'
import education from '../../Assets/education.png'
import { motion } from 'framer-motion';

const Experience = () => {
    const ase = `Associate Software Engineer`;
    const se = `Software Engineer`;

    return (
        <div id="experience" className="w-full px-[12%] py-20 bg-gradient-to-br from-white via-white-800 to-teal-800 text-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-center mb-2 text-lg font-Ovo text-gray-600 uppercase tracking-wider">What I offer</h3>
                <h2 className="text-center text-5xl font-Ovo mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-black font-bold">
                    Professional Experience
                </h2>
                <div className="relative">
                    <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 text-lg leading-relaxed">
                        I am a <span className="text-gray-900 font-semibold">backend-heavy Full Stack developer</span> from India, 
                        with <span className="text-gray-900 font-semibold">4 years</span> of experience in companies like 
                        <span className="text-gray-900 font-semibold"> United Health Group</span>, 
                        <span className="text-gray-900 font-semibold"> Lowes</span>
                    </p>
                    <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-gray-400"></div>
                    <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-gray-400"></div>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
                <ExperienceCard
                    logo={optum}
                    title={se}
                    details={[
                        "Technologies: Java, Spring Boot, React, GitHub, SQL DB, Data Structures Algorithm, Agile, Code review, Problem Solving, Microservices, REST APIs",
                        "Architecture and Maintenance: Architected, developed, and sustained projects, ensuring adherence to high-quality standards and timely delivery.",
                        "Team Collaboration: Engaged with the development team to enhance and maintain projects, fostering a collaborative environment. Worked with stakeholders to drive innovation and meet technical requirements.",
                        "API Development: Leveraged coding and design skills to create intuitive and efficient APIs."
                    ]} subtitle={`June 2022 - October 2024`}                />

                <ExperienceCard
                    logo={optum}
                    title={ase}
                    details={[
                        "Technologies: Java, Spring Boot, MongoDB, GitHub, Angular, Agile methodology, Data Structure Algorithm, Jenkins, Docker.",
                        "Code Implementation and Testing: Implemented and rigorously tested well-structured code to ensure optimal system performance.",
                        "Collaboration and Issue Resolution: Worked closely with developers to identify and resolve application issues, ensuring smooth and efficient functionality."
                    ]} subtitle={`June 2020 - May 2022`}                />

                <ExperienceCard
                    logo={education}
                    title="EDUCATION"
                    subtitle="BACHELORS OF TECHNOLOGY"
                    details={[
                        "Rajkiya Engineering College, Bijnor, Uttar Pradesh Graduated: 2019.",
                        "Electrical Engineering (77%).",
                        "Certifications: React and Node.js Full Stack Development Course Java Full Stack Web Development Course."
                    ]}
                />
            </div>
        </div>
    )
}

const ExperienceCard = ({ logo, title, subtitle, details }) => (
    <div className="bg-teal-800/50 rounded-xl p-8 hover:bg-white-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/20 border border-purple-600 group">
        <img src={logo} alt="company logo" className="w-12 mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-teal-300 group-hover:text-teal-200 transition-colors duration-300">{title}</h3>
        {subtitle && <p className="text-lg mb-4 text-purple-200">{subtitle}</p>}
        <ul className="space-y-2">
            {details.map((detail, index) => (
                <li key={index} className="text-sm text-purple-200 pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-teal-400">
                    {detail}
                </li>
            ))}
        </ul>
    </div>
)

export default Experience