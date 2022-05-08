import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs';
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
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;