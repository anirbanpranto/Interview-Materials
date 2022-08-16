declare class mapper_singleton {
    classMap: {
        function1: (num: number) => Promise<boolean>;
        function2: (num: number) => Promise<boolean>;
    };
    runner: (func: string) => any;
}
declare const _default: mapper_singleton;
export default _default;
