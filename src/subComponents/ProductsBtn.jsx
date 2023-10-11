import React from 'react'

export const ProductsBtn = (props) => {
    return (
        <h4>
            <button type="button" className="btn btn-outline">
                {props.content}
            </button>
        </h4>
    );
};

export default ProductsBtn