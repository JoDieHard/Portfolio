
// Scroll Reveal Plugin Functions ------------------------------
ScrollReveal().reveal('.project', { delay: 250, interval: 8, reset: true });
ScrollReveal().reveal('.contact', { delay: 250, reset: false });

// TypeWriterJS Plugin Functions ------------------------------

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
  .pauseFor(500)

//------------------------------------------

var app = document.getElementById('t2');
 
var typewriterTwo = new Typewriter(app, {
  loop: false,
  delay: 45,
});
 
typewriterTwo
  .pauseFor(4000)
  .typeString('I am a Web Developer and Graphic Designer')
  .start()

// Choreographer Plugin Functions ------------------------------

 let headerAnim = new Choreographer({
    animations: [
      {
        range: [100, 400],
        selector: '.cover-image',
        type: 'scale',
        style: 'transform:translateY',
        from: 0,
        to: 230,
        unit: 'px'
      }, 
      {
        range: [100, 400],
        selector: '.scroll-down-btn',
        type: 'scale',
        style: 'transform:translateY',
        from: 0,
        to: -210,
        unit: 'px'
      },
      {
        range: [-1, 250],
        selector: '.intro-text',
        type: 'scale',
        style: 'transform:translateY',
        from: 0,
        to: 80,
        unit: 'px'
      },
      {
        range: [-1, 500],
        selector: '.intro-text',
        type: 'scale',
        style: 'transform:scale',
        from: 1,
        to: 1.5,
      },
      {
        range: [500, 600],
        selector: '.intro-text',
        type: 'scale',
        style: 'opacity',
        from: 1,
        to: 0,
      }

      // {
      //   range: [450, 550],
      //   selector: '.intro-text, .scroll-down-btn',
      //   type: 'scale',
      //   style: 'opacity',
      //   from: 1,
      //   to: 0
      // }
    ]
  })
  
//   function breakpointS(windowX) {
//   window.addEventListener('scroll', () => {

//     if (!windowX.matches) { // If media query matches
//     choreographer.runAnimationsAt(window.pageYOffset)
//     }
//   })
// };

//   const windowX = window.matchMedia("(max-width: 400px)");
//   breakpointS(windowX) // Call listener function at run time
// windowX.addListener(breakpointS) // Attach listener function on state changes


  window.addEventListener('scroll', () => {
    headerAnim.runAnimationsAt(window.pageYOffset)
  });
  


// ----------------------------------------------------

// Custom Side Menu Code ------------------------------
const menuLinks = $('.page-link');
const menu = $('#menu');
const wrap = $('.wrapper, .secondary-wrapper');
let isRunning;


menu.on('click tap', function(event){
  // console.log(event.target);
  if ( isRunning ) {
    return;

  } else if ( event.target.nodeName == 'A' || event.target.nodeName == 'SPAN' ) {  // IF A MENU ELEMENT IS CLICKED, DO NOTHING.
    return;   
  } else if ( $(this).hasClass('active')) { // IF MENU IS ACTIVE THEN CLOSE MENU.
    $(this).removeClass('active');
    wrap.delay( 350 ).queue(function(){
      wrap.removeClass('active');
      wrap.dequeue();
    });
    console.log('menu is open.');

  } else {  // ELSE CLOSE MENU
    $(this).delay( 350 ).queue(function(){
      $(this).addClass('active');
      $(this).dequeue();
    });
    wrap.addClass('active');          
    console.log('menu is closed.');
  }

  isRunning = true;
  console.log( isRunning );

  setTimeout(function(){ isRunning = false; console.log( isRunning ); }, 500 );
});

// function myFunction(x) {
//   if (x.matches) { // If media query matches
    
//   } else {
    
//   }
// }


// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes