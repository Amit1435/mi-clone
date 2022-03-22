import React from 'react'
import  Carousel  from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.min.css";


const Slider = ({start}) => {
    return (
        <Carousel fade>
            {
                start.map((item )=>(
                <Carousel.Item>
                    <img style={{height : "auto", width :"100%"}}
                    className='d-block w-95'
                    src={item}
                    alt="First slide" />
                </Carousel.Item>
                ))
            }   
        </Carousel>
    )
}

export default Slider
