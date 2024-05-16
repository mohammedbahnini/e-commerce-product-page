import React, { useEffect, useRef, useState } from 'react'
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import Slider from 'react-slick';
import CarouselNextArrow from '../Carousel/CarouselNextArrow';
import CarouselPrevArrow from '../Carousel/CarouselPrevArrow';
import classNames from 'classnames';
import CarouselArrow from '../Carousel/CarouselArrow';

function ProductModal(props) {
    const { isModalOpen, closeModal, images, thumbnails, sliderStartIndex } = props;
    const [slider, setSlider] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    console.log('inside modal ',sliderStartIndex);

    let sliderRef = useRef(null);
    let thumbnailRef = useRef(null);

    useEffect(() => {
        setSlider(sliderRef);
        setThumbnail(thumbnailRef);
    }, [])

    const handleSliderBeforeChange = (current, next) => {
        if (current !== next) setActiveIndex(next)
    }


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

                    <div className='relative  mx-10 lg:mx-0 ' >
                        <div className='flex justify-end mb-6'>
                            <button onClick={closeModal}><img src="/public/icon-close.svg" alt="" className='invert brightness-0 w-5' /></button>
                        </div>
                        <Slider
                            ref={c => sliderRef = c}
                            className=''
                            nextArrow={<CarouselArrow isForModal={true} direction='next' showOnMoile showOnLarge/>}
                            prevArrow={<CarouselArrow isForModal={true} direction='prev' showOnMoile showOnLarge />}
                            focusOnSelect={true}
                           beforeChange={handleSliderBeforeChange}
                           
                        >
                            {
                                images.map((item, index) => (
                                    <img src={item} className='w-20' key={index} />
                                ))
                            }
                        </Slider>

                        <div className='thumbnails  px-[52px] mt-10'>
                            <Slider
                                ref={(c) => thumbnailRef = c}
                                slidesToShow={4}
                                infinite={false}
                                slidesToScroll={1}
                                focusOnSelect={true}
                                asNavFor={slider}
                                className='overflow-hidden'
                                initialSlide={Number(sliderStartIndex)}
                      
                            >
                                {
                                    thumbnails.map((item, index) => (
                                        <div
                                            key={index}
                                            className={
                                                classNames(
                                                    'transition-opacity duration-300 flex-1 rounded-[10px] overflow-hidden',
                                                    {
                                                        'outline-2 outline-dark-orange outline -outline-offset-2 relative after:absolute after:w-full after:left-0 after:top-0 after:bg-white/75 after:h-full  ' : activeIndex === index
                                                    }
                                                )
                                            }
                                        >
                                            <img src={item} alt="" />
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>



                </Rodal>

            </div>
        </>
    )
}

export default ProductModal
