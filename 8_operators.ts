interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person//

const nameA: PersonKeys = "name"
const name2: PersonKeys = "name"
const name3: PersonKeys = "age"
// const name4: PersonKeys = "age3" //err

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, "_id" | "createdAt">
type UserKeysNoMeta2 = Exclude<User, "name" | "email">

let u1: UserKeysNoMeta = "name"
u1 = "email"
