const assert = require('assert');
const { HandleInput } = require('../src/handleLine');

describe('HandleInput', () => {
  it('should return single line input, line separated', () => {
    const handleLine = new HandleInput();
    handleLine.addContent('hello\n');
    assert.deepStrictEqual(handleLine.lines(), ['hello']);
  });
  it('should return multi line input, line separated', () => {
    const handleLine = new HandleInput();
    handleLine.addContent('hello\nbye\n');
    assert.deepStrictEqual(handleLine.lines(), ['hello', 'bye']);
  });
});
