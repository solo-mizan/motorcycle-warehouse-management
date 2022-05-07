import React from 'react';
import './Blogs.module.css';

const Blogs = () => {
    return (
        <div className='text-center'>
            <h2>Difference between javascript and nodejs</h2>
            <p>JavaScript is a language that runs inside web browsers as part of documents loaded by the browser. It gives behaviour to your pages (HTML gives semantic structure, CSS gives form or look and feel). However nothing ought to restrict JavaScript to run solely inside the browser. Now being an interpreted language, it needs an interpreter to run. V8 is the Google Chrome JS engine and 'node' is a front-end to it that can be used to run JavaScript scripts outside the browser. Node.js or just Node usually refers to a collection of objects and methods available to your JavaScript code when run in V8 or through the node interpreter. It is a JavaScript libray cum runtime.</p>
            <br />
            <h2>When should you use nodejs and when should you use mongodb?</h2>
            <p>MongoDB is a nonSQL database. In order to use database we need to make a backend server. And to make server we can use NodeJS. NodeJS can run the javascript outside the browser. We can use ExpressJS as a NodeJS framework. </p>
            <br />
            <h2>Differences between sql and nosql databases</h2>
            <p>SQL is vertically scalable and NoSQL is horizontally scalable. SQL databases are best suited for complex queries. On the other hand, NoSQL  databases are not so good for complex queries. NoSQL database have dynamic schema.</p>
            <br />
        </div>
    );
};

export default Blogs;