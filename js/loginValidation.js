function validate(user, pw) {
     user = document.getElementById("username").value;
     pw = document.getElementById("password").value;

    let validate;

    if(user === "admin" && pw === "password" )
    {
        window.location.href='adminPage.html'
        validate = true;
    }
    else
    {
        alert("Incorrect Credentials")
        validate = false;
    }

    return validate;
}