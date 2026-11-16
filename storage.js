
const Storage = {
    key: "shop-cart",
    getCart(){
        const data = localStorage.getItem(this.key);
        return data ? JSON.parse(data) : [];
    },
    saveCart(items){
        localStorage.setItem(this.key, JSON.stringify(items));
    },
    isInCart(productId){
        const cart = this.getCart();
        return cart.some(item => item.id === productId);
    }
};
