import React from 'react'

function ModalSliderItem(props) {
    const { image , index } = props;
    return (
        <>
            <img src={image} className='w-full rounded-[10px] ' key={index} />
        </>
    )
}

export default ModalSliderItem
