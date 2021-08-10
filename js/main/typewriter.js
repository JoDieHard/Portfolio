const typewriter = function () {

// TypeWriterJS Plugin Functions ------------------------------
/*
var app = document.getElementById('t1');
 
var typewriterOne = new Typewriter(app, {
  loop: false,
  delay: 45,
});
 
typewriterOne
  .start()
  .pauseFor(50)
  .typeString('My name is Joseph Bowman')
  .pauseFor(300)
  .deleteChars(11)
  .typeString(' Bowman')
  .pauseFor(500) */

//------------------------------------------

var app = document.getElementById('t2');
 
var typewriterTwo = new Typewriter(app, {       
  loop: false,
  delay: 45,
});
 
typewriterTwo
  .pauseFor(300)
  .typeString('I am a Web Developer and Graphic Designer')
  .start()

};

typewriter();