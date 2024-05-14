import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ActionAddItemToCart } from "./actions";

export const Store = create(devtools(
    (set, get) => (
        {
            cart :{
                items : [
                    {
                        id : 1,
                        image: '/public/image-product-1-thumbnail.jpg',
                        name: 'Fall Limited Edition Sneakers',
                        count: 3,
                        price: 125,
                        totalPrice: 375
                    }
                ]
               }
            ,
            addItemToCart : (count) => ActionAddItemToCart(set , count)
        }  
    ) ,{
        name : "main-store"
    }
));