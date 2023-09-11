import React from 'react'
import "slick-carousel/slick/slick.css" 
import Slider from "react-slick"
import PrevArrow from '../components/PrevArrow'
import NextArrow from '../components/NextArrow'
import Products from '../components/Products'
import '../App.css'

const SlickSlider = () => {
        const settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          prevArrow:<PrevArrow/>,
          nextArrow:<NextArrow/>,
          centerMode:true,
            // fade:true,
        }
    return (
         <>   
         <div>
            <Slider {...settings}>
              <div>
                <Products />
              </div>
              <div>
              <Products />
              </div>
              <div>
              <Products />
              </div>
              <div>
              <Products />
              </div>
              <div>
              <Products />
              </div>
              <div>
              <Products />
              </div>
            </Slider>
          </div>
          </>
        )
        
      }

export default SlickSlider