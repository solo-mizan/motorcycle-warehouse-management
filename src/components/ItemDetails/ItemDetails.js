import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, InputGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProducts from '../hooks/useProducts';
import './ItemDetails.css';

const ItemDetails = () => {
    const [products, setProducuts] = useProducts();
    const [item, setItem] = useState({});
    const { id } = useParams();
    const quantityRef = useRef('');
    const q = item.quantity;

    useEffect(() => {
        const url = `https://sleepy-earth-16299.herokuapp.com/item/${id}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [id]);

    const handleDeliver = () => {
        const previousQuantity = parseFloat(item.quantity);
        const intQuantity = previousQuantity - 1;
        const quantity = { intQuantity };

        const url = `https://sleepy-earth-16299.herokuapp.com/item/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(quantity)
        })
            .then(res => res.json())
            .then(data => {
                if (data.quantity !== q) {
                    toast('Deliver 1 pcs successfully');
                    setItem(data);
                }
            })
    }

    const handleRestock = () => {
        const rawQuantity = quantityRef.current.value;
        const intQuantity = parseFloat(rawQuantity);
        const quantity = { intQuantity };
        console.log(q);
        const url = `https://sleepy-earth-16299.herokuapp.com/item/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(quantity)
        })
            .then(res => res.json())
            .then(data => {
                if (data.quantity !== q) {
                    toast('Stock updated successfully.')
                    setItem(data);
                }
            })
    }

    return (
        <div className='mx-auto text-center d-flex justify-content-center text-danger'>
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Price: {item.price} Dollar</ListGroupItem>
                    <ListGroupItem>Supplier: {item.supplier}</ListGroupItem>
                    <ListGroupItem>Quantity: {item.quantity} Pcs</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button className='' onClick={handleDeliver}>Deliver</Button>
                    <input ref={quantityRef} className='mx-2' type="number" name="" id="" placeholder='Update Quantity' />
                    <Button className='btn-success' onClick={handleRestock}>Restock</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ItemDetails;