import React from 'react';
import CartDetail from '../Cart Details/CartDetail';

const Cart = (props) => {
    const {cart} = props;
    return (
        <div>
            <h3>Order History</h3>
            <p>Order Item :{cart.length}</p>
            {
                cart.map(product => <CartDetail 
                    key = {product.idMeal}
                    product={product}/>)
            }
        </div>
    );
};

export default Cart;