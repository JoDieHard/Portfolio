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
let validInputs;

form.on('submit', function(event) {
    checkInputs();

    if (!validInputs) {
        event.preventDefault();
        // console.log(fName.val().trim());
    }

});

function checkInputs() {
    let fNameErr;
    let lNameErr;
    let emailErr;
    let subjectErr;
    let msgErr;

    // First Name Validation ----------------------------------------
    if ( fName.val().trim() === '' || fName.val() === null ) {
        // Show Error & Add Error Class
        setErrorFor(fName, 'Please enter your First Name.');
        fNameErr = true;
        
    } else {
        // Add Success Class
        setSuccessFor(fName);
        fNameErr = false;
        
    }

    // Last Name Validation -----------------------------------------
    if ( lName.val().trim() === '' || lName.val() === null ) {
        // Show Error & Add Error Class
        setErrorFor(lName, 'Please enter your Last Name.');
        lNameErr = true;
    } else {
        // Add Success Class
        setSuccessFor(lName);
        lNameErr = false;
    } //--------------------------------------------------------------

    // E–mail Validation -----------------------------------------
    if ( email.val().trim() === '' || email.val() === null ) {
        // Show Error & Add Error Class
        setErrorFor(email, 'Please Enter an Email.');
        emailErr = true;
    } else if ( !email.val().match(rgx) ) {
        
        setErrorFor(email, 'The Email you have entered is not valid.');
        emailErr = true;
    } else {
        // Add Success Class
        setSuccessFor(email);
        emailErr = false;
    } //--------------------------------------------------------------

    // Subject Validation -----------------------------------------
        if ( subject.val().trim() === '' || subject.val() === null ) {
            // Show Error & Add Error Class
            setErrorFor(subject, 'Please enter a Subject');
            subjectErr = true;
        } else {
            // Add Success Class
            setSuccessFor(subject);
            subjectErr = false;
        } //--------------------------------------------------------------

    // Message  Validation -----------------------------------------
    if ( message.val().trim() === '' || message.val() === null ) {
        // Show Error & Add Error Class
        setErrorFor(message, 'Please enter a Message.');
        msgErr = true;
    } else {
        // Add Success Class
        setSuccessFor(message);
        msgErr = false;
    }

    // ALL VALIDATION CHECK 
    if ( !fNameErr && !lNameErr && !emailErr && !subjectErr && !msgErr ) {
        validInputs = true
    } else {
        validInputs = false
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


// CLOSE MESSAGE SENT NOTIFICATION 

const flashSuccess = $('.success-msg');

flashSuccess.on("click", function(){
    $(this).css("display", "none");
});

