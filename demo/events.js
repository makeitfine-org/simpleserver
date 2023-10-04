const EventEmitter = require('events')

const emit = new EventEmitter()

emit.on("anything", d => {
    console.log("On: (anything) => ", d)
})

// setTimeout(() => emit.emit("anything", {a: 1, b: "okey"}), 1000)
// setTimeout(() => emit.emit("anything", {a2: 21, b: "okey"}), 1000)

class Dis extends EventEmitter {
    subscribe(eN, cb) {
        console.log("[Subs...] => ", eN)
        this.on(eN, cb)
    }

    disp(eN, data) {
        console.log("[Disp...] => ", eN)
        this.emit(eN, data)
    }
}

const dis = new Dis();

dis.subscribe("a", d => console.log("a: ", d))
dis.subscribe("a", d => console.log("a: ", d))
dis.subscribe("a2", d => console.log("a2: ", d))
// dis.subscribe("a", d => console.log("a: ", d))

dis.disp("a", {a2: "o", a5: 1})
dis.disp("a", {a2: "o", a5: 1})
dis.disp("a2", {a5: "o", a5: 1})
//
// dis.disp("a", {a2: "o", a5: 1})
// // dis.disp("a", {a2: "o", a5: 1})
