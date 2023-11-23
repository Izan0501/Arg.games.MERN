import React from 'react'

const CartCard = ({ item }) => {

    const { title, price, amount, image } = item;


    return (
        <div className='card-contain'>
            <div className='card__Product'>
                <h5 className="card-tittle">{title}</h5>
                <div className='card-body'>
                <img className='card-img  mb-3' src={'http://localhost:3977/' + image} alt={image} />
                    <p>
                        <span className='fw-bold'> {amount} =</span>U$D {price}
                    </p>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default CartCard