module.exports = function(ast) {
    'use strict';

    function evalCall(name, params) {
        return name + ' ' + params.join(' ');
    }

    var wholeTy = evalCall(ast.name, ast.params);

    function tyName(t) {
        switch(typeof t) {
            case 'number':
                switch(t) {
                    case 0:
                        return 'Void';
                        break;

                    case 1:
                        return '()';
                        break;

                    case 2:
                        return 'Bool';
                        break;

                    default:
                        return 'N' + opt;
                }
                break;

            case 'string':
                return t;

            case 'object':
                switch(t.value) {
                    case '*':
                        return '(' + tyName(t.children[0]) + ', ' +
                            tyName(t.children[1]) + ')';
                        break;

                    case 'call':
                        return evalCall(t.children[0], t.children[1]);
                        break;

                    default:
                        throw 'unknown op: ' + t.value;
                }
                break;

            default:
                throw 'unknown summand: ' + t;
        }
    }

    var opts = ast.rhs.map(function(opt, i) {
        return ast.name + 'C' + i + ' :: ' + tyName(opt) + ' -> ' + wholeTy;
    });

    return 'data ' + wholeTy + ' where\n  ' +
        opts.join('\n  ') + '\n';
}
