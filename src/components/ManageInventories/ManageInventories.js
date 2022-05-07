import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../hooks/useProducts';

const ManageInventories = () => {

    const [products] = useProducts();

    return (
        <section>
            <h1 className='text-center text-success m-4'>Manage Your Inventory</h1>

            <Button as={Link} to='/additem' className='btn btn-success mx-auto d-block mb-3'>Click here to Add New Item</Button>

            <div className='items'>
                {
                    products.map(product => <div className='text-center mx-auto'>
                        <Card style={{ width: '18rem', height: '30rem', backgroundColor: 'rgb(225, 225, 225)' }}>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <h6>
                                    Price: {product.price} $
                                </h6>
                                <Card.Text>
                                    Description: {product.description}
                                </Card.Text>
                                <h6>
                                    Quantity: {product.quantity} pcs
                                </h6>
                                <Button className='mx-3' variant="success">Update Stock</Button>
                                <Button variant="danger">Delete</Button>
                            </Card.Body>
                        </Card>
                    </div>)
                }
            </div>
        </section>
    );
};

export default ManageInventories;