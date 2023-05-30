import React, { useEffect } from 'react'
import "./style.scss"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function Header() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(".header-bg", { opacity: 1, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1, delay: 0.6 })
    gsap.to(".header-title", { opacity: 1, duration: 1, delay: 1.4 })
    gsap.to(".header-tiny-p", { opacity: 1, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1, delay: 2.4 })

  })
  return (
    <>
      <div className="header" data-scroll-section>
        <div className="wrapper">
          <div className="container">
            <div className="header-bg"></div>
            <div className="titles">
              <h1 className="header-title">IS assumenda deleniti maiores</h1>
              <p className="header-tiny-p">Lorem sit amet conse reprehenderit debitis minima iure atq natus repellendus provident repudiandae Cum asperiores obcae</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
