const fs = require('fs');
const { isNameValid, isDateValid, isHobbiesValid,
  isPhoneNumberValid, isAddressValid } = require('./validations.js');

class Form {
  #formEntry; #formsFile;
  constructor(formsFile) {
    this.#formsFile = formsFile;
    this.#formEntry = {};
  }

  assignName(name) {
    const formatIncorrect = isNameValid(name);
    if (formatIncorrect) {
      return false;
    }
  
    this.#formEntry.name = name;
    return true;
  }
  
  assignDOB(DOB) {
    const dob = DOB.split('-');
    const formatCorrect = isDateValid(dob);
    if (!formatCorrect) {
      return false;
    }
    
    this.#formEntry.DOB = dob;
    return true;
  }
  
  assignHobbies(hobbies) {
    if (isHobbiesValid(hobbies)) {
      return false;
    }
    
    const hobbiesList = hobbies.split(',');
    this.#formEntry.hobbies = hobbiesList;
    return true;
  }
  
  assignPhoneNumber(phoneNumber) {
    const formatCorrect = isPhoneNumberValid(phoneNumber);
    if (!formatCorrect) {
      return false;
    }
    
    this.#formEntry.phoneNumber = phoneNumber.toString();
    return true;
  }
  
  assignAddressLine1(address) {
    const formatCorrect = isAddressValid(address);
    if (!formatCorrect) {
      return false;
    }
    
    this.#formEntry.address = address;
    return true;
  }
  
  assignAddressLine2(address) {
    const formatCorrect = isAddressValid(address);
    if (!formatCorrect) {
      return false;
    }
    
    this.#formEntry.address = this.#formEntry.address +
      ' ' + address;
    this.fillForm();
    return true;
  }
  
  fillForm() {
    fs.writeFileSync(this.#formsFile,
      JSON.stringify(this.#formEntry, ' ', 2), 'utf8');
    setImmediate(() => process.exit(0));
  }
}
exports.Form = Form;
