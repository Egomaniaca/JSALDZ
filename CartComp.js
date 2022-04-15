const cartItem = {
    props: ['cart_item', 'img'],
    template: `
                <div class = "cart-item">
                    <div class="product-bio">
                        <img :src="img" alt="Image">
                        <div class="product-desc">
                            <p class="product-title">{{cart_item.product_name}}</p>
                            <p class="product-quantity">Количество: {{cart_item.quantity}}</p>
                            <p class="product-single-price">{{cart_item.price}} ₽ за штуку</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">{{cart_item.quantity*cart_item.price}} ₽</p>
                        <button class="del-btn" @click="$parent.remove(cart_item)">&#10008</button>
                    </div>
                </div>`
}

const cart = {
    components: { 'cart-item': cartItem },
    data() {
        return {
            cartUrl: '/getBasket.json',
            imgCart: 'https://via.placeholder.com/100x75',
            showCart: false,
            cartItems: []
        }
    },
    methods: {
        addProduct(product) {
            this.$parent.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result) {
                        let find = this.cartItems.find(el => el.id_product.id_product);
                        if (find) {
                            find.quantity++;
                        } else {
                            let prod = Object.assign({ quantity: 1 }, product)
                            this.cartItems.push(prod)
                        }
                    } else {
                        console.log('error')
                    }
                })
        },
        remove(product) {
            this.$parent.getJson(`${API}/deletFromBasket.json`)
                .then(data => {
                    if (data.result) {
                        if (product.quantity > 1) {
                            product.quantity--
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(product), 1)
                        }
                    }
                })
        }
    },
    mounted() {
        this.$parent.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for (let el of data) {
                    this.cartItems.push(el);
                }
            })
    },
    template: `
                <div>
                    <button class="btn-cart" type="button" @click="showCart=!showCart">Корзина</button>
                    <div class="cart-block" v-show="showCart">
                        <cart-item v-for = "product of cartItems"
                        :key="product.id_product"
                        :img="imgCart"
                        :cart_item="product"></cart-item>
                    </div>
                </div> `

}

// Vue.component('cart', {
//     props: ['cartItems', 'showCart', 'img'],
//     template: `
//         <div class="cart-block" v-show="showCart">
//             <p v-if="!cartItems.length">Корзина пуста</p>
//             <div class="cart-items" v-for="product of cartItems" :key="item.id_product">
//             </div>
//         </div>`
// });

// Vue.component('cart-item', {
//     props: ['imgCart', 'cartItem'],
//     template: `
//         <div class="product-bio">
//             <img :src="imgCart" alt="Image">
//             <div class="product-desc">
//                 <p class="product-title">{{item.product_name}}</p>
//                 <p class="product-quantity">Количество: {{item.quantity}}</p>
//                 <p class="product-single-price">{{item.price}} ₽ за штуку</p>
//             </div>
//         </div>
//         <div class="right-block">
//             <p class="product-price">{{item.quantity*item.price}} ₽</p>
//             <button class="del-btn" @click="remove(item)">&#10008</button>
//         </div>`
// })