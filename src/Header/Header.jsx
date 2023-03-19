import React from 'react'
import "./style.scss"

export default function Header() {
  return (
    <>
    <div className="header">
      <div className="wrapper">
        <div className="container">
          <div className="header-bg"></div>
            <div className="titles">
            <h1 className="header-title">This is header title</h1>
            <p className="header-tiny-p">this is small parag</p>
            </div>

            <div className="wrapper-grid">
              {/* 4 colums to the left */}
              
              <div className="cloumn1">
                <div className="wrapper-grid-img1"></div>
                <p className="grid-text">this is text this is text</p>

              </div>

              <div className="cloumn2">
              <div className="wrapper-grid-img2"></div>
              <p className="grid-text">this is text</p>
              </div>

              <div className="cloumn3">
              <div className="wrapper-grid-img3"></div>
              <p className="grid-text">this is text</p>
              </div>

              <div className="cloumn4">
              <div className="wrapper-grid-img4"></div>
              <p className="grid-text">this is text</p>
              </div>
            </div>


          
        </div>
      </div>
    </div>
      
    </>
  )
}
