"use strict";

var myDiv = document.getElementById("text");
myDiv.setAttribute("style", "border-color:#FFFFFF;");
fetch('https://pokeapi.co/api/v2/pokemon/1').then(function (response) {
  return console.log(response);
});