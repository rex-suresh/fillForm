const { getForm } = require('./src/fieldData.js');
const { registerResponses } = require('./src/formLib.js');

const main = (formsFilePath, log) => {
  const form = getForm();
  log(form.prompt());
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', registerResponses(form, formsFilePath, log));
};

main('../forms.json', console.log);
