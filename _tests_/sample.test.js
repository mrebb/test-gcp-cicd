var assert = require('assert');
describe('Basic unit test', function () {
    it('should return number of characters in a string', function () {
        assert.equal("Demo".length, 4);
    });
    it('should return first character of the string', function () {
        assert.equal("Demo".charAt(0), 'D');
    });
});
