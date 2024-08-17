import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' onClick={() => {setPlayState(true)}}/>
            </div>
            <div className="about-right">
                <h3>About Institute</h3>
                <h2>Nurturing Tommorow's Leaders Today</h2>
                <p>At EduTech, we believe in empowering individuals through technology education. Our mission is to bridge the gap between traditional learning and the ever-evolving tech industry by providing top-notch, accessible courses that equip our students with the skills they need to succeed in today's digital world.</p>
                <p>Founded by a team of tech enthusiasts and industry professionals, EduTech is dedicated to delivering high-quality education that's both practical and innovative. Whether you're looking to break into web development, app development, data analytics, or other tech-driven fields, our expert instructors and comprehensive curriculum are here to guide you every step of the way.</p>
                <p>What sets EduTech apart is our commitment to hands-on learning. We focus on real-world projects, ensuring that our students don't just learn theory but gain practical experience that translates directly to their careers. Our supportive community, industry connections, and up-to-date resources ensure that you're always learning the latest tools and techniques.</p>
                <p>At EduTech, we're more than just an educational institution, we're a launchpad for your future in tech. Join us and transform your passion into a profession.</p>
            </div>
        </div>
    )
}

export default About