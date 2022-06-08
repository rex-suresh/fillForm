const fs = require('fs');
const { getForm } = require('./fieldData.js');

const fillForm = (formsFilePath, formEntry) => {
  fs.writeFileSync(formsFilePath,
    JSON.stringify(formEntry, ' ', 2), 'utf8');

  setImmediate(() => process.stdin.destroy());
};

const main = (formsFilePath, log) => {
  const form = getForm();
  log(form.prompt());
  
  process.stdin.setEncoding('utf8');
  
  process.stdin.on('data', (response) => {
    form.handleAssignment(response.trim());
    if (form.isFormFilled()) {
      fillForm(formsFilePath, form.getForm());
      log('Thank You');
    } else {
      log(form.prompt());
    }
  });
};

main('./formsData.json', console.log);
