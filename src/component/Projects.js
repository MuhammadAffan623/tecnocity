import{ React} from 'react'
import img1 from '../images/prod/prod01.jpg'
import img2 from '../images/prod/prod02.jpg'
import img3 from '../images/prod/prod03.jpg'
import img4 from '../images/prod/prod04.jpg'
import img5 from '../images/prod/prod05.jpg'
import img6 from '../images/prod/prod06.jpg'
import ReactPlayer from "react-player";


function Projects() {
   
    return (
        <div className='container ' id='projects' >
        <div className=' p-5  display-4 fw-bold text-center'> Our Recent Work</div>
        <div className='row p-md-5 p-3 text-center'>
            <div className="col-md-4 p-0 col-6 ">
                <img className='w-100 ' src={img1} alt='service_image' height='200px' ></img>
            </div>
            <div className="col-md-4 p-0 col-6 ">
                <img className='w-100 ' src={img2} alt='service_image' height='200px' ></img>
            </div>
            <div className="col-md-4 p-0 col-6 ">
                <img className='w-100 ' src={img3} alt='service_image' height='200px' ></img>

            </div>
            <div className="col-md-4 p-0 col-6 ">
                <img className='w-100 ' src={img4} alt='service_image' height='200px' ></img>
            </div>
            <div className="col-md-4 p-0 col-6 ">
                <img className='w-100 ' src={img5} alt='service_image' height='200px' ></img>
            </div>
            <div className="col-md-4 p-0 col-6 ">
                <img className='w-100 ' src={img6} alt='service_image' height='200px' ></img>

            </div>

        </div>
        <div className='h1 p-2 p-md-5 text-center'> Client Review</div>
            
        <div className='row p-2 p-md-5 mb-5'>
            <div className='col-12 text-center'>

            <ReactPlayer className='portvideo w-100'  controls
            url="https://www.youtube.com/watch?v=ot5WMZRsWVI"
            // volume={2}
            muted={true}
            loop={true}
            playing={true}

            />
            </div>
        </div>







        </div>
    )
}

export default Projects
