
$('.ajaxition-link').on('click', function( event ){

    const link = $(this).attr('href');
    const linkContent = link + ' .ajaxition';

event.preventDefault();     // STOPS LINKS FROM GOING TO OTHER PAGES
console.log(link);          // THIS CHECKS THAT MY CODE IS SELECTING CURRENT LINK
$('.ajaxition').children().detach();
$('#pageContainer').load(linkContent);
console.log(link + ' has been loaded.');  

});