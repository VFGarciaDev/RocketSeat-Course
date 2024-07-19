'use client'

import { ReactNode, useState } from "react"
import { TestClient } from "./test-client-comp"

export default async function AddToCartButton({children}: {children:ReactNode}) {
    const [count, setCount] = useState(0)

    function addToCart() {
        setCount((state) => state + 1)
    }

    return (
        <div>
            <button onClick={addToCart}>Add ao Carrinho ({count})</button>
            <TestClient />
            {children}
        </div>
    )
}