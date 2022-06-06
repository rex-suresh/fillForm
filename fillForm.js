const fs = require('fs');

const captureName = (name, formEntry) => {
  const newName = name.trim();
  formEntry.name = newName;
};

const captureDOB = (DOB, formEntry) => {
  const dob = DOB.split(' ').map(datePart => parseInt(datePart));
  formEntry.DOB = dob;
};

const captureHobbies = (hobbies, formEntry) => {
  const hobbiesList = hobbies.trim().split(',');
  formEntry.hobbies = hobbiesList;
  fillForm(formEntry);
};

const fillForm = (entry) => {
  const formFile = './formsData.json'; 
  fs.writeFileSync(formFile, JSON.stringify(entry), 'utf8');
};

const main = () => {
  const formEntry = {};
  const fieldData = [
    {
      capture: captureName,
      message: 'Please Enter Your Name : '
    },
    {
      capture: captureDOB,
      message: 'Please Enter Your DOB (YYYY MM DD): '
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
  
  let currentField = 0;
  let { capture, message } = fieldData[currentField];
  console.log(message);
  
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (cell) => {
    capture(cell, formEntry);
    currentField++;
    
    capture = fieldData[currentField].capture;
    message = fieldData[currentField].message;
    console.log(message);
  });
};

main();
