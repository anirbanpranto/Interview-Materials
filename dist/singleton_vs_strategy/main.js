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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const singleton_1 = __importDefault(require("./singleton"));
const strategy_1 = __importDefault(require("./strategy"));
const perf_hooks_1 = require("perf_hooks");
const start = perf_hooks_1.performance.now();
const singleton_test = () => __awaiter(void 0, void 0, void 0, function* () {
    const funcs = [];
    for (let i = 2; i <= 1000000; i++) {
        const func = singleton_1.default.runner("function1");
        const isPrime = func(i);
        funcs.push(isPrime);
    }
    for (let i = 2; i <= 1000000; i++) {
        const func = singleton_1.default.runner("function2");
        const isPrime = func(i);
        funcs.push(isPrime);
    }
    const data = yield Promise.all(funcs);
    console.log(data);
    const used = process.memoryUsage();
    for (let key in used) {
        console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
    }
    console.log("Time taken : ", perf_hooks_1.performance.now() - start);
});
const strategy_test = () => __awaiter(void 0, void 0, void 0, function* () {
    const funcs = [];
    for (let i = 1; i <= 1000000; i++) {
        const strat_1 = new strategy_1.default("function1");
        const isPrime = strat_1.runner.prime(i);
        funcs.push(isPrime);
    }
    for (let i = 1; i <= 1000000; i++) {
        const strat_2 = new strategy_1.default("function2");
        const isPrime = strat_2.runner.prime(i);
        funcs.push(isPrime);
    }
    const data = yield Promise.all(funcs);
    console.log(data);
    const used = process.memoryUsage();
    for (let key in used) {
        console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
    }
    console.log("Time taken : ", perf_hooks_1.performance.now() - start);
});
strategy_test();
singleton_test();
