import { useState } from "react"

// Test é um Client Component, por ser renderizado
// dentro do componente 'AddToCartButton' que ja é
// um Client Component
    // uso de 'async' não irá funcionar, por exemplo.
export function TestClient() {
    const [count, setCount] = useState(0)

    function upClickCounts() {
        setCount(state => state + 1)
    }

    return <h1 onClick={upClickCounts}>Hello World, {count} clicks</h1>
}