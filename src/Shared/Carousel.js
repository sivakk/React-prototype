import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";

export default () => (
    <Carousel showArrows infiniteLoop stopOnHover autoPlay showThumbs={false}>
        <div>
            <img src="http://lorempixel.com/output/nature-q-c-640-411-3.jpg" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src="http://lorempixel.com/output/nature-q-c-1165-421-1.jpg" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src="http://lorempixel.com/output/nature-q-c-1267-352-2.jpg" />
            <p className="legend">Legend 3</p>
        </div>




    </Carousel>);

