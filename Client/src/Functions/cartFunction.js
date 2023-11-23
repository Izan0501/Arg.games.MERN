const CartProduct = async () => {
    

    const url = 'http://localhost:3977/api/v1/products';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)

    
  
};



export default CartProduct