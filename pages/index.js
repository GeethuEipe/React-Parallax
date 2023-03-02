import Parallax, { AppearLayer, Layer } from 'react-parallax-scroll'

import Image from 'next/image'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo title="Simple Usage Example" />
      <main className="">
        <Parallax>
          <div className="header-100 header">
            <Layer
              className="big-text"
              settings={{ speed: -0.15, type: 'translateY' }}>
              React Parallax Scroll
            </Layer>
          </div>

          <div className="header-25" />

          <div className="header-50">
            <AppearLayer
              className="box center text-black"
              in="rotateIn"
              duration="1.5s">
              Hello guys!!!
            </AppearLayer>
          </div>

          <div className="header-50">
            <AppearLayer
              className="box center text-black"
              in="slideInUp"
              duration="1.5s">
              I'm a React component
            </AppearLayer>
          </div>

          <div className="header-50" style={{ display: 'none' }}>
            <AppearLayer
              className="box center text-black"
              in="zoomInLeft"
              duration="1.5s">
              I'm helpful for landing page
            </AppearLayer>
          </div>

          <div className="header-50">
            <AppearLayer
              className="box center text-black"
              in="bounceInLeft"
              duration="3s">
              I'm super tiny & fast
            </AppearLayer>
          </div>

          <div className="header-50">
            <AppearLayer
              className="box center"
              in="heartBeat"
              duration="1.5s"
              loop="infinite">
              <p className="text-black">Try me</p>
            </AppearLayer>
          </div>

          <div className="header-50">
            <AppearLayer
              className="box center"
              in="swing"
              duration="1.5s"
              loop="infinite">
              <p className="text-black">Author: Thi Tran</p>
            </AppearLayer>
          </div>

          <div className="header-25" />

          <Layer
            className="balloon"
            settings={{ speed: 0.5, type: ['translateY'] }}>
            <img src="/balloon.png" />
          </Layer>

          <Layer
            className="balloon small"
            style={{ top: '500px', left: 'auto', right: '230px' }}
            settings={{ speed: 0.3, type: ['translateY'] }}>
            <img src="/balloon2.png" />
          </Layer>

          <Layer
            className="balloon small"
            style={{ top: '1200px', left: 'auto', right: '130px' }}
            settings={{ speed: 0.1, type: ['translateY'] }}>
            <img src="/balloon3.png" />
          </Layer>

          <Layer
            className="cloud"
            settings={{ speed: -0.3, type: ['translateY'] }}
          />

          <Layer
            style={{ left: '140px', top: '700px' }}
            className="cloud medium"
            settings={{ speed: -0.19, type: ['translateY'] }}
          />

          <Layer
            style={{ left: '440px', top: '790px' }}
            className="cloud small"
            settings={{ speed: -0.49, type: ['translateY'] }}
          />

          <Layer
            style={{ left: '340px', top: '1290px' }}
            className="cloud"
            settings={{ speed: -0.1, type: ['translateY'] }}
          />

          <Layer
            style={{ left: 'auto', right: '200px', top: '1300px' }}
            className="cloud small"
            settings={{ speed: -0.39, type: ['translateY'] }}
          />

          <Layer
            style={{ left: 'auto', right: '100px', top: '900px' }}
            className="cloud medium"
            settings={{ speed: -0.09, type: ['translateY'] }}
          />

          <div className="footer">
            <Layer
              className="footer-content"
              settings={{ speed: -0.3, type: ['translateY'] }}>
              <Layer settings={{ speed: 0.5, type: ['translateX'] }}>
                <img className="pirate" src="/pirate.png" />
              </Layer>
              <img className="island" src="/island.png" />
            </Layer>
          </div>
        </Parallax>
      </main>
    </>
  )
}
