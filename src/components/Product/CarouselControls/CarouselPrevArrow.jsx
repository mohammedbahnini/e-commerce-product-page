import classNames from 'classnames';
import React from 'react'

function CarouselPrevArrow(props) {
    const { isForModal } = props;
    console.log(isForModal);


    return (
        <div
            className={classNames('cursor-pointer bg-white rounded-full flex items-center justify-center w-10 aspect-square absolute top-1/2 -translate-y-1/2  z-10 lg:w-14  ' , {
                'left-0 -translate-x-1/2'  : isForModal,
                'left-4' : !isForModal
            })}
            onClick={props.onClick} >
            <img src="/icon-previous.svg" alt="" className='w-[9px]' />
        </div>
    )
}

export default CarouselPrevArrow
