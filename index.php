<!DOCTYPE html>

<?php  include('php/contactForm.php'); ?>

<html lang="en">
    
    <?php include('inc/head.php') ?>

    <body>
        <div class="active" id="pageContainer">
        <div class="wrapper ajaxition">

        <?php  include('inc/modal.php')  ?>
        
        <?php if ($contactSuccess) : ?>
            <div class="success-msg"> 
                    <p>Your Message has been sent!  </p>
                    <i class="fas fa-times"> </i>       
            </div>
            <?php endif; ?>

        <!--------  COVER IMAGE SECTION -------->
        <div class="overflow">
            <div class="cover-image" id="top">
                <div class="container"> 
                    <h1 class="intro-text intro-1" id="t1">My Name is Joseph Bowman</h1>
                    <p class="intro-text intro-2" id="t2">I am a Web Developer and Graphic Designer</p>
                    <a href="#scroll-down" class="scroll-down-btn"> <div class="scrollButton">Scroll Down <i class="fas fa-chevron-down"></i></div> </a>
                </div>
            </div>
        </div>

        <!--------  PROJECTS SECTION ------->

        <section class="projects" id="my-portfolio">
            <div class="container" id="scroll-down">

                <!-- Project 1 - Netmatter's Reflection  -->
                <a class="project" href="https://joseph-bowman.netmatters-scs.co.uk/netmatters-reflection/" target="_blank">

                    <i class="fas fa-share"></i>
                    <p class="view-prjct">Click to view project</p>
                    <p class="prjct-desc">This project is a recreation of the Netmatter's website. This challenge was set to demonstrate my programming skills across multiple languages.</p>

                    <img class="prjct-img" src="assets/eg-screens/nm-ref/nm-reflection.png" type="image/png" alt="A screenshot of my recreation of Nettmattter's website.">
                    
                    <video class="prjct-mp4" width="auto" height="100%" alt="A .mp4 of my recreation of Nettmattter's website." muted loop poster autoplay playsinline>
                        <source src="assets/eg-screens/nm-ref/nm-ref.mp4" type="video/mp4">
                    </video>

                    <div class="prjct-text">
                        <h2>Netmatters Reflection</h2>
                    </div>

                </a>

                <!-- Project 2  -->
                <a class="project" href="https://joseph-bowman.netmatters-scs.co.uk/js-challenge/" target="_blank">

                    <i class="fas fa-share"></i>
                    <p class="view-prjct">Click to view project</p>
                    <p class="prjct-desc"> This was the outcome of a challenge to create an app to assign random images to specified emails of the user's choice. </p>

                    <img class="prjct-img" src="assets/eg-screens/js-ref/js-ref.png" type="image/png" alt="A screenshot of my Javascript Project">
                    
                    <video class="prjct-mp4" width="auto" height="100%" alt="An MP4 of my project." muted loop poster autoplay playsinline>
                        <source src="assets/eg-screens/js-ref/js-ref.mp4" type="video/mp4">
                    </video>

                    <div class="prjct-text">
                        <h2>JavaScript Reflection</h2>
                    </div>

                </a>

                <!-- Project 3  -->
                <a class="project">

                    <i class="fas fa-share"></i>
                    <p class="view-prjct">Click to view project</p>
                    <p class="prjct-desc"> A university rebranding project for the Emergency Services Show at the NEC in Birgmingham. </p>

                    <img class="prjct-img" src="assets/eg-screens/ess/ess.png" type="image/png" alt="The logo for my Emergency Services Show project.">
                    
                    <video class="prjct-mp4" width="auto" height="100%" alt="An MP4 of my project." muted loop poster autoplay playsinline>
                        <source src="" type="video/mp4">
                    </video>

                    <div class="prjct-text">
                        <h2>Emergency Services Show</h2>
                    </div>

                </a>

                <!-- Project 4 -->
                <a class="project">

                    <i class="fas fa-share"></i>
                    <p class="view-prjct">Click to view project</p>
                    <p class="prjct-desc"> An online competition brief that focused on developing an identity for a brand based in the near future that offers space travel to the public. </p>

                    <img class="prjct-img" src="assets/eg-screens/spaced/spaced.png" type="image/png" alt="A screenshot of my Spaced project.">
                    
                    <video class="prjct-mp4" width="auto" height="100%" alt="An MP4 of my project." muted loop poster autoplay playsinline>
                        <source src="assets/eg-screens/spaced/spaced.mp4" type="video/mp4">
                    </video>

                    <div class="prjct-text">
                        <h2>Spaced</h2>
                    </div>

                </a>

                <!-- Project 5 -->
                <a class="project">

                    <i class="fas fa-share"></i>
                    <p class="view-prjct">Click to view project</p>
                    <p class="prjct-desc"> A brief that focused on packaging a Japanese sake with a target audience in the UK. </p>

                    <img class="prjct-img" src="assets/eg-screens/mw/mw.png" type="image/png" alt="The logo for my Japanese Sake packaging design project.">
                    
                    <video class="prjct-mp4" width="auto" height="100%" alt="An MP4 of my project." muted loop poster autoplay playsinline>
                        <source src="" type="video/mp4">
                    </video>

                    <div class="prjct-text">
                        <h2>Mountain Water Sake</h2>
                    </div>

                </a>

                <!-- Project 6 -->
                <a class="project">

                    <i class="fas fa-share"></i>
                    <p class="view-prjct">Click to view project</p>
                    <p class="prjct-desc"> A brand identity for a museum that focuses on capturing the Earth from unusual or extraordinary perspectives. </p>

                    <img class="prjct-img" src="assets/eg-screens/eg/eg.png" type="image/png" alt="A logo for my Earth Gallery project.">
                    
                    <video class="prjct-mp4" width="auto" height="100%" alt="An MP4 of my project." muted loop poster autoplay playsinline>
                        <source src="" type="video/mp4">
                    </video>

                    <div class="prjct-text">
                        <h2>Earth Gallery</h2>
                    </div>

                </a>
                
            </div>
        </section>

        <!--------  CONTACT SECTION -------->

        <div class="contact" id="contact-me"> 

            <div class="container">
                <div class="contact-info">
                    <h2>Get In Touch</h2>
                    <p>Please feel free to contact me through this website, it is the best way to get my attention if you have a job for me.</p>
                    <a class="c-text" href="tel:+44-7720323247">0772 0323 247</a>
                    <a class="c-button" href="tel:+44-7720323247">Give me a call <i class="fas fa-phone"></i></a>
                    <a class="c-text" href="mailto:josephbowmandesigns@gmail.com?subjet=Job%20enquiry%20%7C%20From%20your%20Portfolio">josephbowmandesigns@gmail.com</a>
                    <a class="c-button" href="mailto:josephbowmandesigns@gmail.com?subjet=Job%20enquiry%20%7C%20From%20your%20Portfolio">Send me an email <i class="fas fa-envelope"></i></a>
                    <p>I will respond to your email as soon as possible. <br> Alternatively, fill the form below to send me a message from here!</p>
                </div>
                <div class="contact-form">
                    <form action="index.php" method="POST" id="contact-form" novalidate>
                        <div class="form-input <?php if ($fNameErr) :?> error" <?php elseif ($contactSuccess) : ?> success" <?php else : ?> " <?php endif;?> >
                            <label for="fName">First Name:</label>
                            <input type="text" placeholder="First Name" name="fName" id="fName">
                            <i class="fas fa-check-circle success"></i>
                            <i class="fas fa-exclamation-circle error"></i>
                            <small class="errorMsg">Error Message</small>

                        </div>
                        <div class="form-input <?php if ($lNameErr) :?> error" <?php elseif ($contactSuccess) : ?> success" <?php else : ?> " <?php endif;?>>
                            <label for="lName">Last Name:</label>
                            <input type="text" placeholder="Last Name" name="lName" id="lName">
                            <i class="fas fa-check-circle success"></i>
                            <i class="fas fa-exclamation-circle error"></i>
                            <small class="errorMsg">Error Message</small>
                        </div>
                        <div class="form-input <?php if ($emailErr) :?> error" <?php elseif ($contactSuccess) : ?> success"  <?php else : ?> " <?php endif;?>>
                            <label for="email">Email:</label>
                            <input type="email" placeholder="E-Mail" name="email" id="email" >
                            <i class="fas fa-check-circle success"></i>
                            <i class="fas fa-exclamation-circle error"></i>
                            <small class="errorMsg">Error Message</small>
                        </div>
                        <div class="form-input <?php if ($subjectErr) :?> error" <?php elseif ($contactSuccess) : ?> success"  <?php else : ?> " <?php endif;?>>
                            <label for="subject">Subject:</label>
                            <input type="text" placeholder="Subject" name="subject" id="subject">
                            <i class="fas fa-check-circle success"></i>
                            <i class="fas fa-exclamation-circle error"></i>
                            <small class="errorMsg">Error Message</small>
                        </div>
                        <div class="form-input <?php if ($msgErr) :?> error" <?php elseif ($contactSuccess) : ?> success"  <?php else : ?> " <?php endif;?>>
                            <label for="message">Message:</label>
                            <textarea placeholder="Message..." form="contact-form" name="message" id="message"></textarea>
                            <i class="fas fa-check-circle success"></i>
                            <i class="fas fa-exclamation-circle error"></i>
                            <small class="errorMsg">Error Message</small>
                        </div>

                        <input type="submit" value="Submit" id="fSubmit">
                    </form>
                    
                </div>
            </div>
        </div>

        <?php  include('inc/footer.php')  ?>

        </div>
    </div>

    <?php  include('inc/menu.php');  ?>

    <?php include('inc/scripts.php'); ?>

    </body>
</html>