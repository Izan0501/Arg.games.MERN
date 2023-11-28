import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getPs5Games } from '../api/getPs5Games';
import Card from './Card'

export const Ps5Section = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getPs5Games()
            .then((data) => setProducts(data))
            .catch((error) => console.log("error", error));
    }, []);


    return (
        <>
            <motion.div
                className="wrapper"
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -1726 }}
                    className="carousel"
                    whileTap={{ cursor: "grabbing" }}
                >
                    {products.map((item) => (
                        <Card key={item._id} item={item} />
                    ))}
                </motion.div>
            </motion.div>
        </>
    );
};

export default Ps5Section