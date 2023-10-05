function add(a: number, b: number): number {
    return a + b
}

function toUpperCase(str: string): string {
    return str.trim().toUpperCase()
}

interface MyPosition {
    x: number | undefined
    y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
    default: string
}

function position(): MyPosition

function position(a: number): MyPositionWithDefault

function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
    if (!a && !b) {
        return {x: undefined, y: undefined}
    } else if (a && !b) {
        return {x: a, y: undefined}
    } else {
        return {x: a, y: b}
    }
}

console.log("empty: ", position())
console.log("One: ", position(42))
console.log("Two: ", position(42, 5))