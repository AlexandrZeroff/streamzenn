import React from 'react'
import Feature from '../components/Feature'
import chat from '../assets/features/chat.png'
import recording from '../assets/features/recording.png'
import autoscaling from '../assets/features/autoscaling.png'
import reactions from '../assets/features/reactions.png'
import live from '../assets/features/live.png'
import click from '../assets/features/click.png'
import emojis from '../assets/features/emojis.png'
import devices from '../assets/features/devices.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Features = () => {
  return (
    <section id="features" className="bg-[#F9F9FB]">
      <div className="container-p pt-20 flex flex-col items-center">
        <h1 className="text-center">Features</h1>
        <div className="features-container mt-12 sm:flex sm:flex-wrap sm:justify-center">
          <Feature number="01" pic={chat} alt="Chat" header="Chat" />
          <Feature
            number="02"
            pic={recording}
            alt="Voice recording"
            header="Recording"
          />
          <Feature
            number="03"
            pic={autoscaling}
            alt="Autoscaling"
            header="Autoscaling"
          />
          <Feature
            number="04"
            pic={reactions}
            alt="Live Reactions"
            header="Live Reactions"
          />
          <Feature
            number="05"
            pic={live}
            alt="Special offers during streams"
            header="Special offers during streams"
            margin="mt-[-14%]"
          />
          <Feature
            number="06"
            pic={click}
            alt="Click-to-buy links"
            header="Click-to-buy links"
          />
          <Feature number="07" pic={emojis} alt="Emojis" header="Emojis" />
          <Feature
            number="08"
            pic={devices}
            alt="Simultaneous device support"
            header="Simultaneous device support"
            margin="mt-[-14%]"
          />
        </div>
        <AnchorLink href='#userform' offset="100px"><button className='purple-btn mt-20 mb-16 mx-auto text-base'>Book demo</button></AnchorLink>
      </div>
    </section>
  )
}

export default Features
