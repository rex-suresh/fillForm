const fs = require('fs');
const { getForm } = require('./src/fieldData.js');
const { HandleInput } = require('./src/handleLine.js');

const writeToFile = (formsFilePath, formEntry) => {
  fs.writeFileSync(formsFilePath,
    JSON.stringify(formEntry, ' ', 2), 'utf8');

  setImmediate(() => process.stdin.destroy());
};

const fillFormFields = (form, formsFilePath, log) => {
  const handleLine = new HandleInput();

  return (response) => {
    handleLine.addContent(response);
    const allLines = handleLine.lines();
    
    allLines.forEach(lineResponse => {
      form.handleAssignment(lineResponse);
  
      if (form.isFormFilled()) {
        writeToFile(formsFilePath, form.getForm());
        log('Thank You');
      } else {
        log(form.prompt());
      }
    });
  };
};

const main = (formsFilePath, log) => {
  const form = getForm();
  log(form.prompt());
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', fillFormFields(form, formsFilePath, log));
};

main('../forms.json', console.log);
