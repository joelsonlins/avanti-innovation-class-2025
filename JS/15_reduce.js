const valores = [2,3,6,9]

const products=[
  {nome:"Cadeira", price:400},
  {nome:"Mesa", price:600},
  {nome:"tv", price:1900}
]
const somaTotalDosValores = valores.reduce((acc, val)=>acc+val,0)
const somaTotalDosProdutos = products.reduce((acc, product)=>acc+product.price,0)

//console.log(somaTotalDosValores)
console.log(somaTotalDosProdutos)