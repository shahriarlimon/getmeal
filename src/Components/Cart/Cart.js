import React from 'react';

const Cart = ({cart}) => {

    return (
        <div className='sticky top-0 mt-5'>
            <h1 className='text-2xl font-semibold'>Ordered Food Lists</h1>
            <div>
                {
                    cart.map(meal=><li key={meal.idMeal}>{meal.strMeal}</li>)
                }
            </div>
        </div>
    );
};

export default Cart;