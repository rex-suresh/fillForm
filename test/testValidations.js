const assert = require('assert');
const {
  isNameInvalid, isDateInvalid,
  isHobbiesInvalid, isAddressInvalid, isPhoneNumberInvalid
} = require('../src/validations.js');

describe( 'isNameInvalid', () => {
  it( 'should return true when name length is less than 5 chars', () => {
    assert.ok(isNameInvalid('sky'));
  });
  it( 'should return false when name length is grater than 4 chars', () => {
    assert.ok(!isNameInvalid('suresh'));
  });
  it( 'should return true when name contains digits', () => {
    assert.ok(isNameInvalid('suresh123'));
  });
});

describe( 'isDateInvalid', () => {
  it( 'should return true when dateFormat is incorrect', () => {
    assert.ok(isDateInvalid('12-12-12'));
  });
  it( 'should return false when dateFormat is correct', () => {
    assert.ok(!isDateInvalid('1234-12-12'));
  });
  it( 'should return true when date contains non digit chars', () => {
    assert.ok(isDateInvalid('12aa-1b-1c'));
  });
});

describe( 'isHobbiesInvalid', () => {
  it( 'should return false when response length is grater than 0', () => {
    assert.ok(!isHobbiesInvalid('some hobby'));
  });
  it( 'should return true when response length is less than 1', () => {
    assert.ok(isHobbiesInvalid(''));
  });
});

describe( 'isAddressInvalid', () => {
  it( 'should return false when response length is grater than 0', () => {
    assert.ok(!isAddressInvalid('some address'));
  });
  it( 'should return true when response length is less than 1', () => {
    assert.ok(isAddressInvalid(''));
  });
});

describe( 'isPhoneNumberInvalid', () => {
  it( 'should return false when phone number is 10 digit string', () => {
    assert.ok(!isPhoneNumberInvalid('1234567890'));
  });
  it( 'should return true when phone number is not 10 digit string', () => {
    assert.ok(isPhoneNumberInvalid('123'));
  });
  it( 'should return true when phone number contains non digit chars', () => {
    assert.ok(isPhoneNumberInvalid('1234a'));
  });
});
