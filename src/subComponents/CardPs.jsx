import React from 'react'
import FavBtn from '../subComponents/FavBtn';
import ProductsBtn from '../subComponents/ProductsBtn';

export const CardPs = (props) => {
    return (
        <>
            <li className="card">
                <div className="img"><img src={props.img} alt="img" />
                    <FavBtn />
                    <ProductsBtn content={'U$D 87'} />
                </div>
            </li>
        </>
    );
};

export default CardPs