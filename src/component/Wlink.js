import React from 'react'
import wicon from '../images/whatsap1.png'
import '../Styles/Wlink.css'
function Wlink() {
    return (
        <>
          <div className='wlink  '> 
          <a className=' text-white' rel='noopener noreferrer' href='https://wa.link/z1d6l3' target='_blank' > 
          <img className='whatsapp  ' src={wicon}  height='40px' width='40px' alt="whatsapp" ></img>
          </a>
          </div>  
        </>
    )
}

export default Wlink
