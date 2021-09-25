import React from 'react';
import './Meal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Meal = (props) => {
    const {strMealThumb, strMeal, strCategory, strArea, strInstructions} = props.food;
    return (
        <div className="meal">
            <img src={strMealThumb} alt="" />
            <div>
                <h3 className='title'>{strMeal}</h3>
                <p>Category: {strCategory}</p>
                <p>Type: {strArea}</p>
                <p>Prepare: {strInstructions.slice(0, 200)}</p>
                <button 
                onClick={props.handleCartBtn}
                className="regular-btn">
                <FontAwesomeIcon icon={faShoppingCart } /> Purchase</button>
            </div>
        </div>
    );
};

export default Meal;