import React from 'react';

import './projects.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };

    return (
    <div className="projectsContainer">
        <div className="projetcs">
        <h1 className="bigThanksText">
            <span className="bold">BIG</span> 
            thanks to our Supporters!</h1>
        <div>
            <Slider {...settings}>
                {/* <a target="_blank" href="https://www.greenenergystandards.ca/">
                <div className="sponsorImage">
                    <img src="/img/egs.png"/>
                </div>
                </a> */}
                
            </Slider>
        </div>
        </div>
    </div>
    );
}

export default Projects;