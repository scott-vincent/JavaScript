"use strict";
var format = require('string-format');

function myfunc1(param1, param2) {
    console.log("myfunc1 says " + param1 + " " + param2);
    myfunc2(param1, param2, "Scott");
}

function myfunc2(p1, p2, p3) {
    var msg = format("myfunc2 says {} {} {}", p1, p2, p3);
    console.log(msg);
}

console.log("Welcome to JavaScript - Examine the Call Stack in the debugger");
myfunc1("hello", "there");