import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonial = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Jessica Parker</h3>
                                    <span>EduTech, Delhi</span>
                                </div>
                            </div>
                            <p>The Web Development course at Edutech Institute was an absolute game-changer for me. The instructors were incredibly knowledgeable, and the hands-on projects gave me real-world experience. I went from knowing nothing about coding to building fully functional websites. Highly recommend this course to anyone looking to jumpstart their career in tech!.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>David Mitchell</h3>
                                    <span>EduTech, Mumbai</span>
                                </div>
                            </div>
                            <p>The Data Analytics course at Edutech Institute was exactly what I needed to advance my career. The course content was comprehensive, covering everything from data visualization to machine learning. The real-world case studies and projects helped me apply what I learned immediately. I've gained valuable skills that have opened up new opportunities for me in the data analytics field.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Emily Brown</h3>
                                    <span>EduTech, London</span>
                                </div>
                            </div>
                            <p>The App Development course at Edutech Institute exceeded my expectations. The instructors made complex topics easy to understand, and the hands-on projects were both challenging and rewarding. I'm now confident in my ability to build and deploy mobile apps, and I'm excited to pursue a career in app development. Thank you, Edutech!
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Michael Anderson</h3>
                                    <span>EduTech, New York</span>
                                </div>
                            </div>
                            <p>Taking the Web Development course at Edutech Institute was the best decision I've made. The curriculum was well-structured, and the support from the instructors was top-notch. I loved how the course balanced theory with practical work. I now have the skills and confidence to create websites from scratch, and I've even started freelancing!
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonial