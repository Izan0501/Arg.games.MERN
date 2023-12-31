import React from 'react'
import CartCard from '../subComponents/CartCard'


export const CartProducts = ({products}) => {
    return (
        <>
        <div className='row'>
            {products.map(item => (
                <CartCard key={item.id} item={item} />
            ))}
        </div>
        </>
    )
}

export default CartProducts;