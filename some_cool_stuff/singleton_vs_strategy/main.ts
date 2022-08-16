import p_single from "./singleton"
import p_strategy from "./strategy"

const singleton_test = async () => {
    const funcs = []
    for (let i = 1; i <= 100000; i++) {
        const func = p_single.runner("function1");
        const isPrime = await func(i);
        funcs.push(isPrime);
    }
    for (let i = 1; i <= 100000; i++) {
        const func = p_single.runner("function2");
        const isPrime = await func(i);
        funcs.push(isPrime);
    }
    const data = await Promise.all(funcs);
    console.log(data.length);
    const used = process.memoryUsage();
    for (let key in used) {
        console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
    }
}

const strategy_test = async () => {
    const funcs = []
    for (let i = 1; i <= 100000; i++) {
        const strat_1 = new p_strategy("function1");
        const isPrime = strat_1.runner.prime(i);
        funcs.push(isPrime);
    }
    for (let i = 1; i <= 100000; i++) {
        const strat_2 = new p_strategy("function2");
        const isPrime = strat_2.runner.prime(i);
        funcs.push(isPrime);
    }
    const data = await Promise.all(funcs);
    console.log(data.length);
    const used = process.memoryUsage();
    for (let key in used) {
        console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
    }
}

singleton_test();