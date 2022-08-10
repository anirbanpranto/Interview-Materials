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
const events_1 = __importDefault(require("events"));
const perf_hooks_1 = __importDefault(require("perf_hooks"));
const start = perf_hooks_1.default.performance.now();
//call back for event "done"
const done = (start) => {
    console.log("Time taken (EventEmitter): ", perf_hooks_1.default.performance.now() - start);
};
//just wait
const wait = (me, source) => __awaiter(void 0, void 0, void 0, function* () {
    setTimeout(() => {
        console.log("BRUH @", source);
        me.sigma_number = 694201337;
    }, 100);
});
const wait_promise = (me, source) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("BRUH @", source);
            me.sigma_number = 694201337;
            resolve();
        }, 100);
    });
});
const test = () => {
    const me = {
        sigma_number: 0,
        notify: new events_1.default.EventEmitter()
    };
    //bind the callback
    me.notify.on("done", done);
    //create an observer for the object
    var chadProxy = new Proxy(me, {
        set: function (target, key, value) {
            if (key == 'sigma_number' && value == 694201337) {
                target.notify.emit("done", start);
            }
            target[key] = value;
            return true;
        }
    });
    //call loop
    wait(chadProxy, "event");
    wait(chadProxy, "event");
};
//normal way - this skips waiting and produces wrong value, as you can see that the BRUH @ normal is printed after the time taken printed
const test_normal = () => {
    const me_beta = {
        sigma_number: 0,
        notify: new events_1.default.EventEmitter()
    };
    //call wait twice
    wait(me_beta, "normal");
    wait_promise(me_beta, "normal");
    console.log("Time taken (normal):", perf_hooks_1.default.performance.now() - start);
};
//async-await
const test_async = () => __awaiter(void 0, void 0, void 0, function* () {
    const me_sigma = {
        sigma_number: 0,
        notify: new events_1.default.EventEmitter()
    };
    //call wait - twice
    yield wait_promise(me_sigma, "async");
    yield wait_promise(me_sigma, "async_2");
    console.log("Time taken (async):", perf_hooks_1.default.performance.now() - start);
});
test_async(); //called first - finishes last (blocking I/O)
test(); //called in middle, finishes in half the time for both than async
test_normal(); //called last, finishes first with wrong value
//so - eventemitter + observer could finish two tasks in 101ms
//async await promises finished two tasks in 201ms (linear)
//normal is staright up wrong
/*
Time taken (normal): 0.47490501403808594
BRUH @ async
BRUH @ event
Time taken (EventEmitter):  101.43830901384354
BRUH @ event
Time taken (EventEmitter):  101.8775600194931
BRUH @ normal
BRUH @ normal
BRUH @ async_2
Time taken (async): 201.48966401815414
*/
