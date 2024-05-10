"use strict";

const form = document.querySelector("form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#confirm-password");

function setError(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error-message");

    errorDisplay.textContent = message;
    element.classList.add("error");
    element.classList.remove("success");
}

function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error-message");

    errorDisplay.textContent = "";
    element.classList.remove("error");
    element.classList.add("success");
}

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(String(email).toLowerCase());
}



form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent form from submitting

    validateInputs();    
});

function validateInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    // first and last name validation
    if (firstNameValue === "") {
        setError(firstName, "Please enter your first name");        
    }
    else {
        setSuccess(firstName);
    }

    if (lastNameValue === "") {
        setError(lastName, "Please enter your last name");        
    }
    else {
        setSuccess(lastName);
    }

    // email validation
    if (emailValue === "") {
        setError(email, "Please enter your email");
    }
    else if (!isValidEmail) {
        setError(email, "Please provide a valid email address");
    }
    else {
        setSuccess(email);
    }

    // password validation
    if (passwordValue === "") {
        setError(password, "Please enter a password");
    }
    else if (passwordValue.length < 8) {
        setError(password, "Please enter a password with at least 8 characters");
    }
    else {
        setSuccess(password);
    }

    if (password2Value === "") {
        setError(password2, "Please confirm your password");
    }
    else if (password2Value !== passwordValue) {
        setError(password2, "The passwords do not match");
    }
    else {
        setSuccess(password2);
    }
}