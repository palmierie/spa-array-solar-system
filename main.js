console.log('main.js works');

var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/* Use the forEach method to add the name of each planet to a div element in your HTML with an id of "planets". */
var el = document.getElementById("planets");

planets.forEach((element)=>{
  console.log('element',element);
  el.innerHTML += `<li/> ${element}`;
});

// Use the map method to create a new array where the first letter of each planet is capitalized
var capitalPlanets = planets.map(function (planet){
  return planet.charAt(0).toUpperCase() + planet.slice(1);
});
console.log('capitalPlanets', capitalPlanets);

// Use the filter method to create a new array that contains planets with the letter 'e'
var planetsWithE = planets.filter(function(){
  return planets.indexOf("e") > -1;
});

console.log('planets containing letter E', planetsWithE);


// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];


