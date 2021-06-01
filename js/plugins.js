
// This can be used to RE-INITIALIZE all JavaScript when the page is reloaded by AJAX.
const setupJsPlugins = function() {

// Scroll Reveal Plugin Functions ------------------------------
ScrollReveal().reveal('#pageContainer .project', { delay: 250, interval: 8, reset: false });
ScrollReveal().reveal('#pageContainer .contact', { delay: 250, reset: false });

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

// Choreographer Plugin Functions ------------------------------

 let headerAnim = new Choreographer({
    animations: [
      {
        range: [100, 400],
        selector: '#pageContainer .cover-image',
        type: 'scale',
        style: 'transform:translateY',
        from: 0,
        to: 230,
        unit: 'px'
      }, 
      {
        range: [100, 400],
        selector: '#pageContainer .scroll-down-btn',
        type: 'scale',
        style: 'transform:translateY',
        from: 0, 
        to: -210,
        unit: 'px'
      },
      {
        range: [-1, 250],
        selector: '#pageContainer .intro-text',
        type: 'scale',
        style: 'transform:translateY',
        from: 0,
        to: 80,
        unit: 'px'
      },
      {
        range: [-1, 500],
        selector: '#pageContainer .intro-text',
        type: 'scale',
        style: 'transform:scale',
        from: 1,
        to: 1.5,
      },
      {
        range: [500, 600],
        selector: '#pageContainer .intro-text',
        type: 'scale',
        style: 'opacity',
        from: 1,
        to: 0,
      },
      {
        range: [750, 850],
        selector: '#pageContainer .scroll-down-btn',
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


/*
// Animsition Plugin Functions ------------------------------
  $(document).ready(function() {
    $(".animsition-overlay").animsition({
      inClass: 'overlay-slide-in-top',
      outClass: 'overlay-slide-out-top',
      inDuration: 1500,
      outDuration: 800,
      linkElement: '.animsition-link',
      // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
      loading: true,
      loadingParentElement: 'body', //animsition wrapper element
      loadingClass: 'animsition-loading',
      loadingInner: '', // e.g '<img src="loading.svg" />'
      timeout: false,
      timeoutCountdown: 5000,
      onLoadEvent: true,
      browser: [ 'animation-duration', '-webkit-animation-duration'],
      // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
      // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
      overlay : true,
      overlayClass : 'animsition-overlay-slide',
      overlayParentElement : 'body',
      transition: function(url){ window.location.href = url; }
    });
  });
*/


};
  


// ----------------------------------------------------

// Custom Side Menu Code ------------------------------

const menuJS = function () {

const menuLinks = $('.page-link');
const menu = $('#menu');
// const wrap = $('.wrapper, .secondary-wrapper');
const wrap = $('#pageContainer');
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
    // console.log('menu is open.');

  } else {  // ELSE CLOSE MENU
    $(this).delay( 350 ).queue(function(){
      $(this).addClass('active');
      $(this).dequeue();
    });
    wrap.addClass('active');          
    // console.log('menu is closed.');
  }

  isRunning = true;
  // console.log( isRunning );

  setTimeout(function(){ isRunning = false; /* console.log( isRunning ); */ }, 400 );
});

};

menuJS();
setupJsPlugins();
// setupTypewriter();