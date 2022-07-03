let userDetailsDatabase = {}

function getUserDetails() {
    let userName = prompt("Enter your username")
    
    if(userName == null){
        return
    }
    function ValidateUsername (userName){
        if(userName.length < 10 && userName.length >0){
            return true
        }else{
            return false
        }
    }
    while(ValidateUsername(userName) == false){
        userName = prompt("Username must be less than 10 and greater than 0")
    }

    userDetailsDatabase["UserName"] = userName

    let email = prompt("Enter your email address")

    if(email == null){
        return
    }
    function validateEmail(email) {
        const emailCheck = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        emailCheckResult = emailCheck.test(email);
        if(emailCheckResult == true){
            return true
        }else{
            return false
        }
    }
    while(validateEmail(email) == false){
        email = prompt("Enter a valid email")
    }

    userDetailsDatabase["Email"] = email

    let phoneNumber = prompt("Enter your phonenumber")

    if(phoneNumber == null){
        return
    }
    function validatePhoneNumber (phoneNumber){
        if(phoneNumber.length == 11){
            return true
        }else{
            return false
        }
    }
    while(validatePhoneNumber(phoneNumber) == false){
        phoneNumber = prompt("Phonenumber must be 11 digits")
    }

    userDetailsDatabase["Phonenumber"] = phoneNumber

    let password = prompt("Enter your password")

    if(password == null){
        return
    }
    function validatePassword (password){
        if(password.length < 6){
            return false
        }else{
            return true
        }
    }
    while(validatePassword(password) == false){
        password = prompt("Password must not be less than 6 digits")
    }

    userDetailsDatabase["Password"] = password

    let confirmPassword = prompt("Confirm your password")

    if(confirmPassword == null){
        return
    }
    function validateConfirmpassword (confirmPassword){
        if(confirmPassword != password){
            return false
        }else{
            return true
        }
    }
    while(validateConfirmpassword(confirmPassword) == false){
        confirmPassword = prompt("Confrm password does not match password, try again")
    }
}

function displayUserDetails() {
    alert(`Your details\n\nUsername: ${userDetailsDatabase.UserName} \nPhonenumber: ${userDetailsDatabase.Phonenumber}\nEmail: ${userDetailsDatabase.Email}`)
}


