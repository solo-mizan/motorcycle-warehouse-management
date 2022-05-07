import React from 'react';
import Charts from '../Charts/Charts';
import Banner from './Banner/Banner';
import './Home.css';
import Items from './Items/Items';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Charts></Charts>
        </div>
    );
};

export default Home;