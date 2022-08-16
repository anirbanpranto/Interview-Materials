export const prime_1 = async (num: number) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

export const prime_2 = async (num: number) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % 1 === 0) return false;
    }
    return true;
}