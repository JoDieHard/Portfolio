
// Scroll Reveal Plugin Functions ------------------------------
ScrollReveal().reveal('.project', { delay: 300, interval: 8, reset: true });
ScrollReveal().reveal('.contact', { delay: 300, reset: true });

// Choreographer Plugin Functions ------------------------------

 let choreographer = new Choreographer({
    animations: [
      {
        range: [-1, 1000],
        selector: '.cover-image',
        type: 'scale',
        style: 'transform:scaleY',
        from: 1,
        to: 1.2
      }, 
      {
        range: [-1, 1000],
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
    ]
  })
  
  window.addEventListener('scroll', () => {
    choreographer.runAnimationsAt(window.pageYOffset)
  })

// ----------------------------------------------------

// Custom Side Menu Code ------------------------------

const menu = $('#menu');
const wrap = $('.wrapper');

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