const { Form, Field, MultiLineField } = require('./form.js');
const {
  identity, formatToList,
  toString, joinLines } = require('./formatters.js');

const {
  isNameInvalid, isDateInvalid,
  isHobbiesInvalid, isPhoneNumberInvalid,
  isAddressInvalid } = require('./Validations.js');

const getForm = () => {
  const form = new Form();
  form.addField(
    new Field(
      'name',
      'Please Enter Your Name : ',
      isNameInvalid,
      identity
    )
  );

  form.addField(
    new Field(
      'dob',
      'Please Enter Your DOB (YYYY-MM-DD): ',
      isDateInvalid,
      toString
    )
  );
  form.addField(
    new Field(
      'hobbies',
      'Please Enter Your Hobbies : ',
      isHobbiesInvalid,
      formatToList
    )
  );
  form.addField(
    new Field(
      'phone_number',
      'Please Enter Your Phone Number : ',
      isPhoneNumberInvalid,
      toString
    )
  );
  const addressField = new MultiLineField( 'address',
    [
      'Please Enter Your Address line 1 : ',
      'Please Enter Your Address line 2 : '
    ],
    isAddressInvalid, joinLines
  );
  form.addField(addressField);
  form.addField(addressField);
  
  return form;
};

module.exports = {getForm};
