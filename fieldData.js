const {
  identity, formatToList,
  toString, addToOld } = require('./formatters.js');

const {
  isNameValid, isDateValid,
  isHobbiesValid, isPhoneNumberValid,
  isAddressValid } = require('./validations.js');

const fieldData = [
  {
    validator: isNameValid,
    format: identity,
    placeHolder: 'name',
    message: 'Please Enter Your Name : ',
  },
  {
    validator: isDateValid,
    format: toString,
    placeHolder: 'dob',
    message: 'Please Enter Your DOB (YYYY-MM-DD): ',
  },
  {
    validator: isHobbiesValid,
    format: formatToList,
    placeHolder: 'hobbies',
    message: 'Please Enter Your Hobbies : ',
  },
  {
    validator: isPhoneNumberValid,
    format: toString,
    placeHolder: 'phoneNumber',
    message: 'Please Enter Your Phone Number : ',
  },
  {
    validator: isAddressValid,
    format: identity,
    placeHolder: 'address',
    message: 'Please Enter Your Address line 1 : ',
  },
  {
    validator: isAddressValid,
    format: addToOld,
    placeHolder: 'address',
    message: 'Please Enter Your Address line 2 : ',
  },
  {
    message: 'Thank You',
  },
];

exports.fieldData = fieldData;
