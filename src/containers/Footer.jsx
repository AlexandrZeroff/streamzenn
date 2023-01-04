import React from 'react'
import UserForm from '../components/UserForm'
import facebook from '../assets/facebook.svg'
import insta from '../assets/insta.svg'
import logo from '../assets/logo-white-text.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
  return (
    <section className="bg-[#272F42]">
      <div className="container-p pt-20">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-8">
          <div className="mb-16">
            <h1 className="text-[#F7FEFF]">We'd love to have you join us!</h1>
            <p className="text-[#87898D] mt-2 lg:mt-6 text-sm md:text-base lg:text-lg">
              Transform your business with streamzenn live commerce, the most
              effective way to interact with customers and reimagine the
              everyday purchasing process.
            </p>
            <div className="my-12 hidden md:block">
              <h2 className="text-[#F7FEFF]">Social media</h2>
              <div className="footer-links flex justify-start items-center mt-8">
                <div className="bg-[#474C61] w-[50px] h-[50px] rounded-[60px] flex mr-4 cursor-pointer">
                  <a
                    className="m-auto"
                    href="https://www.facebook.com/profile.php?id=100087237523334"
                  >
                    <img
                      src={facebook}
                      className="w-[22px] "
                      alt="Telegram"
                    ></img>
                  </a>
                </div>
                <div className="bg-[#474C61] w-[50px] h-[50px] rounded-[60px] flex mr-4 cursor-pointer">
                  <a
                    className="m-auto"
                    href="https://www.instagram.com/streamzenn_pro/"
                  >
                    <img
                      src={insta}
                      className="w-[28px] "
                      alt="Instagram"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border lg:px-16">
            <h1 className="text-[#F7FEFF]">Contact us</h1>
            <UserForm />
          </div>
        </div>
        <div className="h-px bg-[#70747E]"></div>
        <div className="my-12 md:hidden">
          <h2 className="text-[#F7FEFF]">Social media</h2>
          <div className="footer-links flex justify-start items-center mt-8">
            <div className="bg-[#474C61] w-[50px] h-[50px] rounded-[60px] flex mr-4 cursor-pointer">
              <a
                className="m-auto"
                href="https://www.facebook.com/profile.php?id=100087237523334"
              >
                <img src={facebook} className="w-[22px] " alt="Telegram"></img>
              </a>
            </div>
            <div className="bg-[#474C61] w-[50px] h-[50px] rounded-[60px] flex mr-4 cursor-pointer">
              <a
                className="m-auto"
                href="https://www.instagram.com/streamzenn_pro/"
              >
                <img src={insta} className="w-[28px]" alt="Instagram"></img>
              </a>
            </div>
          </div>
        </div>
        <div className="pb-12 lg:grid grid-cols-2 gap-x-8">
          <div className="lg:max-w-xs">
            <img
              src={logo}
              alt="Streamzenn"
              className="w-[140px] md:mt-8"
            ></img>
            <p className="mt-6 text-[#F7FEFF] text-sm">
              Company name: JMIND SYSTEMS LTD
            </p>
            <p className="mt-6 text-[#F7FEFF] text-sm">
              Legal address: Emmanouil Roidi, 10-12 2nd floor Agla Zoni, 3031,
              Limassol, Cyprus
            </p>
            <p className="mt-10 text-[#F7FEFF] text-sm">
              © Copyright 2022 streamzenn. All Rights Reserved
            </p>
          </div>
          <div className="hidden lg:grid grid-cols-3 mt-12 pl-16">
            <div>
              <h3 className="text-white">Menu</h3>
              <nav className="bottom-link flex flex-col items-start">
                <AnchorLink offset="60" href="#home">
                  Home
                </AnchorLink>
                <AnchorLink offset="60" href="#about">
                  About us
                </AnchorLink>
                <AnchorLink offset="60" href="#benefits">
                  Key benefits
                </AnchorLink>
                <AnchorLink href="#features">Features</AnchorLink>
                <AnchorLink href="#howitworks">How it works</AnchorLink>
              </nav>
            </div>
            <div>
              <h3 className="text-white">Support</h3>
              <nav className="bottom-link flex flex-col items-start">
                <a href="/">Online Chat</a>
                <a href="#about">Help</a>
              </nav>
            </div>
            <div>
              <h3 className="text-white">Policies</h3>
              <nav className="bottom-link flex flex-col items-start">
                <a
                  href="https://drive.google.com/file/d/1-NQ_regpfyHrPLcmPYeVbJ1EKqCQOhGl/view"
                  target="_blank"
                >
                  Privacy policy
                </a>
                <a
                  href="https://drive.google.com/file/d/1-NQ_regpfyHrPLcmPYeVbJ1EKqCQOhGl/view"
                  target="_blank"
                >
                  Terms
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
