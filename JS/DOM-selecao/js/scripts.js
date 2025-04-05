// seleção por ID

const content = document.getElementById("content")

console.log("content", content)

content.innerHTML = `<p>Parágrafo de texto</p>`
content.style.backgroundColor ="#F00"
content.style.fontSize="30px"

// seleção por classe

const classText = document.getElementsByClassName("text")

console.log("classtext", classText)

for(text of classText){
  text.style.color="blue"
}