import React from 'react'
import { Store } from '../../store/store';

function HeaderContent(props) {
    const { cart }= Store( store => store );
    const cartItemsLength = cart.items.reduce( (acc , item ) => acc + item.count , 0 );

    const { handleOpenMenu , handleOpenCart } = props;


    return (
        <div className="container py-6">
        <div className="flex">

            <button className="button border-none outline-none mr-4" onClick={handleOpenMenu}>
                <img src='/public/icon-menu.svg' />
            </button>

            <a href="#" className=''>
                <img src="/public/logo.svg" alt="sneakers" />
            </a>


            <div className='ml-auto flex gap-x-[22px]  '>
                <button onClick={handleOpenCart} className='relative'>
                    <span className='absolute text-white bg-dark-orange inline-block  font-bold text-[10px] leading-none py-[2px] px-[6px] rounded-full top-0 right-0 translate-x-1/2 -translate-y-1/4 '>{cartItemsLength}</span>
                    <img src="/public/icon-cart.svg" alt="cart" />
                </button>
                <div className='self-end w-6 aspect-square ' >
                    <img src="/public/image-avatar.png" alt="avatar" />
                </div>
            </div>
        </div>
    </div>
    )
}

export default HeaderContent
