const myDiv = document.getElementById("text");
myDiv.setAttribute("style", "border-color:#FFFFFF;");

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then((response) => {
      return console.log(response)
  })