import React from "react";
import cartFunction from "../Functions/cartFunction";

export const ProductsBtn = (props) => {
    return (
        <h4>
            <button
                type="button"
                className="btn btn-outline"
                onClick={cartFunction}
            >
                {props.content}
            </button>
        </h4>
    );
};

export default ProductsBtn;
