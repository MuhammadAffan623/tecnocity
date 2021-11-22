import React,{useState} from 'react'
import '../Styles/Services.css'
const Services = () => {
   
    const[para,setPara]=useState(false)
    const[para1,setPara1]=useState(false)
    const[para2,setPara2]=useState(false)
    const[bton2,setBton2]=useState(false)
    const[bton,setBton]=useState(false)
    const[bton1,setBton1]=useState(false)
    const showpara =()=>{
        setPara(!para)
        setBton(!bton)
    }
    const showpara1 =()=>{
        setPara1(!para1)
        setBton1(!bton1)
    }
    const showpara2 =()=>{
        setPara2(!para2)
        setBton2(!bton2)
    }
   
    return (
        <div id='services'>
        <div className='container-fluid  p-md-5  m-0'>
            <div className='row mx-4 mx-lg-5 px-md-2'>
                <div className='col1 col-md-6 p-0 '>
                    <div className='card1 card bg-white p-4 m-2 m-sm-3 p-sm-5 text-start' >
                        <h2>ON GRID</h2>
                        <p className={para ? 'd-none':'d-block pt-0 mt-0'}>On-Grid or Grid-Tie solar systems are by far the most common and widely used by residential, commercial or industrial sector. . . . . .</p><p className={para ? 'd-block pt-0 mt-0':'d-none'}> On-Grid or Grid-Tie solar systems are by far the most common and widely used by residential, commercial or industrial sector. These systems do not need batteries and use common solar inverters and are connected to the normal electricity grid. Any excess solar power that you generate is exported to the electricity grid and the units you export sets off with the off-peak units. You usually get paid a feed-in-tariff (fit) or credits for the energy you export. As we are working in these systems, we have successfully installed different systems around the country which are beneficial for the consumers and help them to reduce their electricity bills to zero.</p>
                        <div> 
                             <button className={bton ? 'd-none':'d-block btn-lg btn-primary rounded-pill px-4 border-0 '} onClick={()=>{showpara()}}>
                             Read more
                             </button>    
                             <button className={bton ? 'd-block btn-lg btn-primary rounded-pill px-4 border-0 ':'d-none'} onClick={()=>{showpara()}}>
                             Read less
                             </button> 
                        </div>
                    </div>  
                </div>
                <div className='col1 col-md-6 p-0'>
                <div className='card1 card bg-white m-2 p-4 m-sm-3 p-sm-5 text-start' >
                        <h2>HYBRID</h2>
                        <p  className={para1 ? 'd-none':'d-block pt-0 mt-0'} >Modern hybrid systems combine solar, grid and battery storage in one and are now available in many different forms and configurations. . . . .</p><p className={para1 ? 'd-block pt-0 mt-0':'d-none'}>Modern hybrid systems combine solar, grid and battery storage in one and are now available in many different forms and configurations. Due to the increasing cost of battery storage, systems that are already connected to the electricity grid can start taking advantage of battery storage as well. This means being able to store solar energy that is generated during the day and using it at night. When the stored energy is depleted, the grid is there as a backup, allowing consumers to have the best of both worlds. Hybrid systems are also able to charge the batteries using cheap electricity with the minimum connection from the normal grid so that the batteries can be used again in the night as a backup if the previously stored backup is completely utilised.</p>
                        <div>
                        <button className={bton1 ? 'd-block btn-lg btn-primary rounded-pill px-4 border-0 ':'d-none'} onClick={()=>{showpara1()}}>
                                 Read less
                             </button>  
                             <button className={bton1 ? 'd-none':'d-block btn-lg btn-primary rounded-pill px-4 border-0 '} onClick={()=>{showpara1()}}>
                             Read more
                             </button>
                        </div>
                    </div>
                    </div>
            </div>
            <div className='row mx-4 mx-lg-5 px-md-2 justify-content-center'>
                <div className='col1 col-md-6 p-0 '>
                    <div className='card1 card bg-white p-4 m-2 m-sm-3 p-sm-5 text-start' >
                        <h2>OFF GRID</h2>
                        <p className={para2 ? 'd-none':'d-block pt-0 mt-0'}>Offgrid systems are similar to hybrid systems but dependent on batteries only. an ongrid system is that the opposite. In an off-grid system there is no normal electricity grid. . . . . . .</p><p className={para2 ? 'd-block pt-0 mt-0':'d-none'}> Offgrid systems are similar to hybrid systems but dependent on batteries only. an ongrid system is that the opposite. In an off-grid system there is no normal electricity grid. Once solar power is used by the appliances in your property, any excess power will be sent to your battery bank. Once the battery is full it will stop receiving power from the solar system. When your solar system is not working (night time or cloudy days), your appliances will draw power from the batteries.Uninterrupted electricity provided to loadshedding areas.</p>
                        <div>
                         <button className={bton2 ? 'd-block btn-lg btn-primary rounded-pill px-4 border-0 ':'d-none'} onClick={()=>{showpara2()}}>
                             Read less
                             </button>  
                             <button className={bton2 ? 'd-none':'d-block btn-lg btn-primary rounded-pill px-4 border-0 '} onClick={()=>{showpara2()}}>
                             Read more
                             </button>    
                        </div>
                    </div>  
                </div>
            </div>
        </div> 
        </div>
    )
}

export default Services