const addCartProduct = (e) => {
    let cartProducts = [];

    const products= {
        title: e.target.dataset.game,
        id: e.target.dataset.game,
        amount: 1,
        price: parseInt( e.target.dataset.price),
        img: e.target.dataset.img,
    }

    const position = cartProducts.findIndex(products => {
        return products.title === products.title
    })
    if(position === -1) {
        cartProducts.push(products);   
    } else {
        cartProducts[position].amount++
    }
    
  
    console.log(cartProducts)
};



export default addCartProduct