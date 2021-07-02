var error = document.getElementById("errorMessage");

function validateFirstName() {
    var firstName = document.getElementById("first_name");
    if (firstName.value == "") {
        firstName.focus();
        error.innerHTML = "First Name not valid"
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

function validateLastName() {
    var lastName = document.getElementById("last_name");
    if (lastName.value == "") {
        lastName.focus();
        error.innerHTML = "Last Name not valid"
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

function validateAddress() {
    var address = document.getElementById("address");
    if (address.value == "") {
        address.focus();
        error.innerHTML = "Address not valid"
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

function validatePhone() {
    var phoneNumber = document.getElementById("phone");
    var pattern = /(\d{3})-(\d{3})-(\d{4})/g;
    if (pattern.test(phoneNumber.value)) {
        error.innerHTML = "";
        return true;
    }
    else {
        phoneNumber.focus();
        error.innerHTML = "Phone Number not valid"
        return false;
    }
}

function minimumSelection() {
    var selectionMade = false;
    for (let index = 0; index < 4 && !selectionMade; index++) {
        selectionMade = document.getElementById("item_" + index).checked;
    }

    if (selectionMade == true) {
        error.innerHTML = "";
        return true;
    }
    else {
        document.getElementById("item_0").focus();
        error.innerHTML = "Please make at minimum one selection."
        return false;
    }
}

function calculateTotal() {
    var total = 0;
    if (document.getElementById("item_0").checked) {
        total += 80;
    }
    if (document.getElementById("item_1").checked) {
        total += 15;
    }
    if (document.getElementById("item_2").checked) {
        total += 25;
    }
    if (document.getElementById("item_3").checked) {
        total += 60;
    }

    var displayValue = document.getElementById("total");
    displayValue.innerHTML = "$" + total;
    displayValue.value = total;
}

function cardName() {
    var card = document.getElementsByName("card");
    if (!card[0].checked && !card[1].checked && !card[2].checked) {
        card[0].focus();
        error.innerHTML = "Credit Card Company not selected"
        return false;
    }
    else {
        total.innerHTML = "";
        return true;
    }
}

function creditCard() {
    var cardNumber = document.getElementById("credit_card");
    var pattern = /(\d{4}\s){3}\d{4}/g;
    if (pattern.test(cardNumber.value)) {
        error.innerHTML = "";
        return true;
    }
    else {
        cardNumber.focus();
        error.innerHTML = "Credit Card Number not valid"
        return false;
    }
}

function expirationDate() {
    var expirationDate = document.getElementById("exp_date");
    var pattern = /((([1][0-2]|[0][7-9])\/[2][0][2][1])|(([1][0-2]|[0][1-9])\/[2][0]([2][2-9]|[3-9][0-9])))/g;
    if (pattern.test(expirationDate.value)) {
        error.innerHTML = "";
        return true;
    }
    else {
        expirationDate.focus();
        error.innerHTML = "Expiration Date not valid"
        return false;
    }
}

function validateAll() {

    if (validateFirstName() &&
        validateLastName() &&
        validateAddress() &&
        validatePhone() &&
        creditCard() &&
        cardName() &&
        expirationDate() &&
        minimumSelection()) {
        return true;
    }
    else { 
        return false;
    }
}

