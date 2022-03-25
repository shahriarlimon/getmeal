import React from 'react';
import {BiSearch} from 'react-icons/bi';

const Header = () => {
    return (
        <div>
           <nav className='bg-orange-500 h-[80px] flex items-center justify-between'>
           <h3 className='text-2xl font-serif text-white font-semibold ml-16'>Get Your Meal</h3>
            <div className='text-white space-x-3 mr-16 text-lg'>
                <a className='hover:text-gray-200' href="/home">Home</a>
                <a className='hover:text-gray-200' href="/Contact">Contact</a>
                <a className='hover:text-gray-200' href="/about">About us</a>
            </div>
           </nav>
           <div className='mt-10 flex items-center justify-center'>
               <input className='border px-3 py-2 rounded w-1/4  focus:outline-0 mr-3' type="text" value="" /> 
               <button className='bg-orange-500 hover:bg-orange-600 px-3 py-2 text-white rounded font-bold flex items-center justify-center'>Search
                <BiSearch className='ml-2'/>
               </button>
           </div>
        </div>
    );
};

export default Header;