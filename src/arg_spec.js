
function addIsRequired(typeFn) {
    typeFn.isRequired = function(value) {
        return (typeof value !== 'undefined') && typeFn(value);
    };
}

function string(value) {
    return (typeof value === 'undefined') || (typeof value === 'string');
}

function number(value) {
    return (typeof value === 'undefined') || (typeof value === 'number');
}

function object(value) {
    return (typeof value === 'undefined') || (typeof value === 'object');   
}

var Types = {
    string: string,
    number: number,
    object: object
};

for (var typeFnName in Types) {
    addIsRequired(Types[typeFnName]);
}

var ARG_SPEC = {
    Types: Types
};

module.exports = ARG_SPEC;
