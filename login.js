const loginButton = document.getElementById("login_button");



loginButton.addEventListener("click" ,function(){

    // default admin access
    const userGamil = "jnupuranjan249@gmail.com";
    const userPassword = "12345";

    // get user email
    const loginEmail = document.getElementById("login_email");
    const givenEmail = loginEmail.value;
    

    // get user password

    const loginPassword = document.getElementById("login_password");
    const givenPassword = loginPassword.value;

    if (givenEmail === userGamil && givenPassword === userPassword){
        window.location.href = "home.html";
    }
    else {
        alert("User access denied");
    }
    
});