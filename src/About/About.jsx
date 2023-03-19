import React from 'react'
import "./style.scss"

export default function About() {
  return (
    <>
    <div className="about">
        <div className="about-grid">
            <div className="about-titles">
                <h1 className='about-h1'>here is an h1 here is an h1</h1>
                <p className='about-p'>here is a paragraph</p>
            </div>
            <div className="about-img1"></div>
        </div>

        <div className="about-info">
           <div className="about-info-titles">
           <h1 className="about-info-h1">lorem alds</h1>
            <p className="about-info-p">here is some information about the university and the overall university balah balha bla</p>
           </div>
        </div>



        {/* The connect section */}

        <div className="connect">
            <div className="connect-grid">

                <div className="grid1">
                    <h2 className="grid-h2">Lorem, ipsum</h2>
                    <p className="grid-p">Lorem, ipsum  sit amet consectetur adipisicing elit. Ipsum, voluptas rerum explicabo consequuntur quia adipisci quisquam nisi quaerat voluptatum earum illo facilis maxime reprehenderit nam voluptatem animi expedita non veritatis.</p>
                </div>

                <div className="grid2">
                    <h2 className="grid-h2">Lorem, ipsum</h2>
                    <p className="grid-p">Lorem, ipsum  sit amet consectetur adipisicing elit. Ipsum, voluptas rerum explicabo consequuntur quia adipisci quisquam nisi quaerat voluptatum earum illo facilis maxime reprehenderit nam voluptatem animi expedita non veritatis.</p>
                </div>

                <div className="grid3">
                    <h2 className="grid-h2">Lorem, ipsum</h2>
                    <p className="grid-p">Lorem, ipsum  sit amet consectetur adipisicing elit. Ipsum, voluptas rerum explicabo consequuntur quia adipisci quisquam nisi quaerat voluptatum earum illo facilis maxime reprehenderit nam voluptatem animi expedita non veritatis.</p>
                </div>

                <div className="grid4">
                    <h2 className="grid-h2">Lorem, ipsum</h2>
                    <p className="grid-p">Lorem, ipsum  sit amet consectetur adipisicing elit. Ipsum, voluptas rerum explicabo consequuntur quia adipisci quisquam nisi quaerat voluptatum earum illo facilis maxime reprehenderit nam voluptatem animi expedita non veritatis.</p>
                </div>
            </div>
        </div>



        {/* Big picture in the about page */}

        <div className="bg-pic-container">
            <div className="bg-pic"></div>
        </div>




        {/* the pics and text animation */}


        <div className="picsText-container">
            <div className="container-grid-1">
                <div className="conatiner-grid1-img"></div>
                <div className="container-grid1-titles">
                    <h1 className="grid1-h1">jkjkjkkkkkkjjjj</h1>
                    <p className="grid1-p">jdkdddkdkncknc</p>
                </div>
            </div>


            <div className="container-grid-2">
             <div className="container-grid2-titles">
                <h1 className="grid2-h1">jkjkjkkkkkkjjjj</h1>
                <p className="grid2-p">jkjkjkkkkkkjjjj</p>
             </div>
             <div className="conatiner-grid2-img"></div>
        </div>

        </div>





    </div>
    </>
  )
}
