let form = document.getElementById("myForm");

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let age = document.getElementById("age");
let address = document.getElementById("address");
let contact = document.getElementById("contact");
let email = document.getElementById("email");
let proof = document.getElementById("proof");
let upload = document.getElementById("upload");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let valid = true;

    // First Name
    if (fname.value.trim().length < 3) {
        document.getElementById("fnameError").innerHTML = "Minimum 3 characters required";
        valid = false;
    } else {
        document.getElementById("fnameError").innerHTML = "";
    }

    // Last Name
    if (lname.value.trim().length < 3) {
        document.getElementById("lnameError").innerHTML = "Minimum 3 characters required";
        valid = false;
    } else {
        document.getElementById("lnameError").innerHTML = "";
    }

    // Age
    if (age.value == "" || age.value < 18) {
        document.getElementById("ageError").innerHTML = "Age must be 18 or above";
        valid = false;
    } else {
        document.getElementById("ageError").innerHTML = "";
    }

    // Address
    if (address.value.trim().length < 15) {
        document.getElementById("addressError").innerHTML = "Minimum 15 characters required";
        valid = false;
    } else {
        document.getElementById("addressError").innerHTML = "";
    }

    // Gender
    let gender = document.getElementsByName("gender");
    let genderSelected = false;

    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderSelected = true;
        }
    }

    if (!genderSelected) {
        document.getElementById("genderError").innerHTML = "Select Gender";
        valid = false;
    } else {
        document.getElementById("genderError").innerHTML = "";
    }

    // Contact Number
    let contactPattern = /^[789][0-9]{9}$/;

    if (!contactPattern.test(contact.value)) {
        document.getElementById("contactError").innerHTML = "Number should start with 7, 8 or 9";
        valid = false;
    } else {
        document.getElementById("contactError").innerHTML = "";
    }

    // Email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value)) {
        document.getElementById("emailError").innerHTML = "Invalid Email";
        valid = false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    // ID Proof
    if (proof.value == "") {
        document.getElementById("proofError").innerHTML = "Select ID Proof";
        valid = false;
    } else {
        document.getElementById("proofError").innerHTML = "";
    }

    // Upload File
    if (upload.value == "") {
        document.getElementById("uploadError").innerHTML = "Please Upload File";
        valid = false;
    } else {
        document.getElementById("uploadError").innerHTML = "";
    }

    // Password Validation
    let passPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&]).{8,}$/;

    if (!passPattern.test(password.value)) {

        document.getElementById("passwordError").innerHTML =
        "Password must contain Uppercase, Number & Special Character";

        document.getElementById("passwordError").style.color = "red";

        valid = false;

    } else {

        if (password.value.length <= 8) {

            document.getElementById("passwordError").innerHTML = "Weak Password";
            document.getElementById("passwordError").style.color = "red";

        }

        else if (password.value.length <= 10) {

            document.getElementById("passwordError").innerHTML = "Medium Password";
            document.getElementById("passwordError").style.color = "orange";

        }

        else {

            document.getElementById("passwordError").innerHTML = "Strong Password";
            document.getElementById("passwordError").style.color = "green";

        }

    }

    // Confirm Password
    if (confirmPassword.value == "") {

        document.getElementById("confirmError").innerHTML = "Confirm Password";

        valid = false;

    }

    else if (password.value != confirmPassword.value) {

        document.getElementById("confirmError").innerHTML = "Password Not Matched";

        valid = false;

    }

    else {

        document.getElementById("confirmError").innerHTML = "";

    }

    // Submit Success
    if (valid) {

        alert("Registration Successful");

        form.reset();

        document.getElementById("passwordError").innerHTML = "";
        document.getElementById("passwordError").style.color = "red";
    }

});