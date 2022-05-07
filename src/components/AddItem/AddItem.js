import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddItem = () => {

    const handleAddItem = (event) => {

    }

    return (
        <div className='w-50 mx-auto text-center'>
            <h1 className='m-2'>Add item here</h1>
            <Form>
                <Form.Group className="mb-3" controlId="productName">
                    <Form.Control autoComplete='off' type="text" placeholder="Enter Product Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="productImg">
                    <Form.Control autoComplete='off' type="text" placeholder="Product ImageURL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="productPrice">
                    <Form.Control autoComplete='off' type="text" placeholder="Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="productQuantity">
                    <Form.Control autoComplete='off' type="text" placeholder="Quantity" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Control autoComplete='off' type="text" placeholder="Description" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add to Inventory
                </Button>
            </Form>
        </div>
    );
};

export default AddItem;