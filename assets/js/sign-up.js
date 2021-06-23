// Declare all variables
const form = document.getElementById("form")
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const PhoneNumber = document.getElementById("number");
const email = document.getElementById("email");
const createPassword = document.querySelector("#password1");
const confirmPassword = document.querySelector("#password2");
const togglePassword = document.querySelector('.togglePassword');



// Password reveal


// let password = document.querySelector('#password1');

togglePassword.addEventListener('click', (e) => {
    

     // toggle the type attribute for create password
     const type = createPassword.getAttribute('type') === 'password' ? 'text' : 'password';
     createPassword.setAttribute('type', type);
        // toggle the eye / eye slash icon
        this.classList.toggle('bi-eye');
  });
  

  togglePassword.addEventListener('click', (e) => {
    

     // toggle the type attribute for create password
     const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
     confirmPassword.setAttribute('type', type);
        // toggle the eye / eye slash icon
        this.classList.toggle('bi-eye');
  });
  


// clear default action of submit form
form.addEventListener('submit', function(e) {

    e.preventDefault();

    // declare checkinput function
    checkInput();

});



// declaring checkinput function
function checkInput() {

        const firstnameValue = firstname.value
        const lastnameValue = lastname.value
        const phonenumberValue  = number.value
        const emailValue = email.value
        const password1Value = password1.value
        const password2Value = password2.value

        if(firstnameValue === ''){

            setErrorFor(firstname, 'Name cannot be blank');
        } else {

            setSuccessFor(firstname);
        }

        if(lastnameValue === ''){

            setErrorFor(lastname, 'Name cannot be blank');
        } else {

            setSuccessFor(lastname);
        }

        if(phonenumberValue === ''){

            setErrorFor(number, 'Number cannot be blank');
        } else {

            setSuccessFor(number);
        }

        if(emailValue === ''){

            setErrorFor(email, 'Email cannot be blank');
        } else {

            setSuccessFor(email);
        }

        if(password1Value === ''){

            setErrorFor(password1, 'Password cannot be blank');
        } 
        else if(password1Value.length <6 ){

            setErrorFor(password1, 'Password is less than 8 characters')
        } else {

            setSuccessFor(password1);
        }

        if(password2Value === ''){

            setErrorFor(password2, 'Password cannot be blank');

        } else if(password1Value < password2Value || password1Value !== password2Value){

            setErrorFor(password2, 'Password does not match')
            
        } else {

            setSuccessFor(password2);
        }

        
        
    };


    // declaring input and sucess or error message function

    function setErrorFor(input, message){

        const formContainer = input.parentElement;
        const small = formContainer.querySelector('small');
        
        // add error message
        formContainer.className = 'form-container error';
        small.innerText = message;

        
    };


    function setSuccessFor(input){

        const formContainer = input.parentElement;
        formContainer.className = 'form-container success'
    }


