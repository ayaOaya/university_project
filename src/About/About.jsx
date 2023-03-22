import React, { useEffect } from 'react'
import "./style.scss"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function About() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() =>{
        gsap.to(".about-info", {opacity:1, duration:1, clipPath:" polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)", scrollTrigger: {
            trigger:".about-info"
        }})
        gsap.to(".connect", { opacity:1, duration:1, clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", scrollTrigger:{trigger:".connect"}})

        gsap.to(".conatiner-grid1-img",{ opacity:1, duration:1, clipPath:"polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", scrollTrigger: {trigger:".conatiner-grid1-img"}})
        gsap.to(".conatiner-grid2-img",{ opacity:1, duration:1, clipPath:"polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", scrollTrigger: {trigger:".conatiner-grid2-img"}})

    }, [])
  return (
    <>
    <div className="about" data-scroll-section>
        <div className="about-grid">
            <div className="about-titles">
                <h1 className='about-h1'>Accessible Resources</h1>
                <p className='about-p'> We provide our students with accessible resources that support their academic and personal goals. These resources can include libraries, technology centers, study spaces, and tutoring services.</p>
            </div>
            <div className="about-img1"></div>
        </div>

        <div className="about-info">
           <div className="about-info-titles">
           <h1 className="about-info-h1"></h1>
            <p className="about-info-p">"I am so grateful for my college experience, it provided me not only with a quality education but also with a diverse community, countless opportunities for personal and professional growth, and a supportive environment that truly helped me thrive." Katy larrl</p>
           </div>
        </div>



        {/* The connect section */}

        <div className="connect">
            <div className="connect-grid">

                <div className="grid1">
                    <h2 className="grid-h2">Opportunities for Leadership</h2>
                    <p className="grid-p">We provide opportunities for students to develop leadership skills and take on leadership roles. These opportunities can include student government, club leadership, community service projects, and internships.</p>
                </div>

                <div className="grid2">
                    <h2 className="grid-h2">Innovative Programs</h2>
                    <p className="grid-p">We have innovative programs that reflect the changing needs of the workforce and society. They should offer cutting-edge programs that combine theory and practice, and provide students with the skills and knowledge necessary to succeed in their chosen fields. This can include interdisciplinary programs, experiential learning opportunities, and programs that integrate technology and innovation.</p>
                </div>

                <div className="grid3">
                    <h2 className="grid-h2">Global Perspective</h2>
                    <p className="grid-p">We provide a global perspective to their students, exposing them to different cultures, languages, and perspectives. This can be achieved through study abroad programs, international student programs, and courses that focus on global issues.</p>
                </div>

                <div className="grid4">
                    <h2 className="grid-h2">Commitment to Diversity, Equity, and Inclusion</h2>
                    <p className="grid-p">We have a strong commitment to diversity, equity, and inclusion, and actively work to create a welcoming and inclusive environment for all students. This can involve implementing policies and practices that promote equity and inclusion, as well as providing training and education to students and faculty on these issues.</p>
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
                    <h1 className="grid1-h1">World-Class Education</h1>
                    <p className="grid1-p">In addition to our academic programs, we offer a wide range of extracurricular activities and community engagement opportunities. From student clubs and organizations to service projects and internships, there are countless ways for students to get involved and make a difference. We believe that by working together, we can create a more just and equitable world, and we are committed to doing our part to make that vision a reality.</p>
                </div>
            </div>


            <div className="container-grid-2">
             <div className="container-grid2-titles">
                <h1 className="grid2-h1">Positive Impact</h1>
                <p className="grid2-p">Our college is dedicated to making a positive impact on society and creating a better future for all. We believe that education is a powerful tool for change, and we are committed to using it to make a difference in our community and beyond. Our faculty and staff are passionate about their work and are dedicated to helping students become leaders and change-makers in their fields.</p>
             </div>
             <div className="conatiner-grid2-img"></div>
        </div>

        </div>





    </div>
    </>
  )
}
