const { Form } = require('./form.js');
const trimLine = (lines) => lines.trim();

const form = new Form('./formsData.json');

const fieldData = [
  {
    assign: (cell) => form.assignName(cell),
    message: 'Please Enter Your Name : '
  },
  {
    assign: (cell) => form.assignDOB(cell),
    message: 'Please Enter Your DOB (YYYY-MM-DD): '
  },
  {
    assign: (cell) => form.assignHobbies(cell),
    message: 'Please Enter Your Hobbies : '
  },
  {
    assign: (cell) => form.assignPhoneNumber(cell),
    message: 'Please Enter Your Phone Number : '
  },
  {
    assign: (cell) => form.assignAddressLine1(cell),
    message: 'Please Enter Your Address line 1 : '
  },
  {
    assign: (cell) => form.assignAddressLine2(cell),
    message: 'Please Enter Your Address line 2 : '
  },
  {
    message: 'Thank You'
  }
];

const main = (fieldData) => {
  let currentField = 0;
  let { assign, message } = fieldData[currentField];
  console.log(message);
  
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (cell) => {
    const assignStatus = assign(trimLine(cell));
    if (assignStatus) {
      currentField++;
    }

    assign = fieldData[currentField].assign;
    message = fieldData[currentField].message;
    console.log(message);
  });
};

main(fieldData);
