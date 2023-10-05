const isFetch: boolean = true
const isLoading: boolean = false

let int: number = 41
const float: number = 41.2

const mes: string = "Hello TS"

const numArr: number[] = [1, 1, 2, 3, 5, 8, 13]
const numArr2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const strArr: string[] = ["ab", "bc"]

const contact: [string, number] = ["OK", 1134]

// Any
let vari: any = 42
vari = "ABC"


function sMN(name: string): void {
    console.log(name);
}

sMN("Hi, there")

// Never
function thErr(mess: string): never {
    // throw new Error(mess)
    while (true) {

    }
}

// Type

type Login = string

const login: Login = "abc"
// const login2: Login = 222

type ID = string | number

const id1: ID = 333
const id2: ID = "sdf"
// const id3: ID = true

type SOME = string | null | undefined | void