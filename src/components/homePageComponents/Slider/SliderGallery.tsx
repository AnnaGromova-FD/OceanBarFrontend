import React from 'react'
import { Carousel, Row, Col } from 'react-bootstrap'
import data from '../../../pages/Menu/DB/foodData'
import { useState } from 'react';
import SliderGallertItem from './SliderGalleryItem'
import {NavLink} from 'react-router-dom'
import {PATH} from '../../../pages/Menu/MenuRoutes'

function ControlledCarousel() {
  const [index, setIndex] = useState(1);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };


  return (
    <Carousel activeIndex={index}
      onSelect={handleSelect}>

      <Carousel.Item>
        <NavLink to={PATH.BREAKFAST_MENU}>
          <SliderGallertItem imgData={data[0]}/>
         </NavLink>
      </Carousel.Item>
 
      <Carousel.Item>
        <NavLink to={PATH.BAR_MENU}>
           <SliderGallertItem imgData={data[1]}/>
        </NavLink>
      </Carousel.Item>

      <Carousel.Item>
        <NavLink to={PATH.CATCHWEEK_MENU}>
          <SliderGallertItem imgData={data[2]}/>
        </NavLink>
      </Carousel.Item>

    </Carousel>
  );
}

export default ControlledCarousel;
