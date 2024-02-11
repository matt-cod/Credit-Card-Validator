# Credit Card Validator

A JavaScript program for validating credit card numbers and identifying the card type (Visacard, Mastercard and Vervecard).

## Overview

This JavaScript program utilizes regular expressions to validate credit card numbers and determine their corresponding types. It supports common credit card types such as Visacard, Mastercard and Vervecard.

## Features

**Card Type Identification:**

The program identifies the type of credit card (Visacard, Mastercard, Vervecard) based on the provided card number.

**Input Flexibility:**

Accepts credit card numbers with spaces or dashes and removes them for seamless validation.

**Regex Patterns:**

Utilizes regular expressions for each card type to ensure accurate validation.

## Regular Expression Patterns

**Visa Card (visacardRegex):**

`^4[0-9]{12}(?:[0-9]{3})?$`: 13  16 digits starting with 4.

**Master Card (mastercardRegex):**

`^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}?$`: 16 digits starting with 51 to 55 or 2221 to 2720.

**Verve Card (vervecardRegex):**

`^(506|650|507)[0-9]{3}[0-9]{10}(?:[0-9]{2,3})?$`: 16, 18 or 19 digits starting with 506099-506198, 650002-650027 or 507865-507964.
