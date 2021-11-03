<?php
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

include("connection.php");

    // FUNCTIONS 

    // SANITISE INPUT 
    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }





    // FORM INPUT HANDLER 

    $error = "Error! ";
    $fName = $lName = $email = $subject = $msg = $date = "";
    $fNameErr = $lNameErr = $emailErr = $subjectErr = $msgErr = false;
    global $contactSuccess;

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        // FIRST NAME VALIDATION / SANITISATION 
        if ( empty( $_POST["fName"] ) ) {
            $error .= "Please enter your First Name";
            $fNameErr = true;
        } else {
            $fName = test_input( $_POST["fName"] );
            $fNameErr = false;

            if ( !preg_match("/^[a-zA-Z-' ]*$/",$fName) ) {
                $error .= "Name only allows for letters and spaces";
                $fNameErr = true;
            }
        }

        //  LAST NAME VALIDATION / SANITISATION 
        if ( empty( $_POST["lName"] ) ) {
            $error .= "Please enter your Last Name";
            $lNameErr = true;
        } else {
            $lName = test_input( $_POST["lName"] );
            $lNameErr = false;

            if ( !preg_match("/^[a-zA-Z-' ]*$/",$lName) ) {
                $error .= "Name only allows for letters and spaces";
                $lNameErr = true;
            }
        }

        // EMAIL VALIDATION / SANITISATION
        if ( empty( $_POST["email"] ) ) {
            $error .= "Please enter your email";
            $emailErr = true;
        } else {
            $email = test_input( $_POST["email"] );
            $emailErr = false;

            if ( !filter_var($email, FILTER_VALIDATE_EMAIL) ) {
                $error .= "Please enter a valid Email";
                $emailErr = true;
            } 
        }

        // SUBJECT VALIDATION / SANITISATION 
        if ( empty( $_POST["subject"] ) ) {
            $error .= "Please enter a Subject";
            $subjectErr = true;
        } else {
            $subject = test_input( $_POST["subject"] );
            $subjectErr = false;
        }

        // MESSAGE VALIDATION / SANITISATION 
        if ( empty( $_POST["message"] ) ) {
            $error .= "Please enter a Message";
            $msgErr = true;
        } else {
            $msg = test_input( $_POST["message"] );
            $msgErr = false;
            if ( strlen($msg) < 10 ) {
                $error .= "Please enter a longer Message";
                $msgErr = true;
            }
        }

        $date = date("F j, Y, g:i a");
        // var_dump($date);

        if ( $fNameErr || $lNameErr || $emailErr || $subjectErr || $msgErr ) {
            // echo $error;
        } else {
            //Do success stuff here...
            try {
                $sql = "INSERT INTO contact ( `first_name`, `last_name`, `email`, `subject`, `message`, `date_sent` ) VALUES(?, ?, ?, ?, ?, ?)";
                $db->prepare($sql)->execute([$fName, $lName, $email, $msg, $subject, $date]);

                // echo "Your entry has been added to the database";
                $contactSuccess = true;
                $error = "";

                $db = null;

            } catch ( Exception $e ) {
                echo "Bad Query: "; 
                echo $e->getMessage();
                $contactSuccess = false;
            }
          }
    }

  