'use client'

import { useState } from "react"

export default async function AddToCartButton() {
    const [count, setCount] = useState(0)

    function addToCart() {
        // setCount((state) => state + 1)
        setCount(count + 1)
    }

    return (
        <button onClick={addToCart}>Add ao Carrinho ({count})</button>
    )
}