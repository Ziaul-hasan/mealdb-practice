import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../utilities/fakedb';
import Food from './Food/Food';
import './Menu.css'
import Order from './Order/Order';

const Menu = () => {
    const [cart, setCart] = useState([])
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart()
        const savedCart = [];
        for (const id in storedCart) {
            const addedFood = foods.find(food => food.idMeal === id)
            if (addedFood) {
                const quantity = storedCart[id];
                addedFood.quantity = quantity;
                savedCart.push(addedFood);
            }
            console.log(addedFood);
        }
        setCart(savedCart)
    }, [foods])

    const handleAddToCart = (food) => {
        const newCart = [...cart, food];
        console.log(newCart)
        setCart(newCart);
        addToDb(food.idMeal)
    }

    return (
        <div className='menu-container'>
            <div className="food-container">
                {
                    foods.map(food => <Food food={food} key={food.idMeal} handleAddToCart={handleAddToCart}></Food>)
                }
            </div>
            <div className="order-container">
                <Order cart={cart}></Order>
            </div>
        </div>
    );
};

export default Menu;