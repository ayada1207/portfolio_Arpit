import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHome, FaUser, FaBriefcase, FaCode, FaEnvelope, FaChevronRight } from 'react-icons/fa'

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home')
  const [isExpanded, setIsExpanded] = useState(false)

  const navItems = [
    { icon: <FaHome size={20} />, label: 'Home', href: '#home' },
    { icon: <FaUser size={20} />, label: 'About', href: '#about' },
    { icon: <FaBriefcase size={20} />, label: 'Experience', href: '#experience' },
    { icon: <FaCode size={20} />, label: 'Projects', href: '#projects' },
    { icon: <FaEnvelope size={20} />, label: 'Contact', href: '#contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      const sections = navItems.map(item => item.label.toLowerCase())

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveItem(sections[i])
          break
        }
      }

      // Special case for home section
      if (scrollPosition < 100) {
        setActiveItem('home')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      className={`fixed left-0 top-0 h-full bg-white shadow-lg z-50 flex flex-col items-start justify-center`}
      initial={{ width: '4rem' }}
      animate={{ width: isExpanded ? '16rem' : '4rem' }}
      transition={{ duration: 0.3 }}
    >
      {navItems.map((item, index) => (
        <motion.a
          key={item.label}
          href={item.href}
          className={`p-4 my-2 rounded-full flex items-center justify-start w-full ${
            activeItem === item.label.toLowerCase()
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          } transition-all duration-300`}
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="w-8">{item.icon}</span>
          <AnimatePresence>
            {isExpanded && (
              <motion.span
                className="ml-2 font-semibold tracking-wide"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
              >
                {item.label.toUpperCase()}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.a>
      ))}
      <motion.button
        className="absolute top-4 right-0 transform translate-x-1/2 bg-white rounded-full p-2 shadow-md"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronRight />
        </motion.div>
      </motion.button>
    </motion.nav>
  )
}

export default Navbar