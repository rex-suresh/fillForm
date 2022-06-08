const assert = require('assert');
const { getForm } = require('../src/fieldData.js');
describe('getForm', () => {
  it('fill form successfully with default questions', () => {
    const form = getForm();

    assert.equal('Please Enter Your Name : ', form.prompt());
    form.registerResponse('Suresh');

    assert.equal('Please Enter Your DOB (YYYY-MM-DD) : ', form.prompt());
    form.registerResponse('2001-01-01');
    
    assert.equal('Please Enter Your Hobbies : ', form.prompt());
    form.registerResponse('singing');
    
    assert.equal('Please Enter Your Phone Number : ', form.prompt());
    form.registerResponse('1234567890');

    assert.equal('Please Enter Your Address line 1 : ', form.prompt());
    form.registerResponse('add1');
    
    assert.equal('Please Enter Your Address line 2 : ', form.prompt());
    form.registerResponse('add2');
    assert.ok(form.isFormFilled());
  });
});
