function goodMorning(name){
  //console.log("Good Morning");
  return `Good Morning, ${name}`;
}


const greetings = goodMorning("Bruno");

console.log("Saudação,",greetings)

const goodNight = name =>{
  return `Boa noite, ${name}`;
}

console.log(goodNight("Luciano"))

const adicao = (x,y) => x+y;
const subtraco = (x,y) => x-y;
const multiplicacao = (x,y) => x*y;
const divisap = (x,y) => x/y;

console.log(`Resultado:${adicao(2,3)}`)