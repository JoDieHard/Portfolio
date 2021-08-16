
const modalInit = function () {

const project = $('.project');
const modal = $('.modal');
const container = $('#modalContainer');
const modalContent = $( '.modal-imgs' );
const content = $( '.modalContent' );
const body = $(' body ');

const nextBtn = $('#modal-next');
const prevBtn = $('#modal-prev');

let carouselPos = 0;

// Array for Project Images 
const projects = [
    [],
    [],
    [ 'js/plugins/modal/assets/ess/ess.png', 'js/plugins/modal/assets/ess/ess_1.png', 'js/plugins/modal/assets/ess/ess_2.png', 'js/plugins/modal/assets/ess/ess_3.png' ],
    [ 'js/plugins/modal/assets/spaced/spaced.png', 'js/plugins/modal/assets/spaced/spaced_1.png', 'js/plugins/modal/assets/spaced/spaced_2.png', 'js/plugins/modal/assets/spaced/spaced_3.png' ],
    [ 'js/plugins/modal/assets/mw/mw.png', 'js/plugins/modal/assets/mw/mw_1.png', 'js/plugins/modal/assets/mw/mw_2.png' ],
    [ 'js/plugins/modal/assets/eg/eg.png', 'js/plugins/modal/assets/eg/eg_1.png', 'js/plugins/modal/assets/eg/eg_2.png' ]
];


// Hide Modal on load
$( document ).ready( function () {
    // console.log("page has loaded");
    container.css('visibility', 'hidden');
    container.css('pointerEvents', 'none');

    setTimeout(function () {
        container.css('visibility', 'visible');
        
    }, 1300);

    
});



// Open Modal
project.on('click', function (e) {

    //Open Modal
    if ( container.hasClass('active') ) {
        return;
    } else if (  !projects[ $( this ).index() ].length ) {
        // console.log('array is empty');
        return;
    } else {
        // console.log( $(this).index() );
        loadContent( $(this).index() );
        thumbNav(); // Activate Thumbnail Nav
        body.css('overflowY', 'hidden'); // Disables scrolling when modal is open
        container.addClass('active');
        container.css('pointerEvents', 'all')
    }
});


//Close Modal 
$('#modal-close').on('click', function (e) {

    if ( container.hasClass( 'active' ) ) {
        container.removeClass('active');
        carouselPos = 0;
        changeSlide();

        setTimeout(function () {
            container.css('pointerEvents', 'none');
            $('.modal-imgs').empty();
            content.empty();
            if ( $('#menu').hasClass('active') ) {
                body.css('overflowY', 'auto'); // Enables scrolling when modal is closed
            }
            
        }, 1250);
    }
});


//----------------------------------------------------

const loadContent = function( targetProject ) {
    for ( let i = 0; i < projects[targetProject].length; i++ )  {
        modalContent.append( '<img class="modalThumb' + (i) + '" src="' + projects[targetProject][i] + '" ></img>')
        content.append( '<div class="modalImageBox"><img class="modalImage' + (i) + '" src="' + projects[targetProject][i] + '" ></img></div>')
        // console.log( projects[targetProject] + ' has been loaded...' )
    } 
};


//----------------------------------------------------

// CAROUSEL LOGIC

// Change Slide
const changeSlide = function() {
    content.css('transform', 'translate3d( -' + (carouselPos * 100) + '%, 0px, 0px )');
};


$('#modal-prev').on('click', function () {

    if ( carouselPos == 0 ) {
        carouselPos = (content.children().length - 1);
    } else if ( carouselPos >= 1 && carouselPos <=  content.children().length ) {
        carouselPos--;
        // console.log(carouselPos);
    }
    changeSlide();
});

$('#modal-next').on('click', function () {
    if ( carouselPos >= 0 && carouselPos <=  (content.children().length - 2) ) { 
        carouselPos++;
        // console.log(carouselPos);
    } else {
        carouselPos = 0;
    };
    changeSlide();
});

const thumbNav = function () {

    $(' img[class^="modalThumb"] ').on('click', function () {
        let select = $( this ).index();

        // console.log( $( this ).index() + 'Thumnail clicked!' );
        carouselPos = select;
        changeSlide();
    });

};

};