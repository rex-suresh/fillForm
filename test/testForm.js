const assert = require('assert');
const { Form, Field } = require('../src/form.js');

describe( 'Form', () => {
  it('should add a field to form', () => {
    const form = new Form();
    form.addField(new Field('name', 'prompt', () => false, (name) => name));

    assert.deepStrictEqual(form.getFormEntry(), {name: null});
  });

  it('should register a response', () => {
    const form = new Form();
    form.addField(new Field(
      'name', 'prompt', () => false, (name) => name));
    form.registerResponse('suresh');

    assert.ok(form.isFormFilled());
  });

  it('should return a prompt of current field', () => {
    const form = new Form();
    form.addField(new Field(
      'name', 'prompt', () => false, (name) => name));
    
    assert.equal(form.prompt(), 'prompt');
  });

  it('should return a form entry', () => {
    const form = new Form();
    form.addField(new Field('name', 'prompt1', () => false, (item) => item));
    form.addField(new Field('dob', 'prompt2', () => false, (item) => item));
    form.registerResponse('suresh');
    form.registerResponse('1999-19-19');

    assert.deepStrictEqual(
      form.getFormEntry(), { name: 'suresh', dob: '1999-19-19' });
  });
});

