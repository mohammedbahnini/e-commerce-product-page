import React from 'react'
import ModalSlider from './ModalSlider'

function ModalContent(props) {
    const { images , thumbnails , closeModal } = props;

    return (
        <div className='relative  mx-10 lg:mx-0 ' >
            <div className='flex justify-end mb-6'>
                <button onClick={closeModal}><img src="/icon-close.svg" alt="" className='invert brightness-0 w-5' /></button>
            </div>
          <ModalSlider images={images} thumbnails={thumbnails} />
        </div>
    )
}

export default ModalContent
