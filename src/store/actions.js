export const ActionAddItemToCart = (set, count) => {
    set(prevStore => {

        const newItems = prevStore.cart.items.map(item => ({
            ...item,
            totalPrice : item.price * (item.count + count) ,
            count: item.count + count
        }))
        const newCart = {
            items: [...newItems]
        }
        console.log(newCart);
        return {
            cart: { ...newCart }
        }
    })
}

export const ActionDeleteItemCart = (set,id)=>{
    set( prevStore => {
        const newItems = prevStore.cart.items.filter(item => item.id !== id  );
        const newCart = {
            items: [...newItems]
        }
        console.log(newCart);

        return {
            cart : {
                ...newCart
            }
        }
    })
}