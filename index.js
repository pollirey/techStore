
class Product {
    constructor({id, title, price, oldPrice, category, rating, emoji, isHit}){
        this.id = id;
        this.title = title;
        this.price = price;
        this.oldPrice = oldPrice || null;
        this.category = category;
        this.rating = rating;
        this.emoji = emoji;
        this.isHit = isHit || false;
    };

    get discount(){
        if(!this.oldPrice){
            return 0;
        }
        return Math.round((1 - this.price / this.oldPrice) * 100 );
    }

    get formattedPrice(){
        return this.price.toLocaleString('ru-RU') + "руб.";
    }

    toStorage(){
        return {
         id : this.id,
         title : this.title,
         price: this.price,
         oldPrice : this.oldPrice,
         category : this.category,
         emoji : this.emoji,
         quantity : 1,
        }
    }

    render(inCart = false) {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.dataset.id = this.id;
        card.innerHTML = `
        <div class="product-image">
        ${this.emoji} ${this.isHit ? ' <span class="badge">Хит продаж</span>' : ''}
        </div>
                <div class="product-info">
                    <div class="product-category">
                    ${this.category}</div>
                    <h3 class="product-title">${this.title}</h3>
                    <div class="product-rating">
                    <span clas="stars"></span>
                    <span clas="${this.rating}"></span>
                    </div>
                    <div class="product-price-block">
                        <span class="product-price">${this.formattedPrice}</span>
                        ${this.oldPrice ? `<span class="product-old-price">${this.oldPrice} руб.</span>` : '' }
                        ${this.discount > 0 ? `<span class="product-discount">-${this.discount}</span>%` : '' }
                    </div>
                    <button class="add-to-cart-btn ${inCart ? 'in-cart' : ''}">${inCart ? "В корзине" : "Добавить в корзину"}</button>
                </div>
        `
        return card;
    }
};

class Shop {
    constructor(products){
        this.products = products;
        this.currentFilter = "all";
        this.grid = document.getElementById("productsGrid");
    }
}

