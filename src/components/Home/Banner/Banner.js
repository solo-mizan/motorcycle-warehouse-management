import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useProducts from '../../hooks/useProducts';
import './Banner.module.css';

const Banner = () => {

    const [products, setProducts] = useProducts();

    return (
        <div>
            <Carousel showArrows={true}>

                {
                    products?.map(product => <div>
                        <img src={product?.image} alt="" />
                        <p className="legend">{product?.name}</p>
                    </div>)
                }

            </Carousel>
        </div>
    );
};

export default Banner;