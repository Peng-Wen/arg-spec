var argSpec = require('./arg_spec');
console.log('True: ' + argSpec.Types.string(''));
console.log('True: ' + argSpec.Types.string());
console.log('False: ' + argSpec.Types.string(null));
console.log('False: ' + argSpec.Types.string(123));
console.log('False: ' + argSpec.Types.string({}));
console.log('False: ' + argSpec.Types.string.isRequired());
console.log('True: ' + argSpec.Types.string.isRequired('hello world'));
console.log('True: ' + argSpec.Types.object.isRequired({a: 'a'}));
console.log('True: ' + argSpec.Types.object.isRequired(null));
console.log('True: ' + argSpec.Types.object());
console.log('False: ' + argSpec.Types.object('abc'));

