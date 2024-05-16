import React from 'react'
import ProductDescription from './ProductDescription'
import ProductCarousel from './ProductCarousel';
import ProductModal from './Modal/ProductModal';
import ProductWrapper from './ProductWrapper';


function ProductDetails() {
    const product = {
        images: ['/image-product-1.jpg', '/image-product-2.jpg', '/image-product-3.jpg', '/image-product-4.jpg'],
        thumbnails: ['/image-product-1-thumbnail.jpg', '/image-product-2-thumbnail.jpg', '/image-product-3-thumbnail.jpg', '/image-product-4-thumbnail.jpg'],
        brand: 'sneaker company',
        name: 'fall limited edition sneakers',
        fullDescription: `These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.`,
        price: 125.00,
        promo: 50,
        oldPrice: 250.00
    };

    return (

        <section>


            <ProductWrapper>
                <ProductCarousel images={product.images} thumbnails={product.thumbnails} />
                <ProductDescription product={product} />
            </ProductWrapper>

        </section>
    )
}

export default ProductDetails
