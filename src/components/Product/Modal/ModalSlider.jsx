import React, { useEffect, useRef, useState } from 'react'
import ModalSliderItem from './ModalSliderItem';
import Slider from 'react-slick';
import CarouselArrow from '../CarouselControls/CarouselArrow';
import classNames from 'classnames';
import ModalThumbnailItem from './ModalThumbnailItem';

function ModalSlider(props) {
    const { images, thumbnails } = props;
    const [slider, setSlider] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);


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
            <Slider
                ref={c => sliderRef = c}
                className=''
                nextArrow={<CarouselArrow isForModal={true} direction='next' showOnMoile showOnLarge />}
                prevArrow={<CarouselArrow isForModal={true} direction='prev' showOnMoile showOnLarge />}
                focusOnSelect={true}
                beforeChange={handleSliderBeforeChange}

            >
                {
                    images.map((image, index) => <ModalSliderItem image={image} index={index} key={index}  />)
                }
            </Slider>

            <div className='thumbnails  lg:px-[52px] mt-10 '>
                <Slider
                    ref={(c) => thumbnailRef = c}
                    slidesToShow={4}
                    infinite={false}
                    slidesToScroll={1}
                    focusOnSelect={true}
                    asNavFor={slider}
                    className='overflow-hidden'
                    initialSlide={0}

                >
                    {
                        thumbnails.map((image, index) => <ModalThumbnailItem key={index} image={image} index={index} activeIndex={activeIndex} />)
                    }
                </Slider>
            </div>
        </>
    )
}

export default ModalSlider
