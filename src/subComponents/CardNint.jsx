import React from 'react'
import '../css/btnFavNint.css'
import ProductsBtn from '../subComponents/ProductsBtn';
import NintFav from '../subComponents/NintFav'

export const CardNint = (props) => {
    return (
        <>
            <li className="card">
                <NintFav />
                <div className="img">
                    <img src={props.img} alt="img" />
                </div>
                <ProductsBtn content={props.price}/>
            </li>
        </>
    );
};

export default CardNint