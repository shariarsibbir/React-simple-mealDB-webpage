import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Shop.css';

const Shop = () => {
    const [foods, setFoods] = useState([]);
    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setFoods(data.meals))
    }, []);

    const [cart, setCart] = useState([]);
    const handleCartBtn = product => {
        const newCart = [...cart, product];
        setCart(newCart); 
    }


    return (
        <div className='shop'>
            <div className='meal-container'>
                {
                    foods.map(food => <Meal 
                        food = {food}
                        handleCartBtn={() => handleCartBtn(food)}
                        key = {food.idMeal}/>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;