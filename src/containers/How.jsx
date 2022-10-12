import React from 'react'
import dot from '../assets/dot.svg'
import line from '../assets/line-dotted.svg'
import line1 from '../assets/line1.svg'
import line2 from '../assets/line2.svg'
import line3 from '../assets/line3.svg'

const How = () => {
  return (
    <section id="howitworks" className='bg-[#F9F9FB]'>
        <div className='container-p pt-20'>
            <h1 className='text-center'>How Streamzenn Works?</h1>
            <p className='mt-2 text-center md:text-base lg:text-lg'>Integrate with any eCommerce Platform that has an API.</p>
            <div className='lg:hidden how-process grid mt-12 mb-20'>
                <img src={dot} alt="" className='h-[26px] w-[26px] mx-auto'></img>
                <h2>Contact us, book a demo</h2>
                <img src={line} alt="" className='h-[53px] w-0.5 mx-auto'></img>
                <div></div>
                <img src={dot} alt="" className='h-[26px] w-[26px] mx-auto'></img>
                <h2>Kick off and intro</h2>
                <img src={line} alt="" className='h-[53px] w-0.5 mx-auto'></img>
                <div></div>
                <img src={dot} alt="" className='h-[26px] w-[26px] mx-auto'></img>
                <h2>System setup instructions</h2>
                <img src={line} alt="" className='h-[53px] w-0.5 mx-auto'></img>
                <div></div>
                <img src={dot} alt="" className='h-[26px] w-[26px] mx-auto'></img>
                <h2>Get started with your shopping events</h2>
            </div>
            <div className='hidden lg:grid grid-cols-4 gap-2 py-20 xl:py-24'>
              <img src={line1} alt=""></img>
              <img src={line2} alt=""></img>
              <img src={line3} alt=""></img>
              <img src={dot} className="h-2/5 mt-3"></img>
              <h3>Contact us,<br></br>book a demo</h3>
              <h3>Kick off<br></br>and intro</h3>
              <h3>System setup<br></br>instructions</h3>
              <h3>Get started with your<br></br>shopping events</h3>
            </div>
        </div>
    </section>
  )
}

export default How