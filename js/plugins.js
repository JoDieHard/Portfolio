
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

 let choreographer = new Choreographer({
    animations: [
      {
        range: [100, 500],
        selector: '.cover-image',
        type: 'scale',
        style: 'transform:scaleY',
        from: 1,
        to: 1.15
      }, 
      {
        range: [100, 500],
        selector: '.scroll-down-btn',
        type: 'scale',
        style: 'transform:translateY',
        from: 0,
        to: -60,
        unit: 'px'
      },
      {
        range: [-1, 500],
        selector: '.intro-text',
        type: 'scale',
        style: 'transform:translateY',
        from: 0,
        to: 250,
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
        range: [250, 500],
        selector: '.intro-text, .scroll-down-btn',
        type: 'scale',
        style: 'opacity',
        from: 1,
        to: 0
      }
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
    choreographer.runAnimationsAt(window.pageYOffset)
  });


// ----------------------------------------------------

// Custom Side Menu Code ------------------------------

const menu = $('#menu');
const wrap = $('.wrapper, .secondary-wrapper');

menu.on('click tap', function(){
  if ( $(this).hasClass('active')) {
    $(this).removeClass('active');
    wrap.removeClass('active');
    // $(this).css('transform', 'translateX( 0px )');
    console.log('menu is closed.');
  } else {
    $(this).addClass('active');
    wrap.addClass('active');
    // $(this).css('transform', 'translateX( -300px )');
    console.log('menu is open.');
    
  }
});


// function myFunction(x) {
//   if (x.matches) { // If media query matches
    
//   } else {
    
//   }
// }


// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes