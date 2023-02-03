// first attempt
// Beats: Runtime 68.69% / Memory 0%

function fizzBuzz(n: number): string[] {
    return [...Array(n)].map((el,i) => {
        const curr = i+1
        if (curr % 3 === 0 && curr % 5 === 0) {
            return "FizzBuzz"
        }
        if (curr % 3 === 0) {
            return "Fizz"
        } 
        if (curr % 5 === 0) {
            return "Buzz"
        }
        return curr+''
    })
};
