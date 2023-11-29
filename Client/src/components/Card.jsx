import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
/*import ProductsBtn from "../subComponents/ProductsBtn";*/
import FavBtn from "../subComponents/FavBtn";

const Card = (props) => {
    const { price, image} = props.item ?? {};
    const [cart, setCart] = useState([]);

    const showItem = () => {
        console.log(props);
        setCart([...cart, props]);
    };

    return (
        <>
            <motion.div className="card" whileTap={{ cursor: "grabbing" }}>
                <FavBtn />
                <motion.div className="img">
                    <img src={"http://localhost:3977/" + image} alt={image} />
                </motion.div>
                <h4>
                    <button type="button" className="btn btn-outline" onClick={showItem}>
                        {price}
                    </button>
                </h4>
            </motion.div>
        </>
    );
};

export default Card;

/*<ProductsBtn  content={price} />*/

/**/
