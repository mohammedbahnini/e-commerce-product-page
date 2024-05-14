import React from 'react'
import Slider from 'react-slick';
function NextArrow(props){
    const { onClick } = props;
    return (
        <div 
        className='cursor-pointer bg-white rounded-full flex items-center justify-center w-10 aspect-square absolute top-1/2 -translate-y-1/2 right-4  z-10'
        onClick={onClick} >
            <img src="/public/icon-next.svg" alt="" className='w-[9px]' />
        </div>
    )
}

function PrevArrow(props){
    const { onClick } = props;
    return (
        <div 
        className='cursor-pointer bg-white rounded-full flex items-center justify-center w-10 aspect-square absolute top-1/2 -translate-y-1/2 left-4 z-10 '
        onClick={onClick} >
            <img src="/public/icon-previous.svg" alt="" className='w-[9px]' />
        </div>
    )
}




function ProductImages(props) {
    const { images } = props;
    return (
        <Slider 
        infinite={false}
        slidesToScroll={1}
        slidesToShow={1}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
        className='relative outline-none '
        dots={false}
        variableWidth={false}
        >
            {
                images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt="" className='h-[80vw] w-full object-cover'  />
                    </div>
                ))
            }
        </Slider>
    )
}

export default ProductImages
