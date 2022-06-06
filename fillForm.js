const fs = require('fs');

const trimLine = (lines) => lines.trim();

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

const fieldData = [
  {
    assign: assignName,
    message: 'Please Enter Your Name : '
  },
  {
    assign: assignDOB,
    message: 'Please Enter Your DOB (YYYY-MM-DD): '
  },
  {
    assign: assignHobbies,
    message: 'Please Enter Your Hobbies : '
  },
  {
    assign: assignPhoneNumber,
    message: 'Please Enter Your Phone Number : '
  },
  {
    assign: assignAddressLine1,
    message: 'Please Enter Your Address line 1 : '
  },
  {
    assign: assignAddressLine2,
    message: 'Please Enter Your Address line 2 : '
  },
  {
    message: 'Thank You'
  }
];

const main = (fieldData) => {
  const formEntry = {};
  
  let currentField = 0;
  let { assign, message } = fieldData[currentField];
  console.log(message);
  
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (cell) => {
    const assignStatus = assign(trimLine(cell), formEntry);
    if (assignStatus) {
      currentField++;
    }
    
    assign = fieldData[currentField].assign;
    message = fieldData[currentField].message;
    console.log(message);
  });
};

main(fieldData);
