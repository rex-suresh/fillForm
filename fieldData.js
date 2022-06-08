const { Form, Field, MultiLineField } = require('./form.js');
const {
  identity, formatToList,
  toString, joinLines } = require('./formatters.js');

const {
  isNameValid, isDateValid,
  isHobbiesValid, isPhoneNumberValid,
  isAddressValid } = require('./validations.js');

const getForm = () => {
  const form = new Form();
  form.addField(
    new Field(
      'name',
      'Please Enter Your Name : ',
      isNameValid,
      identity
    )
  );

  form.addField(
    new Field(
      'dob',
      'Please Enter Your DOB (YYYY-MM-DD): ',
      isDateValid,
      toString
    )
  );
  form.addField(
    new Field(
      'hobbies',
      'Please Enter Your Hobbies : ',
      isHobbiesValid,
      formatToList
    )
  );
  form.addField(
    new Field(
      'phone_number',
      'Please Enter Your Phone Number : ',
      isPhoneNumberValid,
      toString
    )
  );
  const addressField = new MultiLineField( 'address',
    [
      'Please Enter Your Address line 1 : ',
      'Please Enter Your Address line 2 : '
    ],
    isAddressValid, joinLines
  );
  form.addField(addressField);
  form.addField(addressField);
  
  return form;
};

module.exports = {getForm};
