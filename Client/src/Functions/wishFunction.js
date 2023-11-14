const WishFunction = (e) => {
    let Products = [];

    const product = {
        tittle: e.target.dataset.game,
        id: e.target.dataset.game,
        amount: 1,
        sell: parseInt( e.target.dataset.sell),
        img: e.target.dataset.imgT,
    }

    const position = Products.findIndex(item => {
        return item.tittle === product.tittle
    })
    if(position === -1) {
        Products.push(product);   
    } else {
        Products[position].amount++
    }
    console.log(Products)
};



export default WishFunction 