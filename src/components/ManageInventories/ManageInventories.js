import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProducts from '../hooks/useProducts';

const ManageInventories = () => {
    const navigate = useNavigate();
    const [products, setProducuts] = useProducts();

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
                        setProducuts(remaining);
                    }
                })
        }
    }

    return (
        <section>
            <h1 className='text-center text-success mt-2 mb-4'>Manage Your Inventory</h1>

            <Button as={Link} to='/additem' className='btn btn-success w-50 mx-auto d-block mb-3'>Click here to Add New Item</Button>

            <div className='items m-4 p-2'>
                {
                    products.map(product => <div key={product._id} className='text-center mx-auto'>
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
                                <Button onClick={() => navigateToItemDetail(product._id)} className='mx-3' variant="success">Update Stock</Button>
                                <Button onClick={() => handleDelete(product._id)} variant="danger">Delete</Button>
                            </Card.Body>
                        </Card>
                    </div>)
                }
            </div>
        </section>
    );
};

export default ManageInventories;