import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonials/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setPlayState] = useState(false)

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our Programs' title='What we Offer' />
        <Programs />
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subTitle='Testimonials' title='What Student Says' />
        <Testimonial />
        <About setPlayState={setPlayState}/>
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </>
  )
}

export default App