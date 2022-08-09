"use strict";
exports.__esModule = true;
var events_1 = require("events");
var done = function () {
    console.log("Done 50");
};
var count = function (a) {
    for (var i = 0; i < 50; i++) {
        console.log(i);
        if (i == 50) {
            a.notify.emit("done");
        }
    }
};
var test = function () {
    var a = {
        x: 0,
        notify: new events_1["default"].EventEmitter()
    };
    //bind the callback
    a.notify.on("done", done);
    //call loop
    count(a);
};
test();
