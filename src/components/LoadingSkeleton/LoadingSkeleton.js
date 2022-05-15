import React from 'react';
import ContentLoader, { Facebook } from 'react-content-loader'

const LoadingSkeleton = () => {
    return (
        <section className='w-75 mx-auto justify-content-center text-center align-items-center'>
            <Facebook foregroundColor='#3f3f3f' backgroundColor='#999898'></Facebook>
            <Facebook foregroundColor='#3f3f3f' backgroundColor='#999898'></Facebook>
            <ContentLoader foregroundColor='#3f3f3f' backgroundColor='#999898'></ContentLoader>
        </section>
    );
};

export default LoadingSkeleton;