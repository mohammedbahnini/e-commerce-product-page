export const ActionAddItemToCart = (set, count) => {
    set(prevStore => {

        const newItems = prevStore.cart.items.map(item => ({
            ...item,
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