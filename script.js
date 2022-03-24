/*const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (title = 111, price = 666) => `<div class="goods-item"><div><img src="https://via.placeholder.com/200"></div><h3>${title}</h3><p>${price}</p></div>`;


const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price)).join(' ');
    document.querySelector('.goods-list').innerHTML = goodsList;
}

renderGoodsList(goods);*/

class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    render() {

        return `<div class="goods-item">
                    <div><img src="https://via.placeholder.com/200"></div>
                    <h3>${this.title}</h3>
                    <p>${this.price}</p>
                    <button class="buy-btn">Купить</button>
                </div>`
    }
}

class GoodList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];
    }
    culcSum() {
        let sum = 0;
        this.goods.forEach(good => {
            sum += good.price;
        });
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

const list = new GoodList();
list.fetchGoods();
list.render();
list.culcSum();

class Cart {
    addGood() {

    }
    removeGood() {

    }

    render() {

    }
}

class ElemCart {

    render() {

    }
}