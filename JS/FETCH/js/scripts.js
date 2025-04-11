fetch("https://api.github.com/users/joelsonlins")
  .then(response => response.json())
  .then(data => console.log("dados", data))