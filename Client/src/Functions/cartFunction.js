const addCartProduct = (e) => {
    let cartProducts = [];

    const product = {
        tittle: e.target.dataset.game,
        amount: 1,
        price: parseInt( e.target.dataset.sell),
        img: e.target.dataset.img,
    }

    const position = cartProducts.findIndex(item => {
        return item.tittle === product.tittle
    })
    if(position === -1) {
        cartProducts.push(product);   
    } else {
        cartProducts[position].amount++
    }
    console.log(cartProducts)
};



export default addCartProduct