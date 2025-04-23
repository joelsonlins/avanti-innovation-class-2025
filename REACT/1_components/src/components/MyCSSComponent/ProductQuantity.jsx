import {useState} from 'react'

function ProductQuantity() {

  const [product, setProduct] = useState({
    name: "Cadeira",
    quantity:1
  })

  const updateQuantity = () => {
    setProduct((prevProduct)=>({
      ...prevProduct,
      quantity: prevProduct.quantity + 1
    }))
  }

  return (
    <>
      <p>Nome do Produto: {product.name}</p>
      <p>Quantidade do Produto: {product.quantity}</p>

      <button onClick={updateQuantity}>Adicionar Quantidade</button>
      
    </>
  )
}

export default ProductQuantity
