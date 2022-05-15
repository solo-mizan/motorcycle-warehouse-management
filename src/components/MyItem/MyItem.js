import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useProducts from '../hooks/useProducts';
import LoadingSkeleton from '../LoadingSkeleton/LoadingSkeleton';
import './MyItem.css';

const MyItem = () => {
    const [user, loading] = useAuthState(auth);
    const [products, setProducts] = useProducts();
    const navigate = useNavigate();
    const uid = user?.uid;

    if (loading) {
        return <LoadingSkeleton></LoadingSkeleton>
    }

    const navigateToItemDetail = (id) => {
        navigate(`/item/${id}`);
    }

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure to delete this Item?');
        if (confirm) {
            const url = `https://sleepy-earth-16299.herokuapp.com/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data) {
                        toast('Item deleted successfully.')
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }
                })
        }
    }


    const filteredItem = products.filter(product => product.uid === uid);

    return (
        <div className='items m-4 p-2'>
            {
                filteredItem.map(product => <div key={product._id} className='text-center mx-auto'>
                    <Card style={{ width: '18rem', backgroundColor: '#a2edee' }}>
                        <Card.Img className='img-fluid' variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Title className='text-black'>{product.name}</Card.Title>
                            <h6 className='text-dark'>
                                Price: {product.price} $
                            </h6>
                            <Card.Text>
                                Description: {product.description}
                            </Card.Text>
                            <h6 className='text-dark'>
                                Quantity: {product.quantity} pcs
                            </h6>
                            <Button onClick={() => navigateToItemDetail(product._id)} variant="primary">Update</Button>
                            <Button className='mx-2' variant='danger' onClick={() => handleDelete(product._id)}>Delete Item</Button>
                        </Card.Body>
                    </Card>
                </div>)
            }
        </div>
    );
};

export default MyItem;