import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import './Item.css';

const Item = ({ product }) => {
    const navigate = useNavigate();
    const { name, image, supplier, description, quantity, price, _id } = product;

    const navigateToItemDetail = (id) => {
        navigate(`/item/${id}`);
    }

    return (
        <div className='text-center mx-auto'>
            <Card style={{ width: '18rem', backgroundColor: '#a2edee' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='text-dark'>{name}</Card.Title>
                    <h6 className='text-black'>
                        Price: {price} $
                    </h6>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        Supplier Name: {supplier}
                    </Card.Text>
                    <h6 className='text-dark'>
                        Quantity: {quantity} pcs
                    </h6>
                    <Button onClick={() => navigateToItemDetail(_id)} variant="primary">Update</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item;