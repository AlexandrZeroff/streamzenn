import React from 'react'
import pic from '../assets/illustration-header.png'

const Header = () => {
  return (
    <section className="bg-[#FBFBFD]">
      <div className="container">
        <div className="pt-8 flex flex-col align-middle">
          <h1>
            Change the perspective of the shopping experience with streamzenn
          </h1>
          <p className="text-primary mt-2">
            Engage social shoppers with influencers, grow brand loyalty, and
            drive revenue with livestream events using the most flexible
            solution on the market.
          </p>
          <img
            src={pic}
            alt="Most flexible solution on the market"
            className="mx-auto"
          ></img>
          <button className="purple-btn mx-auto mt-4 mb-16">Learn more</button>
        </div>
      </div>
    </section>
  )
}

export default Header
