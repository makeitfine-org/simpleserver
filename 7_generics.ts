const arrOfNums: Array<number> = [1, 1, 2, 3, 5, 8, 13]
const arrOfStrs: Array<string> = ["hello", "there", "!!!"]

function reverse<T>(arr: T[]): T[] {
    return arr.reverse()
}

console.log(reverse(arrOfNums));
console.log(reverse(arrOfStrs));


