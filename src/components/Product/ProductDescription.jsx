import React, { useState } from 'react'
import { Store } from '../../store/store';

function ProductDescription(props) {

    const { addItemToCart } = Store(store => store);
    console.log(addItemToCart);

    const {
        brand,
        name,
        price,
        promo,
        oldPrice,
        fullDescription
    } = props.product;

    const [count, setCount] = useState(1);



    const handleIncrese = () => {
        setCount(count => count + 1);
    }
    const handleDecrease = () => {
        setCount(prevCount => prevCount - 1 < 1 ? 1 : prevCount - 1);
    }

    const handleAddItem = () => {
        console.log(addItemToCart);
        addItemToCart(count);
    }
    return (
        <div className='px-6 pt-6'>
            <span className='text-dark-orange uppercase font-bold text-xs leading-none tracking-[1.85px] '>
                {brand}
            </span>
            <h1 className='capitalize font-bold text-[28px] leading-8 mt-4 text-very-dark-gray'>{name}</h1>
            <p className='text-[15px] leading-6 text-slategray mt-4 '>{fullDescription}</p>

            <div className='flex mt-6 items-center'>
                <div className='flex items-center'>
                    <h3 className='mr-4 text-very-dark-gray text-[28px] leading-normal font-bold  '>$ {price.toFixed(2)}</h3>
                    <span className='inline-block bg-linen text-dark-orange rounded-[6px] py-1 px-[10px] font-bold ' >{promo}%</span>
                </div>
                <span className='inline-block ml-auto text-silver line-through font-bold'>${oldPrice.toFixed(2)}</span>
            </div>


            <div className='flex flex-col gap-y-4'>

                <div className='mt-6 flex justify-between items-center py-[22px] px-6 bg-ghost-white rounded-[10px] '>
                    <span className='cursor-pointer' onClick={handleDecrease}>
                        <img src="/public/icon-minus.svg" alt="" />
                    </span>
                    <span className='font-bold '>{count}</span>

                    <span className='cursor-pointer' onClick={handleIncrese}>
                        <img src="/public/icon-plus.svg" alt="" />
                    </span>
                </div>

                <button
                    className='flex items-center justify-center bg-dark-orange text-white py-[18px] px-6 rounded-[10px] gap-x-4 shadow-[0_20px_50px_-20px] shadow-dark-orange '
                    onClick={handleAddItem}
                >
                    <img src="/public/icon-cart.svg" alt="" className='brightness-0 invert' /> <span className='font-bold'>Add to cart</span>
                </button>

            </div>
        </div>
    )
}

export default ProductDescription
