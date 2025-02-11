import React from 'react'
import mail_icon from '../Assets/mail_icon.png'
import mail_icon_dark from '../Assets/mail_icon_dark.png'
import connect from '../Assets/connect.png'
import github from '../Assets/github.png'
import linkedin from '../Assets/linkedin.png'
import insta from '../Assets/instagram.png'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">Arpit Yadav</h3>
            <p className="text-sm">Software Web Developer From India</p>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/ayada1207" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
                <img src={github} alt="GitHub" className="w-6 h-6 filter"/>
              </a>
              <a href="https://www.linkedin.com/in/arpiityadav/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
                <img src={linkedin} alt="LinkedIn" className="w-6 h-6 filter"/>
              </a>
              <a href="https://instagram.com/arpii199" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
                <img src={insta} alt="Instagram" className="w-6 h-6 filter"/>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-400 transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors duration-300">About</a></li>
              <li><a href="#experience" className="hover:text-blue-400 transition-colors duration-300">Experience</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-400">Contact Info</h3>
            <div className="flex items-center space-x-2">
              <img src={connect} alt="Phone" className="w-5 h-5"/>
              <span>7060338143</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={mail_icon} alt="Email" className="w-5 h-5 dark:hidden"/>
              <img src={mail_icon_dark} alt="Email" className="w-5 h-5 hidden dark:block"/>
              <span>arpiit.yadav12@gmail.com</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Arpit Yadav. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-sm hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer