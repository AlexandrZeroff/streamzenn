import React from 'react'
import pic from '../assets/illustration-header.png'
import pic_lg from '../assets/illustration-header-crop.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
  return (
    <section className="bg-[#FBFBFD]">
      <div className="container-p">
        <div className="header-container pt-8 md:pt-16 flex flex-col items-center md:grid md:pb-16">
          <div className="md:mt-6 md:items-center md:pr-8 xl:mt-16">
            <h1>
              Change the perspective of the shopping experience with streamzenn
            </h1>
            <p className="text-primary mt-2 text-sm md:text-base lg:text-lg">
              Engage social shoppers with influencers, grow brand loyalty, and
              drive revenue with livestream events using the most flexible
              solution on the market.
            </p>
            <AnchorLink href="#userform" offset="100px" className="w-[180px] lg:w-[200px]">
              <button className="hidden md:block purple-btn mt-8 text-sm">
                Learn more
              </button>
            </AnchorLink>
          </div>
          <img
            src={pic}
            alt="Most flexible solution on the market"
            className="mx-auto md:hidden"
          ></img>
          <img
            src={pic_lg}
            alt="Most flexible solution on the market"
            className="hidden md:block mx-auto"
          ></img>
          <AnchorLink href="#userform" offset="100px" className='mx-auto'>
            <button className="md:hidden purple-btn mx-auto mt-4 mb-16 text-sm">
              Learn more
            </button>
          </AnchorLink>
        </div>
      </div>
    </section>
  )
}

export default Header
