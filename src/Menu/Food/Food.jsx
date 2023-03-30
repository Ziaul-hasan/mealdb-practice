import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import './Food.css'

const Food = (props) => {
    const { strMealThumb, strMeal, strCategory, strArea, price } = props.food;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='food'>
            <div className="img">
                <img src={strMealThumb} alt="" />
            </div>
            <div className="food-info">
                <h2>{strMeal}</h2>
                <h4>Category: {strCategory}</h4>
                <p><strong>Origin:</strong> {strArea}</p>
                <h3>Price: $ {price}</h3>
            </div>
            <button className='btn' onClick={() => handleAddToCart(props.food)}>Order Now <FontAwesomeIcon style={{marginLeft: '30px'}} icon={faShoppingBasket} /></button>
        </div>
    );
};

export default Food;