const fs = require('fs');

const isAlphabet = (char) => /[A-z]/.test(char);
const trimLine = (lines) => lines.trim();

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

const captureName = (name, formEntry) => {
  const formatIncorrect = validateName(name);
  if (formatIncorrect) {
    return false;
  }

  const newName = name;
  formEntry.name = newName;
  return true;
};

const captureDOB = (DOB, formEntry) => {
  const dob = DOB.split('-');
  const formatCorrect = validateDate(dob);
  if (!formatCorrect) {
    return false;
  }
  
  formEntry.DOB = dob.map(datePart => parseInt(datePart));
  return true;
};

const captureHobbies = (hobbies, formEntry) => {
  if (validateHobbies(hobbies)) {
    return false;
  }
  
  const hobbiesList = hobbies.split(',');
  formEntry.hobbies = hobbiesList;
  fillForm(formEntry);
  return true;
};

const fillForm = (entry) => {
  const formFile = './formsData.json'; 
  fs.writeFileSync(formFile, JSON.stringify(entry), 'utf8');
};

const fieldData = [
  {
    capture: captureName,
    message: 'Please Enter Your Name : '
  },
  {
    capture: captureDOB,
    message: 'Please Enter Your DOB (YYYY-MM-DD): '
  },
  {
    capture: captureHobbies,
    message: 'Please Enter Your Hobbies : '
  },
  {
    capture: () => process.exit(0),
    message: 'Thank You'
  }
];

const main = (fieldData) => {
  const formEntry = {};
  
  let currentField = 0;
  let { capture, message } = fieldData[currentField];
  console.log(message);
  
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (cell) => {
    const captureStatus = capture(trimLine(cell), formEntry);
    if (captureStatus) {
      currentField++;
    }
    
    capture = fieldData[currentField].capture;
    message = fieldData[currentField].message;
    console.log(message);
  });
};

main(fieldData);
