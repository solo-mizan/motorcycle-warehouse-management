import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // const url = `https://sheltered-river-57663.herokuapp.com/items`;
        const url = `http://localhost:5000/items`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    }, []);

    return [products, setProducts];

}

export default useProducts;