import React from 'react'

const CartCard = ({ item }) => {
    console.log(item);

    const { title, price, amount, image  } = item;
    

  return (
    <div className='col mb-4 mt-3'>
        <div className='card__Product'>
            <img className='card-img' src={'http://localhost:3977/' + image} alt={image}/>
            <div className='card-body'>
                <h5 className="card-tittle text-primary">{title}</h5>
                <hr />
                <p>
                    <span className='fw-bold'>{price}</span>
                </p>
                <p>
                <span className='fw-bold'>{amount}</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default CartCard