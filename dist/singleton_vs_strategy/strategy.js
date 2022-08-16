"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class prime_1 {
    prime(num) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0)
                    return false;
            }
            return true;
        });
    }
}
;
class prime_2 {
    prime(num) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0)
                    return false;
            }
            return true;
        });
    }
}
;
class prime_default {
    prime(num) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0)
                    return false;
            }
            return true;
        });
    }
}
;
class prime_manager {
    constructor(classname) {
        this.classMap = {
            function1: prime_1,
            function2: prime_2
        };
        this.runner = new prime_default;
        this.runner = new this.classMap[classname];
    }
}
exports.default = prime_manager;
