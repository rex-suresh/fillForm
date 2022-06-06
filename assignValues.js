const fs = require('fs');
const { validateName, validateDate, validateHobbies,
  validatePhoneNumber, validateAddress } = require('./validations.js');

const assignName = (name, formEntry) => {
  const formatIncorrect = validateName(name);
  if (formatIncorrect) {
    return false;
  }

  const newName = name;
  formEntry.name = newName;
  return true;
};

const assignDOB = (DOB, formEntry) => {
  const dob = DOB.split('-');
  const formatCorrect = validateDate(dob);
  if (!formatCorrect) {
    return false;
  }
  
  formEntry.DOB = dob.map(datePart => parseInt(datePart));
  return true;
};

const assignHobbies = (hobbies, formEntry) => {
  if (validateHobbies(hobbies)) {
    return false;
  }
  
  const hobbiesList = hobbies.split(',');
  formEntry.hobbies = hobbiesList;
  return true;
};

const assignPhoneNumber = (phoneNumber, formEntry) => {
  const formatCorrect = validatePhoneNumber(phoneNumber);
  if (!formatCorrect) {
    return false;
  }
  
  formEntry.phoneNumber = phoneNumber.toString();
  return true;
};

const assignAddressLine1 = (address, formEntry) => {
  const formatCorrect = validateAddress(address);
  if (!formatCorrect) {
    return false;
  }
  
  formEntry.address = address;
  return true;
};

const assignAddressLine2 = (address, formEntry) => {
  const formatCorrect = validateAddress(address);
  if (!formatCorrect) {
    return false;
  }
  
  formEntry.address = formEntry.address + ' ' + address;
  fillForm(formEntry);
  return true;
};

const fillForm = (entry) => {
  const formFile = './formsData.json'; 
  fs.writeFileSync(formFile, JSON.stringify(entry), 'utf8');
  setImmediate(() => process.exit(0));
};

exports.assignName = assignName;
exports.assignDOB = assignDOB;
exports.assignHobbies = assignHobbies;
exports.assignPhoneNumber = assignPhoneNumber;
exports.assignAddressLine1 = assignAddressLine1;
exports.assignAddressLine2 = assignAddressLine2;
