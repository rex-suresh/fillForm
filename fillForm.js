const fs = require('fs');
const { Form: form } = require('./form.js');

const trimLine = (lines) => lines.trim();
const fillForm = (formsFilePath, formEntry) => {
  fs.writeFileSync(formsFilePath,
    JSON.stringify(formEntry, ' ', 2), 'utf8');

  setImmediate(() => process.exit(0));
};

const main = (form, formsFilePath) => {
  console.log(form.currentMessage());
  
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (line) => {
    form.handleAssignment(trimLine(line));
    console.log(form.currentMessage());

    if (form.isFormFilled()) {
      fillForm(formsFilePath, form.getFormEntry());
    }
  });
};

main(form, './formsData.json');
