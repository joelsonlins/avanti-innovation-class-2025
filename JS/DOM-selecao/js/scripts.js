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

// seleção por tag

const titles = document.getElementsByTagName("h2")

console.log("titles", titles)

for(title of titles){
  title.style.color="orange"
  title.style.fontSize = "40px";
}