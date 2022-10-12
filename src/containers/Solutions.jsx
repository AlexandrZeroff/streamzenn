import React from 'react'
import camera from '../assets/solutions/camera-crop.png'
import microfone from '../assets/solutions/micro-cropped.png'
import chat from '../assets/solutions/chat-cropped.png'

const Solutions = () => {
  return (
    <section id="about">
      <div className="container-p">
        <h1 className="mt-16 text-center lg:mt-24">Live Commerce Solutions</h1>
        <p className="text-primary mt-2 lg:mt-6 text-center text-sm  md:text-base lg:text-lg max-w-3xl mx-auto">
          Transform your business with streamzenn live commerce, the most
          effective way to interact with customers and reimagine the everyday
          purchasing process.
        </p>
        <div className="flex flex-col align-middle mt-4 sm:grid sm:grid-cols-3 sm:mt-12 lg:pb-20">
          <div className="">
            <img
              src={camera}
              alt="Video Streaming"
              className="solution mx-auto w-44 mb-[-24px]"
            ></img>
            <h3 className="text-center">Video Streaming</h3>
          </div>
          <div className="">
            <img
              src={microfone}
              alt="Audio Streaming"
              className="solution mx-auto w-44 mb-[-24px]"
            ></img>
            <h3 className="text-center">Audio Streaming</h3>
          </div>
          <div className="">
            <img
              src={chat}
              alt="Real-Time Messaging"
              className="solution mx-auto w-44 mb-[-24px]"
            ></img>
            <h3 className="text-center">Real-Time Messaging</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions
