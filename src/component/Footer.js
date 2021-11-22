import React from 'react'
import Icon from 'react-icons-kit'
import {facebookSquare} from 'react-icons-kit/fa/facebookSquare'
import {youtubePlay} from 'react-icons-kit/fa/youtubePlay'
// import {instagram} from 'react-icons-kit/fa/instagram'
import {twitterSquare} from 'react-icons-kit/fa/twitterSquare'

// import {linkedinSquare} from 'react-icons-kit/fa/linkedinSquare'
import {eercast} from 'react-icons-kit/fa/eercast'
import {home} from 'react-icons-kit/fa/home'
import {envelope} from 'react-icons-kit/fa/envelope'
import {mobile} from 'react-icons-kit/fa/mobile'

const Footer = () => {
  
    return (
        <>
<footer className="text-center text-lg-start bg-dark text-light">
  <section
    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div>
      <a href="https://www.facebook.com/technocitycctv" target="_blank" rel='noopener noreferrer' className="me-4 text-primary">
        <Icon icon={facebookSquare}/>
      </a>
      <a href="https://www.youtube.com/channel/UCbnJ9rPtOfEs3GKi8OIjVvg" target='_blank' rel='noopener noreferrer' className="me-4  text-danger">
      <Icon icon={youtubePlay}/>
      </a>

      <a href="/" className="me-4 blue" >
        <Icon icon={twitterSquare}/>
      </a>
     
    </div>
  </section>
  <section className="">
    <div className="container text-center   mt-5">
      <div className="row mt-3">
        <div className="col-lg-4 mx-auto mb-4">
          <h6 className=" fw-bold mb-4 oranges">
            <Icon icon={eercast} className=" me-3 blue"/>TECHNOCITY
          </h6>
          <p>
          Technocitycctv provides complete solution for any size installation, from residential rooftops to commercial sites. Our products and solutions are present at every link in the energy chain and contribute to your energy savings
          </p>
        </div>
        <div className="col-lg-4 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            All about Us
          </h6>
          <p>
            <a href="projects" className="text-reset text-decoration-none">Projects</a>
          </p>
          <p>
            <a href='services' className="text-reset text-decoration-none">Services</a>
          </p>
          <p>
            <a href="contact" className="text-reset text-decoration-none">Contact</a>
          </p>
          <p>
            <a href="product" className="text-light text-decoration-none">Product</a>
          </p>
        </div>
        <div className="col-lg-4 mx-auto mb-md-0 mb-4 text-lg-start">
          <h6 className="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><Icon icon={home} className=" me-3 blue"/> New York, NY 10012, US</p>
          <p>
          <Icon icon={envelope} className=" me-3 blue"/>
            technocitycctv@gmail.com
          </p>
          <p><Icon icon={mobile} size={22} className=" me-3 blue"/>+ 92 332 226 0179</p>
        </div>
      </div>
    </div>
  </section>
  <div className="text-center p-4 blue" >
    © 2021 Copyright:
    <span className="text-decoration-none fw-bold " > TECHNOCITY </span>
  </div>
</footer>
</>
)
}

export default Footer