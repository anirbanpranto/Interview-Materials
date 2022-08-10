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
const object_sizeof_1 = __importDefault(require("object-sizeof"));
const start = perf_hooks_1.default.performance.now();
const random_id = (i) => __awaiter(void 0, void 0, void 0, function* () {
    return "abcd" + i + Math.floor(Math.random() * 100000);
});
const do_it_fast = (tot, payload) => {
    const me = {
        sigma_list: [],
        notify: new events_1.default.EventEmitter()
    };
    //call back for event "done"
    const done = (start) => {
        console.log("Time taken (EventEmitter): ", perf_hooks_1.default.performance.now() - start);
        if (me.sigma_list.length === payload * tot) {
            data_listener(me.sigma_list);
        }
    };
    const database_op = (me, source) => __awaiter(void 0, void 0, void 0, function* () {
        for (let i = 0; i < payload; i++) {
            const _id = random_id(yield random_id(i));
            me.sigma_list.push({
                "agenda": "based and redpilled",
                _id: _id
            });
            if (i === payload - 1) {
                me.notify.emit("done", start);
            }
        }
    });
    const test = () => {
        //bind the callback
        me.notify.on("done", done);
        //create an observer for the object
        for (let i = 0; i < tot; i++) {
            database_op(me, "event");
        }
    };
    test();
};
const do_async = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const me_sigma = {
        sigma_list: [],
        notify: new events_1.default.EventEmitter()
    };
    const database_promise = (me, source) => __awaiter(void 0, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
            const list = [];
            for (let i = 0; i < payload; i++) {
                const _id = random_id(yield random_id(i));
                list.push({
                    "agenda": "based and redpilled",
                    _id: _id
                });
                if (list.length === payload) {
                    me.sigma_list = me.sigma_list.concat(list);
                    resolve();
                }
            }
        }));
    });
    const test_async = () => __awaiter(void 0, void 0, void 0, function* () {
        //call wait - twice
        yield database_promise(me_sigma, "async");
        console.log("Time taken (async):", perf_hooks_1.default.performance.now() - start);
        yield database_promise(me_sigma, "async");
        console.log("Time taken (async):", perf_hooks_1.default.performance.now() - start);
        yield database_promise(me_sigma, "async");
        console.log("Time taken (async):", perf_hooks_1.default.performance.now() - start);
        yield database_promise(me_sigma, "async");
        console.log("Time taken (async):", perf_hooks_1.default.performance.now() - start);
        yield database_promise(me_sigma, "async");
        console.log("Time taken (async):", perf_hooks_1.default.performance.now() - start);
        yield database_promise(me_sigma, "async");
        console.log("Time taken (async):", perf_hooks_1.default.performance.now() - start);
        yield database_promise(me_sigma, "async");
        console.log("Time taken (async):", perf_hooks_1.default.performance.now() - start);
        yield database_promise(me_sigma, "async");
        console.log("Time taken (async):", perf_hooks_1.default.performance.now() - start);
        yield database_promise(me_sigma, "async");
        console.log("Time taken (async):", perf_hooks_1.default.performance.now() - start);
        yield database_promise(me_sigma, "async");
        console.log("Time taken (async):", perf_hooks_1.default.performance.now() - start);
        return me_sigma.sigma_list;
    });
    const data = yield test_async();
    return data;
});
const do_async_all = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const me_sigma = {
        sigma_list: [],
        notify: new events_1.default.EventEmitter()
    };
    const database_promise = (me, source) => __awaiter(void 0, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
            const list = [];
            for (let i = 0; i < payload; i++) {
                const _id = random_id(yield random_id(i));
                list.push({
                    "agenda": "based and redpilled",
                    _id: _id
                });
                if (list.length === payload) {
                    me.sigma_list = me.sigma_list.concat(list);
                    resolve();
                }
            }
        }));
    });
    const test_async = () => __awaiter(void 0, void 0, void 0, function* () {
        //call wait - twice
        const a = database_promise(me_sigma, "async");
        const b = database_promise(me_sigma, "async");
        const c = database_promise(me_sigma, "async");
        const d = database_promise(me_sigma, "async");
        const e = database_promise(me_sigma, "async");
        const f = database_promise(me_sigma, "async");
        const g = database_promise(me_sigma, "async");
        const h = database_promise(me_sigma, "async");
        const i = database_promise(me_sigma, "async");
        const j = database_promise(me_sigma, "async");
        yield Promise.all([a, b, c, d, e, f, g, h, i, j]);
        console.log("Time taken (async):", perf_hooks_1.default.performance.now() - start);
        return me_sigma.sigma_list;
    });
    const data = yield test_async();
    return data;
});
const data_listener = (data) => {
    console.log((0, object_sizeof_1.default)(data));
};
do_async_all(100000).then((data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log((0, object_sizeof_1.default)(data));
}));
//do_it_fast(10, 100000);
//this is a very realistic situation where we might need to query a lot of data and then accumulate them and send back,
//using async await is a good idea for cleaner code, you can await for each of the queries and then compile + send
//but isn't that a bit slow? we can also make use of evenemitters to run a lot of queries at the same time. They'll essentially run at the same
//time and give much faster speeds of queries
//eventemitters were 3 seconds faster in this operation
/*
Time taken (EventEmitter):  25.034569025039673
Time taken (EventEmitter):  28.254244029521942
Time taken (EventEmitter):  28.323511004447937
Time taken (EventEmitter):  28.372530043125153
Time taken (EventEmitter):  28.420822024345398
280000
*/
/*
Time taken (async): 9.15219497680664
Time taken (async): 17.0558939576149
Time taken (async): 21.49824196100235
Time taken (async): 25.81445801258087
Time taken (async): 31.436866998672485
280000
*/
//10 requests, 1000000 objects
//200 MS slower when using async await, not the worst thing ever tbh, but much easier to code and reason about
/*
Time taken (EventEmitter):  3590.369550049305
Time taken (EventEmitter):  3593.759325027466
Time taken (EventEmitter):  3593.8294590115547
Time taken (EventEmitter):  3593.8773249983788
Time taken (EventEmitter):  3593.9233980178833
Time taken (EventEmitter):  3593.9661099910736
Time taken (EventEmitter):  3593.99042904377
Time taken (EventEmitter):  3594.021629035473
Time taken (EventEmitter):  3594.055833041668
Time taken (EventEmitter):  3594.0907230377197
56000000
*/
/*
Time taken (async): 358.61273699998856
Time taken (async): 718.3886960148811
Time taken (async): 1061.2716150283813
Time taken (async): 1473.394446015358
Time taken (async): 1795.9541340470314
Time taken (async): 2196.7335230112076
Time taken (async): 2598.6712770462036
Time taken (async): 2930.196160018444
Time taken (async): 3265.7238780260086
Time taken (async): 3735.4031580090523
56000000
*/ 
