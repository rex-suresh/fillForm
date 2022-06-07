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
  console.log(form.getCurrentMessage());
  
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (line) => {
    form.handleAssignment(trimLine(line));
    console.log(form.getCurrentMessage());

    if (form.getCurrentIndex() === fieldData.length - 1) {
      fillForm(formsFilePath, form.getFormEntry());
    }
  });
};

main(fieldData, './formsData.json');
