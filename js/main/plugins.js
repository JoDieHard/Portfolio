
// This can be used to RE-INITIALIZE all JavaScript when the page is reloaded by AJAX.
const setupJsPlugins = function() {

  // Prism JS Call 
  Prism.highlightAll();

// Scroll Reveal Plugin Functions ------------------------------
ScrollReveal().reveal('#pageContainer .project', { delay: 250, interval: 8, reset: false });
ScrollReveal().reveal('#pageContainer .contact', { delay: 250, reset: false });

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
        from: .9,
        to: 1.4,
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
    ]
  })



  window.addEventListener('scroll', function () {
    headerAnim.runAnimationsAt(window.pageYOffset)
  });

};            //--------------- End of setupJSPlugins funciton
  


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
    $( 'body' ).css("overflowY", "hidden");  // Stops scrolling when menu is open
    wrap.delay( 350 ).queue(function(){
      wrap.removeClass('active');
      wrap.dequeue();
    });
    // console.log('menu is open.');

  } else {  // ELSE CLOSE MENU
    $(this).delay( 350 ).queue(function(){
      $(this).addClass('active');
      $( 'body' ).css("overflowY", "auto"); //Allows page to be scrolled again
      $(this).dequeue();
    });
    wrap.addClass('active');          
    // console.log('menu is closed.');
  }

  isRunning = true;
  // console.log( isRunning );

  setTimeout(function(){ isRunning = false; /* console.log( isRunning ); */ }, 400 );
});

//---------------------- THIS IS THE FUNCTION THAT CLOSES THE MENU IF PAGE IS CLICKED --------------------------------------|
wrap.on('mouseenter touchstart swiperight', function(event){
  // console.log(event.type);
  // console.log(event.target);
  if ( isRunning ) {
    return;
  } else if ( event.target.nodeName == 'A' || event.target.nodeName == 'SPAN' ) {  // IF A MENU ELEMENT IS CLICKED, DO NOTHING.
    return;   
  } else if ( menu.hasClass('active') && event.type == 'swiperight' ) {   // This was supposed to open the menu if the pageContainer is swiped right 
    menu.removeClass('active');
    wrap.delay( 350 ).queue(function(){
      wrap.removeClass('active');
      wrap.dequeue();
    });
  } else {
    wrap.addClass('active');
    console.log('menu is open.');
    menu.delay( 350 ).queue(function(){
      menu.addClass('active');
      $( 'body' ).css("overflowY", "auto"); //Allows page to be scrolled again
      menu.dequeue();
    });
  }
  isRunning = true;
  setTimeout(function(){ isRunning = false; /* console.log( isRunning ); */ }, 400 );
}); // ----------------------------------------------------------------------------------------------------------------------|

};

menuJS();
setupJsPlugins();
// setupTypewriter();


// wrap.on('click', function(e){
//   console.log(e);
// });