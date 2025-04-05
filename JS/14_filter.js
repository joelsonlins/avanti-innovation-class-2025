const valores = [2,3,6,9]

const users=[
  {nome:"Luciano", age:40},
  {nome:"Pedro", age:15},
  {nome:"Maria", age:54}
]

const numerosMaioresQueCinco = valores.filter(num=>num>5)

const numerosPares = valores.filter(num => num%2 ===0)

console.log(numerosMaioresQueCinco)

console.log(numerosPares)

const menoresDeIdade = users.filter(user=>user.age >18)

console.log(menoresDeIdade)