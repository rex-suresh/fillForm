const { assignName, assignDOB, assignHobbies } = require('./assignValues.js');
const { assignPhoneNumber, assignAddressLine1, assignAddressLine2 } =
  require('./assignValues.js');

const trimLine = (lines) => lines.trim();

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
