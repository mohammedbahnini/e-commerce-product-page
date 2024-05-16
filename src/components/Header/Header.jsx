import React, { useState } from 'react'
import HeaderContent from './HeaderContent';
import Cart from './Cart';
import { Store } from '../../store/store';

function Header(props) {

    const { handleOpenMenu } = props;

    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleOpenCart = () => {
        setIsCartOpen(prev => !prev);
    }

    return (
        <>
            <header className=''>
                <div className="container relative py-6 lg:pt-7 lg:pb-[34px] border-b-[1px] border-b-slategray/10 ">
                    <HeaderContent handleOpenMenu={handleOpenMenu} handleOpenCart={handleOpenCart} />
                    <Cart isCartOpen={isCartOpen} />
                </div>


            </header>
        </>
    )
}

export default Header
