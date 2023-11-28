import React, { useEffect, useState } from "react";
import { getProductsFetch } from "../api/getProducts";
import { motion } from "framer-motion";
import Card from "./Card";

const Ps4Section = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductsFetch()
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

export default Ps4Section;
