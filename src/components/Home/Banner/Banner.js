import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel showArrows={true}>
                <div>
                    <img src="https://i.ibb.co/wBcM2C7/review-Tomato.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/wBcM2C7/review-Tomato.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/wBcM2C7/review-Tomato.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/wBcM2C7/review-Tomato.jpg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/wBcM2C7/review-Tomato.jpg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/wBcM2C7/review-Tomato.jpg" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;