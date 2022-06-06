const isAlphabet = (char) => /[A-z ]/.test(char);
const validateName = (name) => {
  const nonAlphas = [].every.bind(name);
  return name.length < 5 || !nonAlphas(char => isAlphabet(char));
};

const validateDate = (date) => {
  const lengths = [4, 2, 2];
  return date.every((part, index) => part.length === lengths[index]) &&
    date.every(part => isFinite(part));
};

const validateHobbies = (hobbies) => hobbies.length < 1;

const validatePhoneNumber = (phoneNumber) => phoneNumber.toString()
  .length === 10 && isFinite(phoneNumber);

const validateAddress = (address) => address.length > 0;

exports.isAlphabet = isAlphabet;
exports.validateName = validateName;
exports.validateDate = validateDate;
exports.validateHobbies = validateHobbies;
exports.validateAddress = validateAddress;
exports.validatePhoneNumber = validatePhoneNumber;
