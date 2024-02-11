function validateCreditCard(cardNumber) {
    // Regular expressions for different credit card types
    const visacardRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const mastercardRegex = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}?$/;
    const vervecardRegex = /^(506|650|507)[0-9]{3}[0-9]{10}(?:[0-9]{2,3})?$/

    // Remove spaces and dashes from the card number
    const noSpaceCCNumber = cardNumber.replace(/[\s-]/g, '');

    // Check card type using regular expressions
	if (visacardRegex.test(noSpaceCCNumber)){
		return 'Visa card';
	} else if (mastercardRegex.test(noSpaceCCNumber)){
		return 'Master card';
	} else if (vervecardRegex.test(noSpaceCCNumber)){
		return 'Verve card';
	} else {
		return 'Invalid Card Number'
	}
   
}

// Example usage
const cardNumber = '2221 0012 3412 3456'; // input your card Number Here
const cardType = validateCreditCard(cardNumber);
console.log(`Card Type: ${cardType}`);
