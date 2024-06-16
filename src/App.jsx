import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title heading="What We Offer" subheading="Our Program" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title heading="Gallery" subheading="Campus Photos" />
        <Campus />
        <Title heading="TESTIMONIALS" subheading="What Student Says" />
        <Testimonials />
        <Title heading="Contact Us" subheading="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer embedId="UVe3NsAD9RA" playState={playState} setPlayState={setPlayState} />
    </>
  )
}



export default App