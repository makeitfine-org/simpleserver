enum MShip {
    Simple,
    Standard,
    Premium
}

const mem = MShip.Standard
const memR = MShip[2]

console.log(mem);
console.log(memR);

enum SM {
    FB = "FB",
    IN = "IN",
    GO = "Google"
}

const s = SM.GO
console.log(s);