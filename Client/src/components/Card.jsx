import React from "react";
import { motion } from "framer-motion";
import ProductsBtn from "../subComponents/ProductsBtn";
import FavBtn from "../subComponents/FavBtn";

const Card = (props) => {
    const { price, image } = props.item ?? {};

    return (
        <>
            <motion.div className="card" whileTap={{ cursor: "grabbing" }}>
                <FavBtn />
                <motion.div className="img">
                    <img src={"http://localhost:3977/" + image} alt={image} />
                </motion.div>
                <ProductsBtn content={price} />
            </motion.div>
        </>
    );
};

export default Card;
