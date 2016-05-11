function addIsRequired(typeFn) {
    typeFn.isRequired = function(value) {
        return (typeof value !== 'undefined') && typeFn(value);
    };
}

function array(value) {
    return (typeof value === 'undefined') || Array.isArray(value);
}

function bool(value) {
    return (typeof value === 'undefined') || (typeof value === 'boolean');
}

function func(value) {
    return (typeof value === 'undefined') || (typeof value === 'function');
}

function number(value) {
    return (typeof value === 'undefined') || (typeof value === 'number');
}

function object(value) {
    return (typeof value === 'undefined') || (typeof value === 'object');   
}

function string(value) {
    return (typeof value === 'undefined') || (typeof value === 'string');
}

function instanceOf(constructorFn) {
    return function(value) {
        return (typeof value === 'undefined') || (typeof constructorFn === 'function' && value instanceof constructorFn);
    };
}

function oneOf(values) {
    values = values || [];
    return function(value) {
        return (typeof value === 'undefined') || values.indexOf(value) !== -1;
    };
}

var Types = {
    array: array,
    bool: bool,
    func: func,
    number: number,
    object: object,
    string: string,
    instanceOf: instanceOf,
    oneOf: oneOf
};

for (var typeFnName in Types) {
    addIsRequired(Types[typeFnName]);
}

var ARG_SPEC = {
    Types: Types
};

module.exports = ARG_SPEC;
