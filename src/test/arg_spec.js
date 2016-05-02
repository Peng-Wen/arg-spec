var expect = require('expect.js');
var argSpec = require('../arg_spec');

describe('Types', function() {
    describe('#string', function() {
        it('should return true if value is a non-empty string', function() {
            expect(argSpec.Types.string('non-empty string')).to.be(true);
        });
    });

});
