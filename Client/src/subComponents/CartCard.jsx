import React from 'react'


export const CartCard = (product) => {
    return (
        <>
        <div className='Cart-card' key={product._id}></div>
        <img src="" alt="img-product" />
        <h3 className='title'>{product.title}</h3>
        <h4>{product.price}</h4>
        <h5>{product.amount}</h5>
        </>
    )
}

export default CartCard;