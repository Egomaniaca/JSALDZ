

const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (title = 111, price = 666) => `<div class="goods-item"><div><img src="https://via.placeholder.com/200"></div><h3>${title}</h3><p>${price}</p></div>`;


const renderGoodsList = (list) => {
    let goodsList = (list.map(item => renderGoodsItem(item.title, item.price))).join(' ');
    document.querySelector('.goods-list').innerHTML = goodsList;
}

renderGoodsList(goods);