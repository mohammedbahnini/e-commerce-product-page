import classNames from 'classnames';
import React from 'react'

function CarouselThumbs(props) {
    const { slideToItem, setActiveIndex, activeIndex, thumbnails } = props;

    const handleClick = (index) => {
        slideToItem(index);
        setActiveIndex(index);
    }


    return (

        <div className='lg:flex gap-x-8 hidden mt-8 '>
            {
                thumbnails.map((thumb, index) => (
                    <div key={index}
                        className={
                            classNames(
                                'transition-opacity duration-300 flex-1 rounded-[10px] overflow-hidden',
                                {
                                    'opacity-25 outline-2 outline-dark-orange outline -outline-offset-2  ': activeIndex === index
                                }
                            )
                        }
                    >
                        <img src={thumb} alt="" onClick={() => handleClick(index)} className=' ' />
                    </div>
                ))
            }
        </div>
    )
}

export default CarouselThumbs
