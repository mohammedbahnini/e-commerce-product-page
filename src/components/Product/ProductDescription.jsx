import React, { useState } from 'react'
import { Store } from '../../store/store';

function ProductDescription(props) {

    const { addItemToCart } = Store(store => store);

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
        <div className='pt-6 lg:pt-[px] flex flex-col '>
            <span className='text-dark-orange uppercase font-bold text-xs leading-none tracking-[1.85px] lg:text-base lg:tracing-[2px] '>
                {brand}
            </span>
            <h1 className='capitalize font-bold text-[28px] leading-8 mt-4 text-very-dark-gray lg:mt-6 lg:text-[44px] lg:leading-[48px] '>{name}</h1>
            <p className='text-[15px] leading-6 text-slategray mt-4 lg:mt-8 lg:text-base lg:text-leading-[26px] '>{fullDescription}</p>

            <div className='flex mt-6 items-center lg:mt-6 lg:block '>
                <div className='flex items-center lg:mb-1 '>
                    <h3 className='mr-4 text-very-dark-gray text-[28px] leading-normal font-bold lg:text-[28px] lg:mr-6  '>${price.toFixed(2)}</h3>
                    <span className='inline-block bg-linen text-dark-orange rounded-[6px] py-1 px-[10px] font-bold ' >{promo}%</span>
                </div>
                <span className='inline-block ml-auto text-silver line-through font-bold'>${oldPrice.toFixed(2)}</span>
            </div>


            <div className='flex flex-col items-stretch gap-y-4 mt-6 lg:mt-8 lg:flex-row lg:gap-x-4  '>

                <div className='flex justify-between items-center  px-6 bg-ghost-white rounded-[10px]  lg:min-w-[157px]  '>
                    <span className='cursor-pointer' onClick={handleDecrease}>
                        <img src="/icon-minus.svg" alt="" />
                    </span>
                    <span className='font-bold '>{count}</span>

                    <span className='cursor-pointer' onClick={handleIncrese}>
                        <img src="/icon-plus.svg" alt="" />
                    </span>
                </div>

                <button
                    className='flex items-center justify-center bg-dark-orange text-white lg:text-base lg:leading-none py-[19px] px-6 rounded-[10px] gap-x-4 shadow-[0_20px_50px_-20px] shadow-dark-orange lg:min-w-[272px]  '
                    onClick={handleAddItem}
                >
                    <img src="/icon-cart.svg" alt="" className='brightness-0 invert w-[18px] ' /> 
                    <span className='font-bold block'>Add to cart</span>
                </button>

            </div>
        </div>
    )
}

export default ProductDescription
