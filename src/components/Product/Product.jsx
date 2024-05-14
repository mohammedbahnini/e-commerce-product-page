import React from 'react'
import ProductImages from './ProductImages'
import ProductDescription from './ProductDescription'


function Product() {
    const product = {
        images : [
            '/public/image-product-1.jpg' , 
            '/public/image-product-2.jpg' , 
            '/public/image-product-3.jpg' , 
            '/public/image-product-4.jpg'
        ]  , 
        thumbnails : [
            '/public/image-product-1-thumbnail.jpg', 
            '/public/image-product-2-thumbnail.jpg', 
            '/public/image-product-3-thumbnail.jpg', 
            '/public/image-product-4-thumbnail.jpg', 

        ] ,
        brand : 'sneaker company' , 
        name : 'fall limited edition sneakers' , 
        fullDescription : `These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.` ,
        price : 125.00, 
        promo : 50 , 
        oldPrice : 250.00
    };
    return (
        
        <section>
            <div className="conainer">
                <ProductImages images={product.images} thumbnails={product.thumbnails}  />
                <ProductDescription product={product} />
            </div>
        </section>
    )
}

export default Product
