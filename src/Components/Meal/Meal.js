import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Meal = ({meal,handleAddToCart}) => {
    const {strMealThumb,strMeal,strCategory,strArea} = meal;
    return (
        <div className='border px-2 py-1 w-[320px] h-[480px] relative shasow-lg'>
            <img className='w-[300px] h-[300px] rounded' src={strMealThumb} alt="" />
            <div className='my-2 py-3'>
            <p className='text-xl'>Name: {strMeal}</p>
            <p>catagory: {strCategory}</p>
            <p>Origin: {strArea}</p>
            </div>
            <button onClick={()=>handleAddToCart(meal)} className=' flex items-center justify-center px-3 py-2 bg-orange-500 hover:bg-orange-700 text-lg font-bold text-white rounded absolute bottom-0'>Order Now <AiOutlineShoppingCart className='ml-3'/> </button>
        </div>
    );
};

export default Meal;