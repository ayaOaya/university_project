import React from 'react'
import "./style.scss"


export default function Navbar() {
  return (
    <>
    <div className="navbar">
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
