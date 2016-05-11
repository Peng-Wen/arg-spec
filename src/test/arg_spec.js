var expect = require('expect.js');
var argSpec = require('../arg_spec');

describe('Types', function() {
    describe('#array', function() {
        it('should return true if no value is provided', function() {
            expect(argSpec.Types.array()).to.be(true);
        });

        it('should return true if the provided value is an array', function() {
            expect(argSpec.Types.array([])).to.be(true);
            expect(argSpec.Types.array([1, 2])).to.be(true);
            expect(argSpec.Types.array([1, '2', {}])).to.be(true);
        });

        it('should return false if the provided value is not an array', function() {
            expect(argSpec.Types.array(1)).to.be(false);
            expect(argSpec.Types.array({})).to.be(false);
            expect(argSpec.Types.array('a string')).to.be(false);
        });
    });

    describe('#bool', function() {
        it('should return true if no value is provided', function() {
            expect(argSpec.Types.bool()).to.be(true);
        });

        it('should return true if a boolean value is provided', function() {
            expect(argSpec.Types.bool(true)).to.be(true);
            expect(argSpec.Types.bool(false)).to.be(true);
        });

        it('should return false if the provided value is not a boolean', function() {
            expect(argSpec.Types.bool(1)).to.be(false);
            expect(argSpec.Types.bool({})).to.be(false);
            expect(argSpec.Types.bool('a string')).to.be(false);
        });
    });

    describe('#func', function() {
        it('should return true if no value is provided', function() {
            expect(argSpec.Types.func()).to.be(true);
        });

        it('should return true if a function value is provided', function() {
            expect(argSpec.Types.func(function() {})).to.be(true);
        });

        it('should return false if the provided value is not a function', function() {
            expect(argSpec.Types.func(1)).to.be(false);
            expect(argSpec.Types.func({})).to.be(false);
            expect(argSpec.Types.func('a string')).to.be(false);
        });
    });

    describe('#number', function() {
        it('should return true if no value is provided', function() {
            expect(argSpec.Types.number()).to.be(true);
        });

        it('should return true if a number is provided', function() {
            expect(argSpec.Types.number(12345)).to.be(true);
            expect(argSpec.Types.number(0)).to.be(true);
            expect(argSpec.Types.number(-12345)).to.be(true);
        });

        it('should return false if the provided value is not a number', function() {
            expect(argSpec.Types.number(true)).to.be(false);
            expect(argSpec.Types.number({})).to.be(false);
            expect(argSpec.Types.number('a string')).to.be(false);
        });
    });

    describe('#object', function() {
        it('should return true if no value is provided', function() {
            expect(argSpec.Types.object()).to.be(true);
        });

        it('should return true if an object is provided', function() {
            expect(argSpec.Types.object({})).to.be(true);
            expect(argSpec.Types.object({a: 'a'})).to.be(true);
        });

        it('should return false if the provided value is not a object', function() {
            expect(argSpec.Types.object(true)).to.be(false);
            expect(argSpec.Types.object(1)).to.be(false);
            expect(argSpec.Types.object('a string')).to.be(false);
        });
    });

    describe('#string', function() {
        it('should return true if no value is provided', function() {
            expect(argSpec.Types.string()).to.be(true);
        });

        it('should return true if value is a non-empty string', function() {
            expect(argSpec.Types.string('non-empty string')).to.be(true);
        });

        it('should return true if value is an empty string', function() {
            expect(argSpec.Types.string('')).to.be(true);
        });

        it('should return false if the provided value is not a string', function() {
            expect(argSpec.Types.string(true)).to.be(false);
            expect(argSpec.Types.string(1)).to.be(false);
            expect(argSpec.Types.string({})).to.be(false);
        });
    });

    describe('#instanceOf', function() {
        it('should return true if no value is provided', function() {
            expect(argSpec.Types.instanceOf(function() {})()).to.be(true);
        });

        it('should return true if the provided value is an instance of the specified class', function() {
            function TestClass() {}
            var a = new TestClass();
            expect(argSpec.Types.instanceOf(TestClass)(a)).to.be(true);
        });

        it('should return false if the provided value is not an instance of the specified class', function() {
            function TestClass() {}
            var a = new TestClass();
            expect(argSpec.Types.instanceOf(function() {})(a)).to.be(false);
        });

        it('should return false if the specified class is not a function', function() {
            expect(argSpec.Types.instanceOf(1)({})).to.be(false);
        });
    });

    describe('#oneOf', function() {
        it('should return true if value is set to one of the specified enum values', function() {
            expect(argSpec.Types.oneOf(['v1', 'v2', 'v3'])('v2')).to.be(true);
        });

        it('should return false if value is not one of the specified enum values', function() {
            expect(argSpec.Types.oneOf(['v1', 'v2', 'v3'])('some_value')).to.be(false);
        });

        it('should return false if no enum value is provided', function() {
            expect(argSpec.Types.oneOf()('v1')).to.be(false);
        });

        it('should return true if neither enum value nor value is provided', function() {
            expect(argSpec.Types.oneOf()()).to.be(true);
        });

        it('should return true if no value is provided', function() {
            expect(argSpec.Types.oneOf(['v1', 'v2', 'v3'])()).to.be(true);
        });
    });
});
