window.onload = function galleryLoad() {
    
 
    var fstname = document.getElementById("fname-id");

    var lstname = document.getElementById("lname-id");

    var address = document.getElementById("laddress-id");

    var city = document.getElementById("lcity-id");

    var state = document.getElementById("lstate-id");

    var zip = document.getElementById("zipcode-id");

    var code = document.getElementById("phone1-id");

    var phone = document.getElementById("phone2-id");

    var email = document.getElementById("email1-id");

    var cemail = document.getElementById("email2-id");

    var vegan = document.getElementById("vegan-id");

    var vegetarian = document.getElementById("vegetarian-id");

    var nonvegetarian = document.getElementById("nonvegetarian-id");

    var comment = document.getElementById("comm-id");
    
    var fstsubmit = document.getElementById("submit-1");

    var scdsubmit = document.getElementById("submit-2");

    
    
    fstname.value = "first name"; 
    
    lstname.value = "last name";  
    
    address.value = "8723 eastight dr";
    
    city.value = "city";  
    
    zip.value = "zip code";
    
    email.value = "email";
    
    cemail.value = "confirm email";
    
    

    fstname.addEventListener("click", function () {  
        
        fstname.value = '';
        
    });
    
    lstname.addEventListener("click", function () { 
        
        lstname.value = '';
        
    });
    
    address.addEventListener("click", function () {  
        
        address.value = '';
        
    });
    
    city.addEventListener("click", function () {  
        
        city.value = '';
        
    });
    
    zip.addEventListener("click", function () { 
        
        zip.value = '';
        
    });



    fstsubmit.addEventListener("click", function () { 
        
        validateForm();
        
    });

    //Reset form
    scdsubmit.addEventListener("click", function () { 
        
        fstname.value = "first name"; 
        
        lstname.value = "last name"; 
        
        address.value = "address";  
        
        city.value = "city";  
        
        zip.value = "zip code";
        
        email.value = "email";
        
        cemail.value = "confirm email";
        
        vegan.checked = false;
        
        vegetarian.checked = false;
        
        nonvegetarian.checked = false;
        
        document.getElementById("p-id").checked = false;
        
        document.getElementById("e-id").checked = false;
        
        document.getElementById("m-id").checked = false;
        
        document.getElementById("l-id").checked = false;
        
        document.getElementById("comm-id").value = "";

        document.getElementById("fst-err").innerHTML = "";
        
        document.getElementById("lst-err").innerHTML = "";
        
        document.getElementById("addr-err").innerHTML = "";
        
        document.getElementById("city-err").innerHTML = "";
        
        document.getElementById("state-err").innerHTML = "";
        
        document.getElementById("zip-err").innerHTML = "";
        
        document.getElementById("phone-err").innerHTML = "";
        
        document.getElementById("email-err").innerHTML = "";
        
        document.getElementById("cemail-err").innerHTML = "";
        
        document.getElementById("meal-err").innerHTML = "";
        
        document.getElementById("contact-err").innerHTML = "";
        
        document.getElementById("comm-err").innerHTML = "";
    });
    
    function clearForm(){
        // CLEAR MESSAGE AREA ON THE FORM FOR EACH FIELD
        document.getElementById("fst-err").innerHTML = "";
        document.getElementById("lst-err").innerHTML = "";
        document.getElementById("addr-err").innerHTML = "";
        document.getElementById("city-err").innerHTML = "";
        document.getElementById("state-err").innerHTML = "";
        document.getElementById("zip-err").innerHTML = "";
        document.getElementById("phone-err").innerHTML = "";
        document.getElementById("email-err").innerHTML = "";
        document.getElementById("cemail-err").innerHTML = "";
        document.getElementById("meal-err").innerHTML = "";
        document.getElementById("contact-err").innerHTML = "";
        document.getElementById("comm-err").innerHTML = "";
    }

    // Validate the form
    function validateForm() {

        var iscorrect = 1;
        var tempMessg = "";
        var counter = 0;

        clearForm();

        tempMessg = isLetter(fstname.value);
        if (tempMessg !== 1) {
            document.getElementById("fst-err").innerHTML = tempMessg;
            iscorrect = 0;
        }
        // LAST NAME
        tempMessg = isLetter(lstname.value);
        if (tempMessg !== 1) {
            document.getElementById("lst-err").innerHTML = tempMessg;
            iscorrect = 0;
        }
        // ADDRESS
        tempMessg = isAlphaNumeric(address.value);
        if (tempMessg !== 1) {
            document.getElementById("addr-err").innerHTML = tempMessg;
            iscorrect = 0;
        }
        // CITY
        tempMessg = isLetter(city.value);
        if (tempMessg !== 1) {
            document.getElementById("city-err").innerHTML = tempMessg;
            iscorrect = 0;
        }
        // STATE
        if (state.value === "-1") {
            document.getElementById("state-err").innerHTML = "Incorrect";
            iscorrect = 0;
        }
        // ZIP Code
        tempMessg = isNumeric(zip.value);
        if (tempMessg !== 1) {
            document.getElementById("zip-err").innerHTML = tempMessg;
            iscorrect = 0;
        } else if (tempMessg === 1) {
            if (zip.value.length !== 5) {
                document.getElementById("zip-err").innerHTML = "Incorrect";
                iscorrect = 0;
            }
        }

        // Phone  Code area
        tempMessg = isNumeric(code.value);
        if (tempMessg !== 1) {
            document.getElementById("phone-err").innerHTML = tempMessg;
            iscorrect = 0;
        } else if (tempMessg === 1) {
            if (code.value.length !== 3) {
                document.getElementById("phone-err").innerHTML = "Incorrect";
                iscorrect = 0;
            }
        }

        // Phone  
        tempMessg = isNumeric(phone.value);
        if (tempMessg !== 1) {
            document.getElementById("phone-err").innerHTML = tempMessg;
            iscorrect = 0;
        } else if (tempMessg === 1) {
            if (phone.value.length !== 5) {
                document.getElementById("phone-err").innerHTML = "Incorrect";
                iscorrect = 0;
            }
        }
        // Email
        tempMessg = checkEmail(email.value);
        if (tempMessg !== 1) {
            document.getElementById("email-err").innerHTML = tempMessg;
            iscorrect = 0;
        }

        // Conf. Email
        if (email.value !== cemail.value) {
            document.getElementById("cemail-err").innerHTML = "Incorrect";
            iscorrect = 0;
        }

        // Meal Preference       
        if (!(vegan.checked || vegetarian.checked || nonvegetarian.checked)) {
            document.getElementById("meal-err").innerHTML = "Incorrect: select one meal category";
            iscorrect = 0;
        }


        // Check which contact info is selected
        // if less than 2 message error is displayed
        if (document.getElementById("p-id").checked) {
            counter++;
        }
        if (document.getElementById("l-id").checked) {
            counter++;
        }
        if (document.getElementById("m-id").checked) {
            counter++;
        }
        if (document.getElementById("e-id").checked) {
            counter++;
        }

        // display message when 1 or 0 meal preference is submitted
        if (counter < 2) {
            document.getElementById("contact-err").innerHTML = "Must select at least 2 ";
        }
        // dislay message when comment length is more than 250
        if (comment.value.length > 250) {
            document.getElementById("comm-err").innerHTML = "Must be less than 25 characters";
        }

        // user provided data incrorrect
        if (iscorrect === 0) {
            alert("unable to submit your info. INCORRECT data ");
        }
        // user provided data correct
        else if (iscorrect === 1) {

            // retrieve  user submitted data for meal preference
            var mealContent = "";
            var contactContent = "\n Contact : ";

            if (vegan.checked) {
                mealContent = "\n Meal preference: Vegan";
            }
            if (vegetarian.checked) {
                mealContent = "\n Meal preference: Vegetarian";
            }
            if (nonvegetarian.checked) {
                mealContent = "\n Meal preference:  non Vegetarian";
            }

            // Retrieve user submitted data for contact info
            if (document.getElementById("p-id").checked) {
                contactContent += " phone";
            }
            if (document.getElementById("e-id").checked) {
                contactContent += " email";
            }
            if (document.getElementById("l-id").checked) {
                contactContent += " linkedin";
            }
            if (document.getElementById("m-id").checked) {
                contactContent += " mail";
            }
            // Combine data form the form to add in email s body
            var content = "First Name : " + fstname.value + "\n Last Name" + lstname.value +
                    "\n address : " + address.value + "\n city: " + city.value +
                    "\n state :" + state.value + "zipcode : " + zip.value +
                    "\n Phone : " + code.value + "-" + phone.value +
                    "\n Email : " + email.value + mealContent + contactContent +
                    "\n Comments :" + comment.value;
            // email the form
            window.open('mailto:louis.georgy@gmail.com?subject=Registration&body=' + encodeURIComponent(content));

        } else {
            alert("something wrong happen! ");
        }

    } // End  function validateForm() 

    //function determining if first name field is alpha
    function isLetter(data) {
        var message = 1;
        //Pattern for letters
        var pattern = /^[A-Za-z\s]+$/;
        // check if the input is only alpha
        if (data.match(pattern)) {
            message = 1;
            // alert("first name : Correct " + data);
        } else {
            message = "Incorrect";
            //alert("first name : InCorrect " + data);
        }
        return message;
    } // End isLetter(input)

    function isAlphaNumeric(data) {
        var message = 1;
        //Pattern for letters
        var pattern = /^[0-9a-zA-Z\s]+$/;
        // check if the input is only alpha
        if (data.match(pattern)) {
            message = 1;
            // alert("first name : Correct " + data);
        } else {
            message = "Incorrect";
            //alert("first name : InCorrect " + data);
        }
        return message;
    }

    function isNumeric(data) {
        var message = 1;
        //Pattern for letters
        var pattern = /^[0-9]+$/;

        // check if the input is only alpha
        if (data.match(pattern)) {
            message = 1;
            // alert("first name : Correct " + data);
        } else {
            message = "Incorrect";
            //alert("first name : InCorrect " + data);
        }
        return message;
    }

    function checkEmail(data) {
        var message = 1;
        //Pattern for letters
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // check if the input is only alpha
        if (data.match(pattern)) {
            message = 1;
            // alert("first name : Correct " + data);
        } else {
            message = "Incorrect";
            //alert("first name : InCorrect " + data);
        }
        return message;
    }

};

