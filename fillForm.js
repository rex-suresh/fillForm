const fs = require('fs');

const captureName = (name, formEntry) => { formEntry.name = name; };

const captureDOB = (DOB, formEntry) => {
  const dob = DOB.split('-').map(datePart => parseInt(datePart));
  formEntry.DOB = dob;
};

const captureHobbies = (hobbies, formEntry) => {
  const hobbiesList = hobbies.split(',');
  formEntry.hobbies = hobbiesList;
};

const fillForm = (entry, formFile) => {
  fs.writeFileSync(formFile, entry, 'utf8');
  process.exit(0);
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
      message: 'Please Enter Your DOB (YYYY-MM-DD): '
    },
    {
      capture: captureHobbies,
      message: 'Please Enter Your Hobbies : '
    },
    {
      capture: fillForm,
      message: 'Thank You'
    },
  ];
  
  let currentField = 0;
  let { capture, message } = fieldData[currentField];
  console.log(message);
  
  process.stdin.on('data', (cell) => {
    capture(cell, formEntry);
    currentField++;
    
  });
};

main();
