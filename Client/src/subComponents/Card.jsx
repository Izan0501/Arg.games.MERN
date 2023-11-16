import React from "react";
import ProductsBtn from "../subComponents/ProductsBtn";
import FavBtn from "../subComponents/FavBtn";

export const Card = (props) => {
    return (
        <>
            <li className="card">
                <FavBtn />
                <div className="img">
                    <img src={props.img} alt="image" />
                    <img className="imgS" src={props.imgS} />
                </div>
                <ProductsBtn  content={props.price}/>
            </li>
        </>
    );
};

export default Card;
