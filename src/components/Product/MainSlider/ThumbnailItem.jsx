import classNames from 'classnames';
import React from 'react'

function ThumbnailItem(props) {
    const { image, index, activeIndex } = props;

    return (
        <div key={index} className={
            classNames(
                'transition-opacity duration-300 flex-1 rounded-[10px] overflow-hidden',
                {
                    ' relative after:absolute after:w-full after:left-0 after:top-0 after:bg-white/75 after:h-full before:absolute before:w-full before:h-full before:top-0 before:left-0 before:border-dark-orange before:border-2 before:z-[3] before:rounded-[10px]   ': activeIndex === index
                }
            )
        }>
            <img src={image} alt="" />
        </div>
    )
}

export default ThumbnailItem
