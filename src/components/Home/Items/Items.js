import React from 'react';
import useProducts from '../../hooks/useProducts';
import Item from '../../Item/Item';
import './Items.css';

const Items = () => {

    const [products, setProducts] = useProducts();

    return (
        <div className='items mb-4 mt-2'>
           {
               products.slice(0, 6).map(product=> <Item 
                product={product}
                key={product.index}
                ></Item>)
           } 
        </div>
    );
};

export default Items;