import p_single from "./singleton"
import p_strategy from "./strategy"
import { performance } from "perf_hooks";

const start = performance.now();

const singleton_test = async () => {
  const funcs = []
  for (let i = 2; i <= 1000000; i++) {
    const func = p_single.runner("function1");
    const isPrime = func(i);
    funcs.push(isPrime);
  }
  for (let i = 2; i <= 1000000; i++) {
    const func = p_single.runner("function2");
    const isPrime = func(i);
    funcs.push(isPrime);
  }
  const data = await Promise.all(funcs);
  console.log(data);
  const used = process.memoryUsage();
  for (let key in used) {
    console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
  }
  console.log("Time taken : ", performance.now() - start)
}

const strategy_test = async () => {
  const funcs = []
  for (let i = 1; i <= 1000000; i++) {
    const strat_1 = new p_strategy("function1");
    const isPrime = strat_1.runner.prime(i);
    funcs.push(isPrime);
  }
  for (let i = 1; i <= 1000000; i++) {
    const strat_2 = new p_strategy("function2");
    const isPrime = strat_2.runner.prime(i);
    funcs.push(isPrime);
  }
  const data = await Promise.all(funcs);
  console.log(data);
  const used = process.memoryUsage();
  for (let key in used) {
    console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
  }
  console.log("Time taken : ", performance.now() - start)
}

strategy_test();
singleton_test();
