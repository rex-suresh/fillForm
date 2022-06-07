const isAlphabet = (char) => /[A-z ]/.test(char);
const isNameValid = (name) => {
  const nonAlphas = [].every.bind(name);
  return name.length < 5 || !nonAlphas(char => isAlphabet(char));
};

const isDateValid = (fullDate) => {
  const date = fullDate.split('-');
  const lengths = [4, 2, 2];
  
  return !date.every((part, index) => part.length === lengths[index]) ||
    !date.every(part => isFinite(part));
};

const isHobbiesValid = (hobbies) => hobbies.length < 1;

const isPhoneNumberValid = (phoneNumber) =>
  !(phoneNumber.toString().length === 10 ) || !isFinite(phoneNumber);

const isAddressValid = (address) => address.length < 1;

exports.isAlphabet = isAlphabet;
exports.isNameValid = isNameValid;
exports.isDateValid = isDateValid;
exports.isHobbiesValid = isHobbiesValid;
exports.isAddressValid = isAddressValid;
exports.isPhoneNumberValid = isPhoneNumberValid;
