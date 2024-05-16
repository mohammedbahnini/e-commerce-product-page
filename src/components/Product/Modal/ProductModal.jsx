import React, { useEffect, useRef, useState } from 'react'
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import Slider from 'react-slick';
import classNames from 'classnames';
import CarouselArrow from '../CarouselControls/CarouselArrow';
import ModalSlider from './ModalSlider';
import ModalContent from './ModalContent';

function ProductModal(props) {
    const { isModalOpen, closeModal, images, thumbnails } = props;


    return (
        <>
            <div >
                <Rodal
                    visible={isModalOpen}
                    animation='slideDown'
                    onClose={closeModal}
                    className='shadow-none'
                    customStyles={{
                        height: 'fit-content',
                        background: 'transparent',
                        boxShadow: 'none',
                        width: 'auto',
                        maxWidth: '550px',
                        padding: '0',
                    }}
                    showCloseButton={false}

                >
                    <ModalContent closeModal={closeModal} images={images} thumbnails={images} />
                </Rodal>

            </div>
        </>
    )
}

export default ProductModal
