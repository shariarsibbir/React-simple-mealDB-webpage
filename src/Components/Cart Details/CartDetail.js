import React from 'react';

const CartDetail = (props) => {
    const {product} = props;
    return (
        <div>
            <p>Name: {product.strMeal}</p>
        </div>
    );
};

export default CartDetail;