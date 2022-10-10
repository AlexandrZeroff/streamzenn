import React, { useState } from 'react'
import logo from '../assets/streamzenn-logo.svg'
import { VscMenu, VscClose } from 'react-icons/vsc'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const itemVariants = {
    closed: {
      opacity: 0
    },
    open: { opacity: 1 }
  };
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0,
        staggerDirection: 1,
      },
    },
  }

  return (
    <section className="bg-[#FBFBFD] relative">
      <div className="container-p">
        <div className="h-16 flex items-center justify-between">
          <img src={logo} alt="Logo" className="h-8 lg:h-12 my-auto"></img>
          <nav className='inline-navbar hidden md:flex items-center justify-center '>
            <a href="#about">ABOUT US</a>
            <a href="#about">KEY BENEFITS</a>
            <a href="#about">FEATURES</a>
            <a href="#about">HOW IT WORKS</a>
          </nav>
          <button className="hidden md:inline light-btn-nav">Contact</button>
          <div className="ml-auto my-auto md:hidden">
            {toggleMenu ? (
              <VscClose
                color="#000"
                size={34}
                onClick={() => setToggleMenu(false)}
                className="cursor-pointer"
              />
            ) : (
              <VscMenu
                color="#000"
                size={28}
                onClick={() => setToggleMenu(true)}
                className="cursor-pointer"
              />
            )}
            <AnimatePresence>
              {toggleMenu && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 256 }}
                  className="nav-menu absolute w-64 h-[100vh] top-16 right-0 bg-white py-6 px-4 flex flex-col z-10"
                >
                  <motion.nav
                    className="dropdown-nav flex flex-col items-end"
                    initial="closed"
                    animate="open"
                    variants={sideVariants}
                  >
                    <motion.a href="#about" variants={itemVariants}>
                      <h2>ABOUT US</h2>
                    </motion.a>
                    <motion.a href="#about" variants={itemVariants}>
                      <h2>KEY BENEFITS</h2>
                    </motion.a>
                    <motion.a href="#about" variants={itemVariants}>
                      <h2>FEATURES</h2>
                    </motion.a>
                    <motion.a href="#about" variants={itemVariants}>
                      <h2>HOW IT WORKS</h2>
                    </motion.a>
                  </motion.nav>
                  <button className="light-btn mx-auto mt-12">Contact</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
