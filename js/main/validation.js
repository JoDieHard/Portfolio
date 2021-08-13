const validation = function () {

const form = $('form#contact-form');
const fName = $('#fName');
const lName = $('#lName');
const email = $('#email');
const subject = $('#subject');
const message = $('#message');
// const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
// const rgx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const rgx = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

form.on('submit', function(event) {
    event.preventDefault();
    checkInputs();
    // console.log(fName.val().trim());
});

function checkInputs() {

    // First Name Validation ----------------------------------------
    if ( fName.val().trim() === '' || fName.val() === null ) {
        // Show Error & Add Error Class
        setErrorFor(fName, 'Please enter your First Name.');
    } else {
        // Add Success Class
        setSuccessFor(fName);
        
    }

    // Last Name Validation -----------------------------------------
    if ( lName.val().trim() === '' || lName.val() === null ) {
        // Show Error & Add Error Class
        setErrorFor(lName, 'Please enter your Last Name.');
    } else {
        // Add Success Class
        setSuccessFor(lName);
    } //--------------------------------------------------------------

    // E–mail Validation -----------------------------------------
    if ( email.val().trim() === '' || email.val() === null ) {
        // Show Error & Add Error Class
        setErrorFor(email, 'Please Enter an Email.');
    } else if ( !email.val().match(rgx) ) {
        
        setErrorFor(email, 'The Email you have entered is not valid.');
    } else {
        // Add Success Class
        setSuccessFor(email);
    } //--------------------------------------------------------------

    // Subject Validation -----------------------------------------
        if ( subject.val().trim() === '' || subject.val() === null ) {
            // Show Error & Add Error Class
            setErrorFor(subject, 'Please enter a Subject');
        } else {
            // Add Success Class
            setSuccessFor(subject);
        } //--------------------------------------------------------------

    // Message  Validation -----------------------------------------
    if ( message.val().trim() === '' || message.val() === null ) {
        // Show Error & Add Error Class
        setErrorFor(message, 'Please enter a Message.');
    } else {
        // Add Success Class
        setSuccessFor(message);
    }
}

// This is the Error Message Generator.
function setErrorFor(input, msg) {
    const formControl = input.parent();
    const small = formControl.children('.errorMsg');

    // Add Error Message inside Small 
    small.text(msg);

    // Add Error Class
    formControl.addClass('error');
    formControl.removeClass('success');
    
    // Removes Error after 5 seconds 
    formControl.delay( (10 * 1000) ).queue(function(){   
        formControl.removeClass('error');
        formControl.dequeue();
    });

}

function setSuccessFor(input, msg) {
    const formControl = input.parent();

    // Add Success Class
    formControl.addClass('success');
    formControl.removeClass('error');
}

//------------------------------------------------------

};

validation();