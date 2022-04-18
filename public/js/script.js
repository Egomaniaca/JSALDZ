const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        showCart: false,

        catalogUrl: '/catalogData.json',
        products: [],

        filtered: [],

        imgCatalog: 'https://via.placeholder.com/200x150',
    },
    components: { cart, products, filter_el },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
        }
    }
    // methods: {
    //     getJson(url) {
    //         return fetch(url)
    //             .then(result => result.json())
    //             .catch(error => console.log(error))
    //     },
    //     addProduct(product) {
    //         this.getJson(`${API}/addToBasket.json`)
    //             .then(data => {
    //                 if (data.result === 1) {
    //                     let find = this.cartItems.find(el => el.id_product === product.id_product);
    //                     if (find) {
    //                         find.quantity++;
    //                     } else {
    //                         let prod = Object.assign({ quantity: 1 }, product);
    //                         this.cartItems.push(prod)
    //                     }
    //                 } else {
    //                     alert('ERROR!');
    //                 }
    //             })
    //     },
    //     remove(item) {
    //         this.getJson(`${API}/addToBasket.json`)
    //             .then(data => {
    //                 if (data.result === 1) {
    //                     if (item.quantity > 1) {
    //                         item.quantity--;
    //                     } else {
    //                         this.cartItems.splice(this.cartItems.indexOf(item), 1)
    //                     }
    //                 }
    //             })
    //     },
    //     filter() {
    //         let regexp = new RegExp(this.userSearch, 'i');
    //         this.filtered = this.products.filter(el => regexp.test(el.product_name));
    //     },
    // },


    // mounted() {
    //     this.getJson(`${API + this.cartUrl}`)
    //         .then(data => {
    //             for (let el of data.contents) {
    //                 this.cartItems.push(el);
    //             }
    //         });
    //     this.getJson(`${API + this.catalogUrl}`)
    //         .then(data => {
    //             for (let el of data) {
    //                 this.products.push(el);
    //                 this.filtered.push(el);
    //             }
    //         });
    //     // this.getJson(`getProducts.json`)
    //     //     .then(data => {
    //     //         for (let el of data) {
    //     //             this.products.push(el);
    //     //             this.filtered.push(el);
    //     //         }
    //     //     });
    // },

});