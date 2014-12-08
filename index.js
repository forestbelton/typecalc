'use strict';

var d = document,
    input = d.querySelector('#input'),
    output = d.querySelector('#output'),
    error = d.querySelector('#error'),
    Parser = require('./built/parser'),
    generate = require('./lib/generate');
    
input.addEventListener('keydown', function() {
    var parsed = '';

    try {
        parsed = Parser.parse(input.value);
        error.innerHTML = '';
    } catch(e) {
        error.innerHTML = e.toString();
        return;
    }

    output.value = generate(parsed);
});
