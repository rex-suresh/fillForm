const assert = require('assert');
const { isNameInvalid } = require('../src/validations.js');
const { Field } = require('../src/form.js');

describe( 'Field', () => {
  it('should create a field', () => {
    const nameField = new Field(
      'title', 'prompt', () => true, (response) => response
    );
    assert.deepStrictEqual(nameField.getEntry(), {
      title: 'title', response: null
    });
  });

  it('should fill a response in field', () => {
    const nameField = new Field(
      'name', 'enter name', () => true, (response) => response
    );
    nameField.fill('suresh');
    assert.deepStrictEqual(nameField.getEntry(), {
      title: 'name', response: 'suresh'
    });
  });

  it('should return a prompt', () => {
    const nameField = new Field(
      'name', 'enter name', () => true, (response) => response
    );
    nameField.fill('suresh');
    assert.equal(nameField.getPrompt(), 'enter name');
  });

  it('should check if response is Invalid', () => {
    const nameField = new Field(
      'name', 'enter name', isNameInvalid, (response) => response
    );
    
    assert.equal(nameField.isInvalid('sur123'), true);
  });

  it('should format response based on formatter', () => {
    const hobbyField = new Field(
      'hobbies', 'prompt', () => true, (response) => response.split(',')
    );
    hobbyField.fill('play,read');
    
    assert.deepStrictEqual(hobbyField.getEntry(), {
      title: 'hobbies',
      response: ['play', 'read']
    });
  });
});
