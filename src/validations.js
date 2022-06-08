const isAlphabet = (char) => /[A-z ]/.test(char);
const isNameInvalid = (name) => {
  const nonAlphas = [].every.bind(name);
  return name.length < 5 || !nonAlphas(char => isAlphabet(char));
};

const isDateInvalid = (fullDate) => {
  const date = fullDate.split('-');
  const lengths = [4, 2, 2];
  
  return !date.every((part, index) => part.length === lengths[index]) ||
    !date.every(part => isFinite(part));
};

const isHobbiesInvalid = (hobbies) => hobbies.length < 1;

const isPhoneNumberInvalid = (phoneNumber) =>
  !(phoneNumber.toString().length === 10 ) || !isFinite(phoneNumber);

const isAddressInvalid = (address) => address.length < 1;

module.exports = {
  isNameInvalid, isDateInvalid,
  isHobbiesInvalid, isAddressInvalid, isPhoneNumberInvalid
};
