import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart]= useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[])
    const handleAddToCart =(selectedMeal)=>{
        const newCart = [...cart,selectedMeal];
        setCart(newCart);
    }
    return (
        <div className='grid grid-cols-4 mt-16'>
            <div className='col-span-3 grid grid-cols-2 gap-4 ml-20 ' >
               {
                   meals.map(meal=> <Meal key={meal.idMeal} meal={meal} handleAddToCart={handleAddToCart} />)
               }

            </div>
            {/* Order segment */}
            <div className='bg-green-200 px-5 py-4 relative'>
               <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Meals;