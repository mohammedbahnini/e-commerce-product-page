import React from 'react'

function ProductWrapper(props) {
    return (
        <div className="container ">
            <div className='lg:pt-[90px] lg:flex items-start lg:px-12 lg:*:flex-1 lg:gap-x-[125px]   '>
                {props.children}
            </div>
        </div>

    )
}

export default ProductWrapper
