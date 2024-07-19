'use client'  // -> Run Client Component

type ProductProps = {
    params: {
        data: string[]
    }
}

export default function Product({params}:ProductProps) {
    const [productId, size, color] = params.data
    console.log(params)
    return (
      <div>
        <h1>Product: {productId}</h1>
        <p>Size: {size}</p>
        <p>Color: {color}</p>
      </div>
    );  
}