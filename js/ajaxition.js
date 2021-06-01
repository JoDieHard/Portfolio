
$(' #menu').on('click', '.ajaxition-link', function( event ){

    const link = $(this).attr('href');
    const linkContent = link + ' .ajaxition';

event.preventDefault();     // STOPS LINKS FROM GOING TO OTHER PAGES
console.log(link);          // THIS CHECKS THAT MY CODE IS SELECTING CURRENT LINK

// Adds class to Transition Psuedo-Element 
    $('#pageContainer').addClass('in');

setTimeout (function() {

    // Removes current HTML in Document 
$('.ajaxition').children().detach();

// Loads new HTML to page
$('#pageContainer').load(linkContent);
console.log(link + ' has been loaded.');  


}, 1000);

// Removes class from Transition Psuedo Element
$('#pageContainer').removeClass('in');

// Re-Initialize Plugins
setTimeout (function() {
    setupJsPlugins();
    console.log('Plugins have been Reinitialized.');
}, 10);



});