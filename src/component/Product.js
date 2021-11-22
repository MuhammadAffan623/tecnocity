import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import hundai from '../images/Hyundai.png'
import trina from '../images/Trina.png'
import sma from '../images/smaa.png'
import huawei from '../images/huaweii.png'
import hudi from '../images/Hyundai-pic1.jpg'
import trina2 from '../images/Trina-2.jpg'
import sma2 from '../images/SMA-2.jpg'
import huawei2 from '../images/Huawei-3.jpg'
import '../Styles/Product.css'


function Product() {
 
    return (
        <div id='product'>
         {/* bg-secondary bg-gradient */}
            <div className='container text-left w-md-70 py-md-5  p-5' >
               <div className='display-4 fw-bold pb-5 text-center '> OUR PRODUCT</div>
                <div className='text-left'>After a thorough study/research by our professional engineers, we have chosen our OEMs and then entered into formal agreements with them on a Long term relationship basis. Never a pick and chose on the
                 basis of prices only (cheaper the better type approach) which most of the companies unfortunately have adopted to, in Pakistan.<br/><br/>
                For instance on PV modules we are committed with Hyundai and Trina Sola (through contract agreements) and similarly for inverters SMA/Germany and Huawei.
                </div>
            </div>
            {/* first_card */}
            <div className='card procard p-md-5 '>
            <div className='row p-lg-5  '>
                <div className='col-lg-6 p-4' >
                    <div className='pt-md-5'>
                    <img src={hundai} alt='hundai'className='w-100' ></img>
                    <div className='pt-3'>Hyundai organized its solar business in 2007.<br/> Hyundai Solar is the largest and the longest<br/> standing PV cell and module manufacturer in <br/> South Korea</div>
                    <img src={hudi} alt='Hundaifeature' className='pt-md-5 w-100 pe-md-3'></img>
                    </div>
                </div>
                <div className='col-lg-6 text-left p-4' >
                    <div className='display-5 fw-bold text-center'>Key Features</div>
                    <div className='display-6 fw-600 text-danger text-center'>15 Year Product Warranty</div>
                    <div className='fw-bold'><li>M6 PERC Shingled :</li></div>
                    <div className='ps-4'> M6 PERC Shingled Technology provides ultra-high efficiency with better performance in low irradiation. Maximizes installation capacity in limited Space.</div>


                    <div className='fw-bold'><li>Anti-LID / PID:</li></div>
                    <div className='ps-4'> Both LID and PID are strictly eliminated in toensure higher actual yield during lifetime.</div>

                    <div className='fw-bold '><li>Mechanical Strength:</li></div>
                    <div className='ps-4'> Hyundai’s tempered glass and reinforced frame design can withstand rigorous weather conditions such as heavy snow and strong wind.</div>


                    <div className='fw-bold'><li>Corrosion Resistant:</li></div>
                    <div className='ps-4'> Hyundai’s panels are tested under harsh environmental conditions such as ammonia and salt-mist and proved to highly resistant.</div>

                    <div className='fw-bold'><li>Reliable Warranty:</li></div>
                    <div className='ps-4'> 15-year product warranty.<br/>
                    25-year performance warranty with 98.6% in the initial year and a linear warranty after the second year (0.55% annual degradation, 84.88% is guaranteed up to 25 years).</div>
                 </div>
            </div>
            </div>
            {/* second_card */}

            <div className='card procard p-md-5 mt-5 '>
            <div className='row p-lg-5  '>
                <div className='col-lg-6 p-4' >
                    <div className='pt-md-5'>
                    <img src={trina} alt='hundai'className='w-100' ></img>
                    <div className='pt-3'>Trina Solar is a leading Tier-1 manufacturer of high quality modules with a solid reputation as a solar PV pioneer. Growing to 15,000 employees worldwide since it was founded in 1997, Trina Solar is known globally as a manufacturing powerhouse.</div>
                    <img src={trina2} alt='Hundaifeature' className='pt-md-5 w-100 pe-md-3'></img>
                    </div>
                </div>
                <div className='col-lg-6 text-left p-4' >
                    <div className='display-5 fw-bold text-center'>Key Features</div>
                    <br/>
                    <br/>
                    <div className='fw-bold'>Higher power for large scale installations</div>
                    <div className='p-3'>
                        <li>High performance mono PERC cells</li>
                        <li>Reduced BOS costs with higher power bins and 1,500V system voltage</li>
                        <li>Consistently high bankability ratings by BNEF, banks and investors</li>
                    
                    </div>


                    <div className='fw-bold'>Half-cut cell design brings higher efficiency</div>
                    <div className='p-3'>
                        <li>Optimized power output under inter-row shading conditions</li>
                        <li>Integrated LRF for increased performance</li>
                        <li>Low thermal coefficients for higher energy yield at elevated operating temperatures</li>
                        <li>Reduced interconnection losses</li>
                    
                    </div>

                    <div className='fw-bold '>Highly reliable due to stringent quality control</div>
                    <div className='p-3'>
                        <li>Over 30 in-house tests (UV, TC, HF and many more</li>
                        <li>In-house testing goes well beyond certification requirements</li>
                        <li>PID resistant</li>
                        <li>2x 100% inline EL inspection</li>
                    
                    </div>
                 </div>
            </div>
            </div>
            {/* 3rd  */}
            <div className='card procard p-md-5 mt-5 '>
            <div className='row p-lg-5  '>
                <div className='col-lg-6 p-4' >
                    <div className='pt-md-5'>
                    <img src={sma} alt='hundai'className='w-100' height='140'></img>
                    <div className='pt-3'>SMA is the largest manufacturer of Solar Power inverters globally. It has its manufacturing facilities in USA and Germany.SMA Solar Technology AG has been among the most successful companies in the field of Solar Technology for 30 years.</div>
                    <img src={sma2} alt='Hundaifeature' className='pt-md-5 w-100 pe-md-3'></img>
                    </div>
                </div>
                <div className='col-lg-6 text-left p-4 ' >
                    <div className='display-5 fw-bold text-center pt-md-5 '>Key Features</div>
                    <br/>
                    <br/>
                    <div>
                        <li>Intelligent system managers</li>
                        <li>Excellent flexibility</li>
                        <li>Outdoor installation compatible</li>
                        <li>Parallel operation compatibility</li>
                        <li>Supports remote monitoring system</li>
                        <li>Reverse polarity protection</li>
                        <li>Ingress Protection (IP) 65 / 67</li>
                        <li>Built-in Surge Protection System</li>
                        <li>Fail Safe operation</li>
                        <li>5 years Warranty</li>
                        <li>25 years Extended Warranty</li>
                       
                    </div>
                </div>   
            </div>
            </div>
            {/* 4th */}
            <div className='card procard p-md-5 mt-5 mb-5 '>
            <div className='row p-lg-5  '>
                <div className='col-lg-6 p-4' >
                    <div className='pt-md-5'>
                    <img src={huawei} alt='hundai'className='w-100 ' ></img>
                    <div className='pt-3'>HUAWEI is a leading global ICT solutions provider serving over three billion people around the world. Huawei began embarking its footprint in renewable sector back in 2015 by manufacturing Solar inverters of high quality.</div>
                    <img src={huawei2} alt='Hundaifeature' className=' w-100 pe-md-3'></img>
                    </div>
                </div>
                <div className='col-lg-6 text-left p-4 ' >
                    <div className='display-5 fw-bold text-center pt-md-5 mt-md-5 '>Key Features</div>
                    <br/>
                    <br/>
                    <div>
                        <li>10 x MPPTs – Effectively Reducing String Mismatch for Higher Yields</li>
                        <li>Smart MPP tracking Algorithm</li>
                        <li>Huawei Fuse free design eliminating Fire Risk.</li>
                        <li>IP66 Fully sealed design</li>
                        <li>High Reliability</li>
                        <li>Easy Installation</li>
                        <li>Built In DC / AC surge arrestors</li>
                    </div>
                </div>   
            </div>
            </div>
        </div>
    )
}

export default Product
