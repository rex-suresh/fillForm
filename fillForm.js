const fs = require('fs');
const { Form } = require('./form.js');
const { fieldData } = require('./fieldData.js');

const trimLine = (lines) => lines.trim();
const fillForm = (formsFilePath, formEntry) => {
  fs.writeFileSync(formsFilePath,
    JSON.stringify(formEntry, ' ', 2), 'utf8');

  setImmediate(() => process.exit(0));
};

const main = (fieldData, formsFilePath) => {
  const form = new Form(fieldData);
  
  let currentField = form.getCurrentIndex();
  let { message } = fieldData[currentField];
  console.log(message);
  
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (line) => {
    form.handleAssignment(trimLine(line));
    
    currentField = form.getCurrentIndex();
    message = fieldData[currentField].message;
    console.log(message);

    if (currentField === fieldData.length - 1) {
      fillForm(formsFilePath, form.getFormEntry());
    }
  });
};

main(fieldData, './formsData.json');
