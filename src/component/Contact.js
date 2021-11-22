import React from 'react'
import Icon from 'react-icons-kit'
import '../Styles/Contact.css'
import {mapMarker} from 'react-icons-kit/fa/mapMarker'
import {facebookSquare} from 'react-icons-kit/fa/facebookSquare'
import {youtubePlay} from 'react-icons-kit/fa/youtubePlay'
import {linkedinSquare} from 'react-icons-kit/fa/linkedinSquare'
import solar1 from '../images/solar2.jpg'
import emailjs from 'emailjs-com'

const Contact = () => {
    
        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs.sendForm('service_lte54dj', 'template_gnqpblr', e.target, 'user_DF8V4MQ0JOTRnGRdgqPqE')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset()
          };
    return (
        <div id='contact'>
        
        <div className='contact'>
        <img className='w-100 cimg' src = {solar1} alt='solar' />
            <h2 className='con text-center fw-bolder mt-md-4 p-3'>Contact Us</h2>
            <div className='row mx-sm-5 p-md-5 mx-0'>
                <div className='col-lg-6 bg-white border'>
                 <br/>
                <form className='form-group mx-md-5 py-md-5 py-2 mx-2  ' autoComplete='off' onSubmit={sendEmail}>
                    <div className='text-start'>
                    <label>FullName *</label>
                    <input  type='text' className='form-control' placeholder='Your FullName' required name='name'></input>
                    <br/>
                    <label>Current Electricity Bill *</label>
                    <input type='number' className='form-control' placeholder='Your current electricity bill in Rs' required name='bill'></input>
                    <br/>
                    <label>Size of Solar *</label>
                    <input type='number' className='form-control' placeholder='5KW-10KW-15KW-20KW' name='solar' required></input>
                    <br/>
                    <label>City *</label>
                    <input  type='text' className='form-control' placeholder='Your city' required name='city'></input>
                    <br/>
                    <label>Contact number *</label>
                    <input type='tel' className='form-control' placeholder='Your Contact number 03xx-xxxxxxx' name='phone' required></input>
                    <br/>
                    <label>Email *</label>
                    <input type='email' className='form-control' placeholder='Email Address' name='email' required></input>
                    <br/>
                    </div>
                    <button className='btn btn-primary px-5'>SUBMIT</button>
                </form>
                </div>
                <div className='col-lg-6 py-md-5 p-5'>
                    <div>
                    <h2 className='px-xs-5 text-start mx-md-5 pt-4 pt-md-0'>Contact us through this form!</h2>
                    <br/>
                    </div>
                    <div>
                    <p><Icon icon={mapMarker} className="text-success mx-md-3"/> New York, NY 10012, US</p>
                    </div>
                    <section className="d-flex  justify-content-lg-between  px-md-5 mx-md-1">
                        <div className="me-md-5 d-lg-block">
                            <span>Get connected with us on <br/>social networks:</span>
                        </div>
                        <div className='ms-auto'>
                            <a href="https://www.facebook.com/technocitycctv" rel='noopener noreferrer' target='_blank' className="me-2 text-primary">
                            <Icon icon={facebookSquare} /></a>
                            <a href="https://www.youtube.com/channel/UCbnJ9rPtOfEs3GKi8OIjVvg" rel='noopener noreferrer' target='_blank' className="me-2 text-danger">
                                <Icon icon={youtubePlay}/></a>
                         
                            <a href="/" className="me-2 text-info">
                            <Icon icon={linkedinSquare}/>
                            </a>
                        </div>
                    </section>
                </div>
            </div>

        </div>
        </div>
    )
}
export default Contact