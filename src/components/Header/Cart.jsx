import classNames from 'classnames';
import React, { useState } from 'react'
import { Store } from '../../store/store';

function Cart(props) {
    const { cart  } = Store( store => store );
    const { items } = cart;



    const { isCartOpen } = props;


    return (
        <div className={classNames(`bg-white rounded-[10px]  left-2 right-2 absolute shadow-[0_20px_50px_-20px_rgba(29,32,38,0.5031)] z-20 
        transition-all duration-300 ` , {
            'mt-0 opacity-0 invisible ': !isCartOpen , 
            'mt-4 opacity-100 visible' : isCartOpen

        })} style={{ top: '' }}>
            <div className='p-6 border-b-silver/30 border-b-[1px]'>
                <h3 className='text-very-dark-gray font-bold'>Cart</h3>
            </div>
            <div className='p-6 pb-8' >
                {
                    items.map((item, index) => (
                        <div className='flex items-center' key={index}>
                            <div className='w-[50px] aspect-square rounded-[4px] overflow-hidden '>
                                <img src={item.image} alt={item.name} className='object-cover' />
                            </div>

                            <div className='flex-1 pr-4 pl-4 text-slategray'>
                                <p>{item.name}</p>
                                <p>${item.price.toFixed(2)} x {item.count} <span className='font-bold text-very-dark-gray'>${item.totalPrice.toFixed(2)}</span></p>
                            </div>
                            <span>
                                <img src="/public/icon-delete.svg" alt="" className='w-[14px] ' />
                            </span>
                        </div>
                    ))
                }

                <button className='w-full text-center font-bold text-white  bg-dark-orange rounded-[10px] py-[18px] px-6 mt-6 '>Checkout</button>
            </div>
        </div>
    )
}

export default Cart
