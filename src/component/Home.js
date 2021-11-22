import {React,useEffect} from 'react'
import Icon from 'react-icons-kit'
import bulb from '../images/about.jpg'
import {thumbsOUp} from 'react-icons-kit/fa/thumbsOUp'
import {group} from 'react-icons-kit/fa/group'
import {creditCard} from 'react-icons-kit/fa/creditCard'
import {headphones} from 'react-icons-kit/fa/headphones'
import '../Styles/Home.css'
import pkg1 from '../images/pkg/package1.jpg'
import pkg2 from '../images/pkg/package2.jpg'
import pkg3 from '../images/pkg/package3.jpg'
import pkg4 from '../images/pkg/package4.jpg'
import wind from '../images/build.jpg'
import emailjs from 'emailjs-com'

const Home = () => {

    useEffect(() => {
        // window.onanimationcancel()
    }, [])
 
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_lte54dj', 'template_iq6utsm', e.target, 'user_DF8V4MQ0JOTRnGRdgqPqE')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return (
        <div id='home'>
        <div className=' w-100'>
        <section className='sec m-0  p-0'>
            <div className='row p-0 m-0'>
                <div className='col-md-6 p-0'>
                    <div className='card '>
                    <img className='mimg1 ' src={bulb} height='300px' alt='solar'/>
                    </div>
                </div>
                <div className='msec1 col-md-6 text-center p-0'>
                    <div className='p-2'>
                    <br/>
                    <h1><strong>Green Energy</strong></h1>
                    <h4>For Everyone</h4>
                    <br/>
                    <p>We have been providing our clients with affordable and reliable green energy solutions since our first day.</p>
                    <br/>
                    <a className='btn btn-primary rounded-pill shadow-none' href='#mbtn'>Free Consultation</a>
                    </div>
                </div>
            </div>
            {/* hello */}

        </section> 
        <section className='sec2 p-0'>  
                <div className='row m-0 p-lg-5 p-md-2'>
                    <div className='col-md-3 col-sm-6 p-lg-4 p-3'>

                        <div className='card card1 p-3 ps-2 text-center '>
                        <Icon className='orange ' icon={thumbsOUp} size={40}/>
                        <h4 >Individual Approach</h4>
                        <hr/>
                        <p>We use an individual approach to each client and we never offer you a set of standard green energy decisions.</p>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6 p-lg-4 p-3'>
                        <div className='card card1 p-3 text-center'>
                        <Icon className='blue ' icon={group} size={40}/>
                        <h4>Qualified Employers</h4>
                        <hr/>
                        <p>Our friendly and professional team works daily to bring you the best renewable energy solutions, from solar panels to wind power stations.</p>
                    </div>
                    </div>
                    <div className='col-md-3 col-sm-6 p-lg-4 p-3'>
                        <div className='card card1 p-3 text-center'>
                        <Icon className='orange ' icon={headphones} size={40}/>
                        <h4>24/7 Online Support</h4>
                        <hr/>
                        <p>Our online support is available 24 hours a day to answer your every question and help you solve any issues you may have with our products.</p>
                    </div>
                    </div>
                    <div className='col-md-3 col-sm-6 p-lg-4 p-3' >
                        <div className='card card1 p-3 text-center '>
                        <Icon className='blue ' icon={creditCard} size={40}/>
                        <h4>Payment Methods</h4>
                        <hr/>
                        <p>We provide a variety of payment methods that include Paypal, Visa/Mastercard/American Express and lots of others.</p>
                        </div>
                    </div>
                </div>
            </section>
        <section className='bg-white text-center px-4 m-0 '>
            <br/>
           <div className='h1 text-center pb-3'>Our Packages</div>
           <div className='row text-center  '>
               <div className='col-sm-6 p-md-3  pb-3 ' >
                   <img className='pkgimg w-75' src={pkg1} alt='pkages'></img>
               </div>
               <div className='col-sm-6 p-md-3 mb-3 ' >
               <img className='pkgimg w-75' src={pkg2} alt='pkages'></img>

               </div>
           </div>
           <div className='row text-center '>
               <div className='col-sm-6 p-md-3  pb-3 ' >
                   <img className='pkgimg w-75' src={pkg3} alt='pkages'></img>
               </div>
               <div className='col-sm-6 p-md-3 mb-3' >
               <img className='pkgimg w-75' src={pkg4} alt='pkages'></img>
               </div>
           </div>
          
        </section>   
        <div className='mquery w-100 px-4 ' >
               <hr/>
           <h2 className='text-center pt-3'><strong >Request a Call Back?</strong></h2>
           <div className='row ' id='mbtn'>
               <div className='col mcol w-50 my-md-5'>
                   <img className=' mbuild w-100 ms-md-5 ps-md-5 ' height='600px' src={wind} alt='build'></img>
               </div>
               <div className='col m-lg-5 pt-md-5 m-2 p-2 '>
                   <div className='mcard card  '>
                        <div className='form container p-4 text-center '>
                            <h3><strong>Make an Appointment</strong></h3>
                            <br/>
                                <form className='form-group text-center' autoComplete='off' onSubmit={sendEmail}>
                                    <input  type='text' className='form-control' placeholder='Name' required name='name'></input>
                                    <br/>
                                    <input type='tel' className='form-control' placeholder='Number' name='phone' required></input>
                                    <br/>
                                    <input type='email' className='form-control ' placeholder='Email' name='email' required></input>
                                    <br/>
                                    <textarea type='text' id='msg' className='form-control msg' placeholder='Message' name='message' required></textarea>
                                    <br/>
                                    <button className='btn btn-primary  px-5'>SUBMIT</button>
                                </form>
                        </div>
                   </div>
               </div>
           </div>
           </div>
        </div>
        </div>
    )
}

export default Home
