$(document).ready(function(){
   preventSubmitEvents(); 
});



function preventSubmitEvents(){
   
    var form = document.getElementsByTagName("form");
    
    if(form[0].id == "contactForm")
        {
            form[0].addEventListener("submit",event => {
            event.preventDefault();
            contactFormSubmission();
            console.log("form submission stopped");
            });
        }
    else if(form[0].id == "signupForm")
            {form[0].addEventListener("submit",event => {
            event.preventDefault();
            signupFormSubmission();
            console.log("form submission stopped");
            });
            }
}

function contactFormSubmission(){
  
    var values = {};
    var i = 0;
    $inputs = $("#contactForm :input");
    $inputs.each(function(){
        values[i] = $(this).val();
        i++;
    });
    
    if(values[0]!="")
        {
            $.ajax({
                    method: "POST",
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSfnvfP8ZDVQ3u4gMj0LBgOl1IUqCsFydeoiM9qKC7-EPoJTCw/formResponse",
                    data: {
                        'entry.1988472699' : values[0],
                        'entry.1756766527' : values[1],
                        'entry.1114666575' : values[2],
                        'entry.644819668' : values[3],
                        'entry.2102364412' : values[4]
                    }
                }).done(function (){
                    console.log("contact form data sent to sheet");
                });        
        }
    
    
}
    
function signupFormSubmission(){
  
    var values = {};
    var i = 0;
    $inputs = $("#signupForm :input");
    $inputs.each(function(){
        values[i] = $(this).val();
        i++;
    });
    
    if(values[0]!="")
        {
            $.ajax({
                    method: "POST",                   url:"https://docs.google.com/forms/d/e/1FAIpQLSfRVa61oenHuEVKDLgfTFOUQ8jnU3oGHlu_a9ggIpscslyCAQ/formResponse",
                    data: {
                        'entry.1697715006' : values[0],
                        'entry.1178534794' : values[1],
                        'entry.690718033' : values[2],
                        'entry.950998382' : values[3],
                        'entry.1257021985' : values[4]
                    }
                }).done(function (){
                    console.log("contact form data sent to sheet");
                });        
        }
    
    
}    

