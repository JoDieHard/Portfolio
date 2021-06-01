
$(' #menu').on('click', '.ajaxition-link', function( event ){

    const link = $(this).attr('href');
    const linkContent = link + ' .ajaxition';
    const container = $('#pageContainer');



container.delay( 50 ).queue(function(){   // Adds class to Transition Psuedo-Element 
    container.addClass('in');
    container.dequeue();
});

event.preventDefault();     // STOPS LINKS FROM GOING TO OTHER PAGES
console.log(link);          // THIS CHECKS THAT MY CODE IS SELECTING CURRENT LINK

setTimeout (function() {

// Removes current HTML in Document 
$('.ajaxition').children().detach();
    // Loads new HTML to page
    container.load(linkContent);
    console.log(link + ' has been loaded.');  
}, 1000);

// Removes class from Transition Psuedo Element
container.delay( 1010 ).queue(function(){
    container.removeClass('in');
    container.dequeue();
});

// Re-Initialize Plugins
setTimeout (function() {
    setupJsPlugins();
    console.log('Plugins have been Reinitialized.');
    if (link === 'https://joseph-bowman.netmatters-scs.co.uk/#contact-me') {
    $('#pageContainer #contact-me').scrollIntoView();
}
}, 1050);



});