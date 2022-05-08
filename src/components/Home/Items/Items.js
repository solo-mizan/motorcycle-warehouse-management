import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Item from '../../Item/Item';
import './Items.css';

const Items = () => {

    const [products, setProducts] = useProducts();

    return (
        <section>
            <div className='items mb-4 mt-2'>
                {
                    products.slice(0, 6).map(product => <Item
                        product={product}
                        key={product._id}
                    ></Item>)
                }
            </div>
            <Button variant='warning' className='m-4 d-block' as={Link} to='/manageinventories'>Click here to Manage Inventories</Button>
        </section>
    );
};

export default Items;