interface React {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const react1: React = {
    id: "abc",
    size: {
        width: 33,
        height: 11
    },
    color: "blue"
}

const react2: React = {
    id: "132",
    size: {
        width: 33,
        height: 11
    }
}

react2.color = "black"

const react3 = {} as React

const react4 = <React>{}

//===================

interface RA extends React {
    getArea: () => number
}

const react5: RA = {
    id: "1234",
    size: {
        width: 5,
        height: 2
    }, getArea(): number {
        return this.size.width * this.size.height
    }
}
console.log(react5.getArea());

//========

interface IClock {
    time: Date

    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

// ========================
interface Styles {
    [key: string]: string
}


const css: Styles = {
    border: "1px solid black",
    marginTop: "2px",
    borderRadius: "5px",
}

//============

