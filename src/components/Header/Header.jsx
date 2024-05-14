import React, { useState } from 'react'
import HeaderContent from './HeaderContent';
import Cart from './Cart';
import { Store } from '../../store/store';

function Header(props) {

    const { handleOpenMenu } = props;

    const [ isCartOpen , setIsCartOpen] = useState(false);

    const handleOpenCart = ()=>{
        setIsCartOpen( prev => !prev );
    }

    return (
        <>
            <header className='relative'>
               <HeaderContent  handleOpenMenu={handleOpenMenu} handleOpenCart={handleOpenCart} />
               <Cart isCartOpen={isCartOpen} />
            </header>
        </>
    )
}

export default Header
