import React, { useState } from 'react'
import logo from '../assets/streamzenn-logo.svg'
import { VscMenu, VscClose } from 'react-icons/vsc'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <section className="bg-[#FBFBFD]">
      <div className="container">
        <div className="h-16 flex align-middle">
          <img src={logo} alt="Logo" className="h-8 my-auto"></img>
          <div className="ml-auto my-auto lg:hidden relative">
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
