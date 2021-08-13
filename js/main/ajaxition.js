
$('html').on('click', '.ajaxition-link', function( event ){


        const link = $(this).attr('href');
        const linkContent = link + ' .ajaxition';
        const container = $('#pageContainer');
        // const menu = $('#menu');
        const linkClicked = $(this);

        const pageIndicator = $('#pageIndicator');
        let pageIndicatorPos = linkClicked.offset();

        const homeLink = $('.homePageLink');
        let homeLinkPos = homeLink.offset();

    container.delay( 50 ).queue(function(){   // Adds class to Transition Psuedo-Element 
        container.addClass('in');
        container.dequeue();
        
    });

    event.preventDefault();     // STOPS LINKS FROM GOING TO OTHER PAGES
    // console.log(link);          // THIS CHECKS THAT MY CODE IS SELECTING CURRENT LINK

    setTimeout (function() {

    // Removes current HTML in Document 
    $('.ajaxition').children().detach();
        // Loads new HTML to page
        container.load(linkContent);
        // console.log(link + ' has been loaded.');  
        $('#menu ul').each(function () {
            $('li').removeClass('current-page');
        });
    }, 200);

    // Removes class from Transition Psuedo Element
    container.delay( 500 ).queue(function(){
        container.removeClass('in');
        linkClicked.parent().addClass('current-page');
        container.dequeue();
    });

    // Re-Initialize Plugins
    setTimeout (function() {
        setupJsPlugins();
        validation();
        typewriter();
        // console.log('Plugins have been Reinitialized.');
        // console.log(pageIndicatorPos.top);

        if (link === 'https://joseph-bowman.netmatters-scs.co.uk/#contact-me') {
        $('#pageContainer #contact-me')[0].scrollIntoView();
        } else {
            $('#top')[0].scrollIntoView();
        }
    }, 550);

    // This checks if a back button is clicked
    if ( $(this).hasClass('back-btn') ) {                       
        pageIndicator.animate({ top: 200, left: 151.766 });
        // console.log('You clicked the return button');    
    } else { //Else move to the link that has been clicked
        pageIndicator.offset({ left: (pageIndicatorPos.left + linkClicked.width()) + 10, top: pageIndicatorPos.top });
    };
    
});