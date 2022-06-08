const assert = require('assert');
const { getForm } = require('../src/fieldData.js');
describe('getForm', () => {
  it('fill form successfully with default questions', () => {
    const form = getForm();

    assert.equal('Please Enter Your Name : ', form.prompt());
    form.handleAssignment('Suresh');

    assert.equal('Please Enter Your DOB (YYYY-MM-DD) : ', form.prompt());
    form.handleAssignment('2001-01-01');
    
    assert.equal('Please Enter Your Hobbies : ', form.prompt());
    form.handleAssignment('singing');
    
    assert.equal('Please Enter Your Phone Number : ', form.prompt());
    form.handleAssignment('1234567890');

    assert.equal('Please Enter Your Address line 1 : ', form.prompt());
    form.handleAssignment('add1');
    
    assert.equal('Please Enter Your Address line 2 : ', form.prompt());
    form.handleAssignment('add2');
    assert.ok(form.isFormFilled());
  });
});
