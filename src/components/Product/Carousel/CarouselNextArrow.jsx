import React from 'react'

function CarouselNextArrow(props) {
    

    return (
        <div
            className='cursor-pointer bg-white rounded-full flex items-center justify-center w-10 aspect-square absolute top-1/2 -translate-y-1/2 right-4  z-10 lg:w-14 '
            onClick={props.onClick}
        >
            <img src="/public/icon-next.svg" alt="" className='w-[9px]' />
        </div>
    )
}

export default CarouselNextArrow
