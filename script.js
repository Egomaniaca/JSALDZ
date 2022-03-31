const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const IMG = 'https://via.placeholder.com/200x200'
const IMGSmall = 'https://via.placeholder.com/100'


class GoodList {
    constructor(container = '.goods-list') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render();
            });
    }


    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }

    culcSum() {
        let sum = 0;
        this.goods.forEach(good => {
            sum += good.price;
        });
        console.log('Сумма всех товаров равна ' + sum);
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new GoodsItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }
}

class GoodsItem {
    constructor(product, IMG) {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = IMG;
    }

    render() {
        return `<div class="goods-item" data-id="${this.id}">
                <img src="${IMG}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

let list = new GoodList();

class Cart {
    constructor(container = '.cart-block') {
        this.container = container;
        this.goods = [];
        this._clickCart();
        this._getCartItem()
            .then(data => {
                this.goods = data.contents;
                this.render();
            });
    }

    _getCartItem() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }

    _clickCart() {
        document.querySelector('.cart-button').addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('invisible');
        });
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new CartItem();
            block.insertAdjacentHTML('beforeend', productObj.render(product));
        }
    }
}

class CartItem {

    render(product,) {
        return `<div class="cart-item" data-id="${product.id_product}">
                    <img src="${IMGSmall}" alt="Some image">
                    <div class="product-bio">
                        <div class="product-desc">
                            <p class="product-title">${product.product_name}</p>
                            <p class="product-quantity">Quantity: ${product.quantity}</p>
                            <p class="product-single-price">$${product.price}</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">$${product.quantity * product.price}</p>
                        <button class="del-btn" data-id="${product.id_product}">&#x2718;</button>
                    </div>
                </div>`

    }
}

let cart = new Cart(); 