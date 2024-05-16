import classNames from 'classnames';
import React from 'react'

function CarouselArrow(props) {
    const { isForModal, direction , showOnMobile, showOnLarge  } = props;


    return (
        <div
            className={
                classNames('cursor-pointer bg-white rounded-full flex items-center justify-center w-10 aspect-square absolute top-1/2 -translate-y-1/2  z-10 lg:w-14  ', {
                    'right-4' : direction === 'next' && !isForModal ,
                    'right-0 translate-x-1/2' :direction === 'next' && isForModal ,
                    'left-4' : direction === 'prev' && !isForModal , 
                    'left-0 -translate-x-1/2' : direction === 'prev' && isForModal , 
                    'lg:hidden lg:invisible' : !showOnLarge,
                    'hidden invisible' : !showOnMobile,

                })
            }
            onClick={props.onClick} >
            { direction === 'next' && <img src="/icon-next.svg" alt="" className='w-[9px]' />}
            { direction === 'prev' && <img src="/icon-previous.svg" alt="" className='w-[9px]' />}

        </div>
    )
}

export default CarouselArrow