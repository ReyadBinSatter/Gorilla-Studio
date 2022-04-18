import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

import banner1 from '../../../img/banner/b1.jpg'
import banner2 from '../../../img/banner/b2.jpg'
import banner3 from '../../../img/banner/b3.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="b-img d-block w-100"
                        src= {banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>Atlas Moth</h2>
                        <p>In the forests of Asia</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="b-img d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2>Lion</h2>
                        <p>In the Central African Rain Forest Zone</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="b-img d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2>Red Pandas</h2>
                        <p>
                        In Central China
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;