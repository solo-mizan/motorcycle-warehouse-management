import React, { useEffect, useState } from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Charts from '../Charts/Charts';
import useProducts from '../hooks/useProducts';
import LoadingSkeleton from '../LoadingSkeleton/LoadingSkeleton';
import Banner from './Banner/Banner';
import './Home.css';
import Items from './Items/Items';

const Home = () => {
    const [products, setProducts] = useProducts();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
            setProducts(products);
            setLoading(false);
        }, 2500);
        return () => clearTimeout(timing);
    }, []);

    return (
        <div>
            {
                loading && <LoadingSkeleton></LoadingSkeleton>
            }
            {
                !loading && <div>
                    <Banner></Banner>
                    <Items></Items>
                    <Charts></Charts>
                    <AboutUs></AboutUs>
                </div>
            }
        </div>
    );
};

export default Home;