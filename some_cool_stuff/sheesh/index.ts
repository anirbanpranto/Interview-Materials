
import events from "events"
import performance from "perf_hooks"
import sizeof from 'object-sizeof'


const start = performance.performance.now();

type giga_chad = {
    sigma_list: any[],
    notify: events.EventEmitter
}

const random_id = async (i: number) => {
    return "abcd" + i + Math.floor(Math.random() * 100000);
}

const do_it_fast = (tot: number, payload: number) => {
    const me: giga_chad = {
        sigma_list: [],
        notify: new events.EventEmitter()
    };
    //call back for event "done"
    const done = (start: number) => {
        console.log("Time taken (EventEmitter): ", performance.performance.now() - start);
        if (me.sigma_list.length === payload * tot) {
            data_listener(me.sigma_list);
        }
    }

    const database_op = async (me: giga_chad, source: string) => {
        for (let i = 0; i < payload; i++) {
            const _id = await random_id(i);
            me.sigma_list.push({
                "agenda": "based and redpilled",
                _id: _id
            });
            if (i === payload - 1) {
                me.notify.emit("done", start);
            }
        }
    }

    const test = () => {
        //bind the callback
        me.notify.on("done", done);
        //create an observer for the object
        for (let i = 0; i < tot; i++) {
            database_op(me, "event");
        }
    }
    test();
}

const do_async = async (payload: number) => {
    const me_sigma: giga_chad = {
        sigma_list: [],
        notify: new events.EventEmitter()
    }
    const database_promise = async (me: giga_chad, source: string): Promise<void> => {
        return new Promise(async (resolve, reject) => {
            const list: any[] = []
            for (let i = 0; i < payload; i++) {
                const _id = await random_id(i);
                list.push({
                    "agenda": "based and redpilled",
                    _id: _id
                });
                if (list.length === payload) {
                    me.sigma_list = me.sigma_list.concat(list);
                    resolve();
                }
            }
        });
    }

    const test_async = async () => {
        //call wait - twice
        await database_promise(me_sigma, "async");
        console.log("Time taken (async):", performance.performance.now() - start);
        await database_promise(me_sigma, "async");
        console.log("Time taken (async):", performance.performance.now() - start);
        await database_promise(me_sigma, "async");
        console.log("Time taken (async):", performance.performance.now() - start);
        await database_promise(me_sigma, "async");
        console.log("Time taken (async):", performance.performance.now() - start);
        await database_promise(me_sigma, "async");
        console.log("Time taken (async):", performance.performance.now() - start);
        await database_promise(me_sigma, "async");
        console.log("Time taken (async):", performance.performance.now() - start);
        await database_promise(me_sigma, "async");
        console.log("Time taken (async):", performance.performance.now() - start);
        await database_promise(me_sigma, "async");
        console.log("Time taken (async):", performance.performance.now() - start);
        await database_promise(me_sigma, "async");
        console.log("Time taken (async):", performance.performance.now() - start);
        await database_promise(me_sigma, "async");
        console.log("Time taken (async):", performance.performance.now() - start);
        return me_sigma.sigma_list;
    }

    const data = await test_async();
    return data;
}

const do_async_all = async (payload: number) => {
    const me_sigma: giga_chad = {
        sigma_list: [],
        notify: new events.EventEmitter()
    }
    const database_promise = async (me: giga_chad, source: string): Promise<void> => {
        return new Promise(async (resolve, reject) => {
            const list: any[] = []
            for (let i = 0; i < payload; i++) {
                const _id = await random_id(i);
                list.push({
                    "agenda": "based and redpilled",
                    _id: _id
                });
                if (list.length === payload) {
                    me.sigma_list = me.sigma_list.concat(list);
                    resolve();
                }
            }
        });
    }

    const test_async = async () => {
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
        await Promise.all([a, b, c, d, e, f, g, h, i, j]);
        console.log("Time taken (async):", performance.performance.now() - start);
        return me_sigma.sigma_list;
    }

    const data = await test_async();
    return data;
}

const data_listener = (data) => {
    console.log(sizeof(data))
}

do_async_all(100000).then(async data => {
    console.log(sizeof(data))
});

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
//200 ms slower when using async await, not the worst thing ever tbh, but much easier to code and reason about
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

//using Promise.all(Promise<T>[]) was the fastest, it beat the best eventemitter performance by 40 ms
/*
Time taken (async): 3552.8345170021057
56000000
*/
