const fs = require('fs');
const { HandleInput } = require('./handleLine');

const writeToFile = (formsFilePath, formEntry) => {
  fs.writeFileSync(formsFilePath,
    JSON.stringify(formEntry, ' ', 2), 'utf8');

  setImmediate(() => process.stdin.destroy());
};

const registerResponses = (form, formsFilePath, log) => {
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

module.exports = {writeToFile, registerResponses};
