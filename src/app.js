// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};
let totalprice  = 170;
// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}
function updatePrice(state,price){
let priceupdate  = document.getElementById("order");
if(state){
  totalprice += price;
}
else{
  totalprice -= price;
}
console.log(`INR ${totalprice}`);
priceupdate.textContent = `INR ${totalprice}`;
}

function renderPatty() {
  let $patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    $patty.style.display = "inherit";
  } else {
    $patty.style.display = "none";
  }
  updatePrice(state.Patty , ingredients.Patty);
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let $cheese = document.querySelector("#cheese");

  if (state.Cheese) {
    $cheese.style.display = "inherit";
  } else {
    $cheese.style.display = "none";
  }
  updatePrice(state.Cheese , ingredients.Cheese);
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomato  = document.getElementById('tomato');
  if(state.Tomatoes){
    tomato.style.display = `inherit`;
  }
  else{
    tomato.style.display = `none`;
  }
  updatePrice(state.Tomatoes , ingredients.Tomatoes);
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let Onion  = document.getElementById('onion');
  if(state.Onions){
    Onion.style.display = `inherit`;
  }
  else{
    Onion.style.display = `none`;
  }
  updatePrice(state.Onions , ingredients.Onions);
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce  = document.getElementById('lettuce');
  if(state.Lettuce){
    lettuce.style.display = `inherit`;
  }
  else{
    
    lettuce.style.display = `none`;
  }
  updatePrice(state.Lettuce , ingredients.Lettuce);
}

document.querySelector(".btn-patty").onclick = function () {
  this.classList.toggle(`active`);
  state.Patty = !state.Patty;
  let elements = document.getElementsByClassName(`items`);
  if(!state.Patty){
    elements.item(0).textContent = ` `;
  }
  else{
    elements.item(0).textContent = `Patty`;
  }
  renderPatty();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  this.classList.toggle(`active`);
  state.Cheese = !state.Cheese;
  let elements = document.getElementsByClassName(`items`);
  if(!state.Cheese){
    elements.item(1).textContent = ` `;
  }
  else{
    elements.item(1).textContent = `Cheese`;
  }
  renderCheese();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  this.classList.toggle(`active`);
  state.Tomatoes = !state.Tomatoes;
  let elements = document.getElementsByClassName(`items`);
  if(!state.Tomatoes){
    elements.item(2).textContent = ` `;
  }
  else{
    elements.item(2).textContent = `Tomatoes`;
  }
  renderTomatoes();
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  this.classList.toggle(`active`);
  state.Onions = !state.Onions;
  let elements = document.getElementsByClassName(`items`);
  if(!state.Onions){
    elements.item(3).textContent = ` `;
  }
  else{
    elements.item(3).textContent = `Onions`;
  }
  renderOnions();
};

// Trial 2 - Setup event listener for the lettuce button

document.querySelector(".btn-lettuce").onclick = function () {
  this.classList.toggle(`active`);
  state.Lettuce = !state.Lettuce;
  let elements = document.getElementsByClassName(`items`);
  if(!state.Lettuce){
    elements.item(4).textContent = ` `;
  }
  else{
    elements.item(4).textContent = `Lettuce`;
  }
  renderLettuce();
};
//Challenge 1 - Add/Remove the class active to the buttons based on state


//Challenge 2 - Render only the items selected in the ingredients board based on the state


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
