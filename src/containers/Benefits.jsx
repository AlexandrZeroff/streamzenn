import React from 'react'
import Benefit from '../components/Benefit'

const Benefits = () => {
  return (
    <section>
      <div className="container-p">
        <h1 className="text-center mt-24">Key benefits</h1>
        <div className="benefits-container flex mb-16 md:hidden">
          <div className="gradient-line w-1 mt-12 mb-20 rounded-md">
            <p>&nbsp;</p>
          </div>
          <div className="benefits ml-7">
            <Benefit
              number="1"
              header="Boost your online sales"
              text="With live video, audio, and text chat you can boost real-time
                engagement and purchases directly on your native application or
                Android/iOS."
            />
            <Benefit
              number="2"
              header="Grow your community"
              text="Give your customers the opportunity to interact 1:1 with the host of the stream. Showcase your products in ways you never imagined before."
            />
            <Benefit
              number="3"
              header="Schedule interactive shopping events"
              text="Streamzenn lets you create customized events add featured products, communicate with your viewers, and give them special promotions only for the stream time."
            />
            <Benefit
              number="4"
              header="Ultra-low-latency"
              text="No-buffering, All users see the same thing at the same time."
            />
            <Benefit
              number="5"
              header="24/7 Support"
              text="Contact our support team at any time."
            />
          </div>
        </div>
        <div className="hidden benefits-lg md:grid my-20">
          <Benefit
            number="1"
            header="Boost your online sales"
            text="With live video, audio, and text chat you can boost real-time
                engagement and purchases directly on your native application or
                Android/iOS."
            style={{ gridArea: 'first' }}
          />
          <Benefit
            number="2"
            header="Grow your community"
            style={{ gridArea: 'second' }}
            align={{ alignItems: 'flex-end' }}
            textAlign={{ textAlign: 'end' }}
            text="Give your customers the opportunity to interact 1:1 with the host of the stream. Showcase your products in ways you never imagined before."
          />
          <Benefit
            number="3"
            header="Schedule interactive shopping events"
            style={{ gridArea: 'third' }}
            text="Streamzenn lets you create customized events add featured products, communicate with your viewers, and give them special promotions only for the stream time."
          />
          <Benefit
            number="4"
            header="Ultra-low-latency"
            style={{ gridArea: 'fourth' }}
            align={{ alignItems: 'flex-end' }}
            textAlign={{ textAlign: 'end' }}
            text="No-buffering, All users see the same thing at the same time."
          />
          <Benefit
            number="5"
            header="24/7 Support"
            style={{ gridArea: 'fifth' }}
            text="Contact our support team at any time."
          />
          <div className="area-bar gradient-line w-1 mt-12 mb-20 rounded-md">
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
