const CartFunction = async (props) => {
    const { title, _id ,amount, price, image } = props.item ?? {};

    const productCart = {
        _id: _id,
        title:title,
        amount: amount,
        price: price,
        image: image,
    }
   console.log(productCart);

    
  
};



export default CartFunction;