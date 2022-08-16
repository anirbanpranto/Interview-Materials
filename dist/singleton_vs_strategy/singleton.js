"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prime_3 = require("./prime");
const prime_4 = require("./prime");
class mapper_singleton {
    constructor() {
        this.classMap = {
            function1: prime_3.prime_1,
            function2: prime_4.prime_2
        };
        this.runner = (func) => {
            return this.classMap[func];
        };
    }
}
exports.default = new mapper_singleton();
