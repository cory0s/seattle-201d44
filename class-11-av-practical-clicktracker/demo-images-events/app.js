'use strict';

//global variables
var allGoats = [];
var goatpic = document.getElementById('goatpic');

function GoatPic(name) {
  // images/sassy-goat.jpg
  this.filepath = `images/${name}.jpg`;
  this.name = name;
  this.views = 0;
  allGoats.push(this);
}

new GoatPic('sassy-goat');
new GoatPic('cruisin-goat');
new GoatPic('float-your-goat');
new GoatPic('goat-away');
new GoatPic('goat-out-of-hand');
new GoatPic('kissing-goat');
new GoatPic('smiling-goat');
new GoatPic('sweater-goat');
new GoatPic('the-goat');

function showRandomGoat() {
  var random = Math.floor(Math.random() * allGoats.length);
  goatpic.src = allGoats[random].filepath;
  goatpic.alt = allGoats[random].name;
  goatpic.title = allGoats[random].name;
  allGoats[random].views++;
}

showRandomGoat()

goatpic.addEventListener('click', handleClick);

function handleClick(event) {
  console.log(event.target);
  showRandomGoat();
}

