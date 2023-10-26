import * as React from 'react';
import { useParams } from 'react-router-dom';

export const Products = () => {
    const { id } = useParams();
    return (
        <>
            <h1>Hello Products</h1>
            <h5>Product ID = {id}</h5>
        </>
    );
};

export default Products;
