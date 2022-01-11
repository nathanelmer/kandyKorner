import React, { useState, useEffect } from "react";

const api = "http://localhost:8088"

export const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(
        () => {
            fetch(`${api}/products`)
                .then(res => res.json())
                .then((data) => {
                    setProducts(data)
                })
        }
    )
}