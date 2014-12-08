'use strict';

var d = document,
    input = d.querySelector('#input'),
    output = d.querySelector('#output'),
    error = d.querySelector('#error'),
    Parser = require('./built/parser'),
    generate = require('./lib/generate');
    
input.addEventListener('keyup', function() {
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

var exs = d.querySelectorAll('.example');
Array.prototype.forEach.call(exs, function(ex) {
    ex.addEventListener('click', function(e) {
        e.preventDefault();
        input.value = ex.dataset.eqn;

        var evt = new KeyboardEvent('keyup', {
            keyCode: 13
        });
        input.dispatchEvent(evt);
    });
});

