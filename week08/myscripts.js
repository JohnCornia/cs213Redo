function validateFirstName(){}

function validateLastName(){}

function validateAddress(){}

function validate(){}

function phone (){}

function creditCard (cardNumber)
{
    //console.log(cardNumber.value);
    var pattern = /(\d{4}\s){3}\d{4}/;
    return pattern.test(card.cardNumberValue)
}

function expirationDate(expirationDate){
    var pattern = /([1][0-2]|[0][7-9])\/[2]([0][2-9][1-9]|[1-9]\d{2})/;
    return pattern.test(expirationDate);
}

function validateAll(){}

//0 and 1-9
//1 and 0-2

//1-9
//0 and 2-9 and 0-9
