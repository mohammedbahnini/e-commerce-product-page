import React, { useRef, useState } from 'react'
import Slider from 'react-slick';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

function NextArrow(props) {

    // const swiper = useSwiper();
    // const handleClick = () => {
    //     swiper.slideNext();
    // }
    return (
        <div
            className='cursor-pointer bg-white rounded-full flex items-center justify-center w-10 aspect-square absolute top-1/2 -translate-y-1/2 right-4  z-10 lg:invisible lg:hidden'
            // onClick={handleClick} 
            >
            <img src="/public/icon-next.svg" alt="" className='w-[9px]' />
        </div>
    )
}

function PrevArrow(props) {

    const swiper = useSwiper();
    const handleClick = () => {
        swiper.slidePrev();
    }
    return (
        <div
            className='cursor-pointer bg-white rounded-full flex items-center justify-center w-10 aspect-square absolute top-1/2 -translate-y-1/2 left-4 z-10 lg:invisible lg:hidden '
            onClick={handleClick} >
            <img src="/public/icon-previous.svg" alt="" className='w-[9px]' />
        </div>
    )
}




function ProductImages(props) {
    const { images, thumbnails } = props;
    const [thumbs, setThumbs] = useState(null);




    return (
        <div className=' relative lg:pr-[63px] '> {/** lg:w-1/2 lg:pr-[63px]  */}

            <Swiper
                className=''
                navigation={true}
                thumbs={{
                    swiper : thumbs
                }}
                modules={[FreeMode, Navigation, Thumbs]}
            >
                {
                    images.map((image, index) => (
                        <SwiperSlide key={index} className='flex justify-center items-center lg:overflow-hidden outline-none '  >
                            <img src={image} alt="" className='h-[80vw] w-full object-cover lg:h-auto lg:w-full lg:rounded-2xl  ' />
                        </SwiperSlide>
                    ))
                }
              
                {/* <PrevArrow /> */}
            </Swiper>

            <Swiper
            className='mt-8'
            slidesPerView={4}
            spaceBetween={32}
            modules={[FreeMode, Navigation, Thumbs]}
            onSwiper={setThumbs}
            freeMode={true}
            watchSlidesProgress={true}
            >
                {
                    thumbnails.map((thumbnail, index) => (
                        <SwiperSlide key={index} className=''   >
                            <img src={thumbnail} alt="" className='rounded-[10px] ' />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            {/* <Slider
                infinite={false}
                slidesToScroll={1}
                slidesToShow={1}
                nextArrow={<NextArrow />}
                prevArrow={<PrevArrow />}
                className='relative '
                dots={false}
                variableWidth={false}
                centerMode={false}


            >
                {
                    images.map((image, index) => (
                        <div key={index} className='flex justify-center items-center lg:overflow-hidden outline-none '  >
                            <img src={image} alt="" className='h-[80vw] w-full object-cover lg:h-auto lg:w-full lg:rounded-2xl  ' />
                        </div>
                    ))
                }
            </Slider> */}
            {/* 
            <Slider
                slidesToShow={4}
                swipeToSlide={false}
                
            >
                {
                    thumbnails.map((thumbnail, index) => (
                        <div key={index} className='pr-8 '   >
                            <img src={thumbnail} alt="" className='rounded-[10px] ' />
                        </div>
                    ))
                }
            </Slider> */}
        </div>
    )
}

export default ProductImages
