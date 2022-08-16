interface prime_provider {
    prime(num: number): Promise<boolean>
}

class prime_1 implements prime_provider {
    public async prime(num: number): Promise<boolean> {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
};

class prime_2 implements prime_provider {
    public async prime(num: number): Promise<boolean> {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
};

class prime_default implements prime_provider {
    public async prime(num: number): Promise<boolean> {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
};

export default class prime_manager {
    private classMap = {
        function1: prime_1,
        function2: prime_2
    };

    public runner = new prime_default;

    constructor(classname: string) {
        this.runner = new this.classMap[classname];
    }
}