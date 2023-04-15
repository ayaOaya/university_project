import React, { useEffect } from 'react'
import "./style.scss"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function Navbar() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() =>{
    gsap.to(".navbar", {opacity:1, delay:2, duration:1 })
  })
  
  return (
    <>
    <div className="navbar" data-scroll-section>
        <div className="wrapper">
            <div className="container">
                <h1 className="title">UNIVERSITY</h1>
                <ul className='ul'>
                    <li className='li'><a href="/">HOME</a></li>
                    <li className='li'><a href="/">ABOUT</a></li>
                    <li className='li'><a href="/">MORE</a></li>
                    <li className='li'><a href="/">STORY</a></li>
                    <li className='li'><a href="/">COLLEGE</a></li>
                    <li className='li'><a href="/">CONTACT</a></li>
                </ul>
            </div>
        </div>
    </div>

    </>
  )
}
