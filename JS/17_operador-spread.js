// variaveis

const numeros = [1,2,3,4]

const numeros2 = [5,6,7,8,9]

// copiar um array

const copia = [...numeros]

//console.log(copia)

//concatenar arrays

const arraysConcatenados = [...numeros, ...numeros2]

//console.log(arraysConcatenados)

// adicionando elementos no arrau

const novoArray = [10, ...arraysConcatenados, 30]

//console.log(novoArray)

// objetos

const usuario = {nome:"Ana", idade:30}

const copiaUsuario = {...usuario}

//console.log(copiaUsuario)

const usuarioAtualizado = {...usuario, idade:25, cidade:"Florianópolis"}
//console.log(usuarioAtualizado)

const novoUsuario ={nome:"João",idade:25}

const novosDadosDoUsuario = {genero:"Masculino",dataNascimento:"11/05/2000"}

const usuarios ={...novoUsuario, ...novosDadosDoUsuario}

console.log(usuarios)