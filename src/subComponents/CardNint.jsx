import React from 'react'
import '../css/btnFavNint.css'
import ProductsBtn from '../subComponents/ProductsBtn';
import NintFav from '../subComponents/NintFav'

export const CardNint = (props) => {
    return (
        <>
            <li className="card">
                <div className="img"><img src={props.img} alt="img" />
                    <NintFav />
                    <ProductsBtn content={'U$D 74'}/>
                </div>
            </li>
        </>
    );
};

export default CardNint