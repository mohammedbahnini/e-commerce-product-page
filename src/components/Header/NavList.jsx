import React from 'react'

function NavList(props) {
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


    return (
        <ul className='hidden lg:flex gap-x-8 pl-14  '>
            {
                links.map( (link , index) => (
                    <li className='' key={index}>
                            <a href={link.to} className='text-slategray text-[15px] leading-[26px] relative transition-colors duration-100 hover:text-very-dark-gray 
                            after:absolute after:w-0 after:bg-dark-orange after:h-1 after:left-1/2 after:-translate-x-1/2 after:-bottom-12  after:block after:transition-[width] after:duration-100
                            hover:after:w-full  '>{link.text}</a>
                    </li>
                ))
            }
        </ul>
    )
}

export default NavList
