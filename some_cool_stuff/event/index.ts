import events from "events"
import performance from "perf_hooks"

const start = performance.performance.now();

type giga_chad = {
    sigma_number: number,
    notify: events.EventEmitter
}

//call back for event "done"
const done = (start: number) => {
    console.log("Time taken (EventEmitter): ", performance.performance.now() - start);
}

//just wait
const wait = async (me: giga_chad, source: string) => {
    setTimeout(() => {
        console.log("BRUH @", source);
        me.sigma_number = 694201337;
    }, 100);
}

const wait_promise = async (me: giga_chad, source: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("BRUH @", source);
            me.sigma_number = 694201337;
            resolve();
        }, 100);
    });
}

const test = () => {
    const me: giga_chad = {
        sigma_number: 0,
        notify: new events.EventEmitter()
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
}


//normal way - this skips waiting and produces wrong value, as you can see that the BRUH @ normal is printed after the time taken printed
const test_normal = () => {
    const me_beta: giga_chad = {
        sigma_number: 0,
        notify: new events.EventEmitter()
    };

    //call wait twice
    wait(me_beta, "normal");
    wait_promise(me_beta, "normal");
    console.log("Time taken (normal):", performance.performance.now() - start);
}

//async-await
const test_async = async () => {
    const me_sigma: giga_chad = {
        sigma_number: 0,
        notify: new events.EventEmitter()
    }

    //call wait - twice
    await wait_promise(me_sigma, "async");
    await wait_promise(me_sigma, "async_2");
    console.log("Time taken (async):", performance.performance.now() - start);
}

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
