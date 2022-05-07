import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Item = ({ product }) => {

    const { name, image, supplier, description, quantity, price } = product;

    return (
        <div className='text-center mx-auto'>
            <Card style={{ width: '18rem', height: '30rem', backgroundColor: 'rgb(225, 225, 225)' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h6>
                        Price: {price} $
                    </h6>
                    <Card.Text>
                        Description: {description}
                    </Card.Text>
                    <h6>
                        Quantity: {quantity} pcs
                    </h6>
                    <Button variant="primary">Update</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item;