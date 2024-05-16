import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import ProductModal from './Modal/ProductModal';
import Slider from 'react-slick';
import CarouselArrow from './CarouselControls/CarouselArrow';
import SliderItem from './MainSlider/SliderItem';
import ThumbnailItem from './MainSlider/ThumbnailItem';


function ProductCarousel(props) {
    const { images, thumbnails } = props;
    const [activeIndex, setActiveIndex] = useState(0);
    const [modalStartIndex, setModalStartIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [slider, setSlider] = useState(null);
    const [thumb, setThumb] = useState(null);
    let sliderRef = useRef(null);
    let thumbRef = useRef(null);

    useEffect(() => {
        setSlider(sliderRef);
        setThumb(thumbRef);
    }, []);



    const closeModal = () => {
        setIsModalOpen(false)
    }
    const handleChange = (current, next) => {

        if (current !== next)
            setActiveIndex(next)
    }

    const handleSliderImageClick = (index) => {
        setModalStartIndex(index);
        setIsModalOpen(true);


    }

    return (
        <>
            <div className=" -mx-6 lg:mx-0 lg:max-w-full   overflow-hidden   ">

                <Slider
                    className=' relative'
                    nextArrow={<CarouselArrow direction='next' showOnMobile />}
                    prevArrow={<CarouselArrow direction='prev' showOnMobile />}
                    ref={s => sliderRef = s}
                    focusOnSelect={true}
                    asNavFor={thumb}
                    adaptiveHeight={true}
                    beforeChange={handleChange}
                >

                    {
                        images.map((image, index) => <SliderItem image={image} index={index} key={index} handleSliderImageClick={handleSliderImageClick} />)
                    }

                </Slider>

                <div className='thumbnails mt-8 hidden invisible lg:block lg:visible'>
                    <Slider
                        ref={s => thumbRef = s}
                        slidesToShow={4}
                        slidesToScroll={1}
                        infinite={false}
                        asNavFor={slider}
                        swipeToSlide={true}
                        focusOnSelect={true}
                    >
                        {
                            thumbnails.map((image, index) => <ThumbnailItem image={image} index={index} activeIndex={activeIndex} key={index} />)
                        }
                    </Slider>
                </div>


                <ProductModal
                    isModalOpen={isModalOpen}
                    closeModal={closeModal}
                    images={images}
                    thumbnails={thumbnails}
                    sliderStartIndex={modalStartIndex}
                />
            </div>


        </>
    )
}

export default ProductCarousel
