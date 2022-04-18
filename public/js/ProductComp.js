const product = {
    props: ['product', 'img'],
    template: `
                <div class="product-item">
                    <img :src="img" alt="Image">
                    <div class="desc">
                        <h3>{{product.product_name}}</h3>
                        <p>{{product.price}} ₽ </p>
                        <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>
                    </div>
                </div> `
}
const products = {
    components: { product },
    data() {
        return {
            catalogURL: '/catalogData.json',
            products: [],
            imgCatalog: 'https://via.placeholder.com/200x150',
            filtered: []
        }
    },
    mounted() {
        this.$parent.getJson(`${API + this.catalogURL}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
        this.$parent.getJson(`getProducts.json`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    methods: {
        filter(val) {
            let regExp = new RegExp(val, 'i');
            this.filtered = this.products.filter(el => regExp.test(el.product_name))
        }
    },
    template: `
            <div class="products">
                <product v-for = "product of filtered" :key = "product.id_product" :img = "imgCatalog" :product = "product">
                </product>
            </div>
            `
}            