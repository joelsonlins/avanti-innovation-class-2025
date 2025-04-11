const inputForm = document.querySelector("#busca")
const botaoBusca = document.querySelector("#botaoBusca")
const resultadoDiv = document.querySelector("#resultado")

inputForm.addEventListener("keydown", (e)=>{
  console.log(e.key)
})

inputForm.addEventListener("focus", (e)=>{
  inputForm.style.backgroundColor = "#FF0"
})

inputForm.addEventListener("blur", (e)=>{
  inputForm.style.backgroundColor = ""
})

function searchResult(){
  const valorBusca = inputForm.value.trim()
  if(valorBusca){
    resultadoDiv.textContent = `Você buscou: ${valorBusca}`
  }else{
    resultadoDiv.textContent = `Você não buscou nada`
  }
}

botaoBusca.addEventListener("click",(e)=>{
  searchResult()
})