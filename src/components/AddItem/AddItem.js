import React from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItem = () => {
    const { register, handleSubmit, clearErrors, reset } = useForm();
    const [user] = useAuthState(auth);
    console.log(user.uid);

    const onSubmit = data => {
        const uid = user.uid;
        const newData = { ...data, uid }
        console.log(newData);
        const url = `https://sleepy-earth-16299.herokuapp.com/items`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result) {
                    toast('Item added successfully!')
                    reset();
                }
            })
    };


    return (
        <div className='w-50 mx-auto text-center m-4'>
            <h1 className='m-2 text-success'>Add a New Item Here</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("image")} />
                <input className='mb-2' placeholder='Supplier' type="text" {...register("supplier")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='my-4 btn btn-success' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;