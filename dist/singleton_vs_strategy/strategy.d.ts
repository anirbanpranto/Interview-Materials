interface prime_provider {
    prime(num: number): Promise<boolean>;
}
declare class prime_default implements prime_provider {
    prime(num: number): Promise<boolean>;
}
export default class prime_manager {
    private classMap;
    runner: prime_default;
    constructor(classname: string);
}
export {};
