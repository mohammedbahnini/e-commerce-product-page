import classNames from 'classnames';
import React, { useState } from 'react'

function Menu(props) {
    const links = [
        {
            to: '#',
            text: 'Collections'
        },
        {
            to: '#',
            text: 'Men'
        },
        {
            to: '#',
            text: 'Women'
        },
        {
            to: '#',
            text: 'About'
        },
        {
            to: '#',
            text: 'Contact'
        }

    ];

    const {isMenuOpen , handleCloseMenu } = props;

    return (
        <div className={classNames('bg-black/75 fixed top-0 left-0 w-full h-svh transition-transform duration-300 ease-in z-30 ' , {
            '-translate-x-full' : !isMenuOpen , 
            'translate-x-0' : isMenuOpen
        })}>
            <div className='w-[66.66666%] bg-white h-svh pl-6 pt-6'>

                <button className='outline-none border-none' onClick={handleCloseMenu}>
                    <img src="/public/icon-close.svg" alt="close" />
                </button>

                <ul className='flex flex-col gap-y-5 mt-[54px] '>
                    {
                        links.map((link, index) => (
                            <li key={index}>
                                <a href={link.to} className='font-bold text-lg leading-[26px] text-very-dark-gray'>{link.text}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}

export default Menu
