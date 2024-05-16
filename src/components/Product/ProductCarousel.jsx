import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import ProductModal from './Modal/ProductModal';
import Slider from 'react-slick';
import CarouselArrow from './Carousel/CarouselArrow';


function ProductCarousel(props) {
    const { images, thumbnails } = props;
    const [activeIndex, setActiveIndex] = useState(0);
    const [modalStartIndex , setModalStartIndex ] = useState(0);
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
        console.log('modal index ' ,index);
        setModalStartIndex(index);
        setIsModalOpen(true);
        

    }

    return (
        <>
            <div className=" -mx-6 lg:mx-0 lg:max-w-full   overflow-hidden   ">

                <Slider
                    className=' relative'
                    nextArrow={<CarouselArrow direction='next' />}
                    prevArrow={<CarouselArrow direction='prev' />}
                    ref={s => sliderRef = s}
                    focusOnSelect={true}
                    asNavFor={thumb}
                    adaptiveHeight={true}
                    beforeChange={handleChange}
                >
                    {
                        images.map((item, index) => (
                            <div className='' key={index}  onClick={() =>handleSliderImageClick(index) }  >
                                <img src={item} alt="" className='h-[80vw] w-full object-cover lg:h-auto lg:w-full lg:rounded-2xl max-w-full  ' />
                            </div>
                        ))
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
                            thumbnails.map((item, index) => (
                                <div key={index} className={
                                    classNames(
                                        'transition-opacity duration-300 flex-1 rounded-[10px] overflow-hidden',
                                        {
                                            'outline-2 outline-dark-orange outline -outline-offset-2 relative after:absolute after:w-full after:left-0 after:top-0 after:bg-white/75 after:h-full  ': activeIndex === index
                                        }
                                    )
                                }>
                                    <img src={item} alt="" />
                                </div>
                            ))
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
