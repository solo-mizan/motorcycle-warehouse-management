import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    // https://sleepy-earth-16299.herokuapp.com

    useEffect(() => {
        const url = `https://sleepy-earth-16299.herokuapp.com/items`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    }, []);

    return [products, setProducts];

}

export default useProducts;