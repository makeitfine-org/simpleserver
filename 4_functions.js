function add(a, b) {
    return a + b;
}
function toUpperCase(str) {
    return str.trim().toUpperCase();
}
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    else if (a && !b) {
        return { x: a, y: undefined };
    }
    else {
        return { x: a, y: b };
    }
}
console.log("empty: ", position());
console.log("One: ", position(42));
console.log("Two: ", position(42, 5));
