import { prime_1 } from "./prime"
import { prime_2 } from "./prime"

class mapper_singleton {
    public classMap = {
        function1: prime_1,
        function2: prime_2
    };

    public runner = (func: string) => {
        return this.classMap[func];
    }
}

export default new mapper_singleton();