import React from 'react';
import './Order.css';

const Order = ({cart}) => {
    let price = 0;
    let quantity = 0;
    for (let food of cart){
        food.quantity = food.quantity || 1;
        price = price + food.price * food.quantity;
        quantity = quantity + food.quantity;
    }
    let delivery = 0;
    if(quantity){
        delivery = 20;
        if(quantity > 2){
            delivery = delivery + 10;
        }
    }
    
    const total = price + delivery;

    return (

        <div className="order-info">
            <h2>Order List</h2>
            <h3>Selected Item: {quantity}</h3>
            {
                cart.map(food => food.idMeal?<p key={food.idMeal}><strong>Name:</strong>  {food.strMeal}<strong>Price:</strong> ${food.price} x {food.quantity}</p> : <p key={food.idMeal}><strong>Name:</strong>  {food.strMeal}<strong>Price:</strong> ${food.price} x {food.quantity}</p>)
            }
            {/* <p><strong>Food Name:</strong> {name} <strong>Qty:</strong> {quantity}</p> */}
            <p><strong>Total Price:</strong> $ {price}</p>
            <p><strong>Delivery charge:</strong> $ {delivery}</p>
            <p><strong>Grand Total:</strong> $ {total}</p>
        </div>

    );
};

export default Order;