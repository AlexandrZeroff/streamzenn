import React, { useState } from 'react'
import logo from '../assets/streamzenn-logo.svg'
import { VscMenu, VscClose } from 'react-icons/vsc'
import { motion, AnimatePresence } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
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
    <section id="home" className="bg-[#FBFBFD] relative">
      <div className="container-p">
        <div className="h-16 flex items-center justify-between md:my-2 lg:my-4">
          <img src={logo} alt="Logo" className="h-8 lg:h-12 my-auto"></img>
          <nav className="inline-navbar hidden md:flex items-center justify-center ">
            <AnchorLink offset="60" href="#about">
              ABOUT US
            </AnchorLink>
            <AnchorLink offset="60" href="#benefits">
              KEY BENEFITS
            </AnchorLink>
            <AnchorLink href="#features">FEATURES</AnchorLink>
            <AnchorLink href="#howitworks">HOW IT WORKS</AnchorLink>
          </nav>
          <AnchorLink  href='#userform' offset="100px"><button className="hidden md:inline light-btn-nav">Contact</button></AnchorLink>
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
                    <AnchorLink
                      offset="60"
                      href="#about"
                      onClick={() => setToggleMenu(false)}
                    >
                      <h2>ABOUT US</h2>
                    </AnchorLink>
                    <AnchorLink
                      offset="60"
                      href="#benefits"
                      onClick={() => setToggleMenu(false)}
                    >
                      <h2>KEY BENEFITS</h2>
                    </AnchorLink>
                    <AnchorLink
                      href="#features"
                      onClick={() => setToggleMenu(false)}
                    >
                      <h2>FEATURES</h2>
                    </AnchorLink>
                    <AnchorLink
                      href="#howitworks"
                      onClick={() => setToggleMenu(false)}
                    >
                      <h2>HOW IT WORKS</h2>
                    </AnchorLink>
                  </motion.nav>
                  <AnchorLink  href='#userform' offset="100px" className='mx-auto'><button className="light-btn mx-auto mt-12" >Contact</button></AnchorLink>
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
