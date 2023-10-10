import React from 'react'
import ProductsBtn from '../subComponents/ProductsBtn';
import FavBtn from '../subComponents/FavBtn';

export const Card = (props) => {
    return (
        <>
            <li className="card">
                <div className="img"><img src={props.img} alt="img" />
                    <FavBtn />
                    <ProductsBtn content={'U$D 49'}/>
                </div>
            </li>
        </>
    );
};

export default Card