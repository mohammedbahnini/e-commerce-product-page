import React from 'react'

function SliderItem(props) {
    const { image , index , handleSliderImageClick} = props; 
    return (
        <div
            className=''
            key={index}
            onClick={() => handleSliderImageClick(index)}
        >
            <img
                src={image}
                alt=""
                className='h-[80vw] w-full object-cover lg:h-auto lg:w-full lg:rounded-2xl max-w-full  '
            />
        </div>

    )
}

export default SliderItem
