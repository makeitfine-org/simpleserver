class TS {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `${name}: TS version is ${this.version}`
    }
}

class Car {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel
        // this.numberOfWheels = 555
    }
}

class CarTwo {
    readonly numberOfWheels: number = 4

    constructor(readonly model: string) {
    }
}

let carTwo = new CarTwo("33")
console.log(carTwo.model)

//========== modificator

class Animal {
    protected voice: string = ''
    public color: string = "black"
    om: string = "black"

    private go() {
        console.log("go");
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()

cat.setVoice("5")

// === Abstract classes

abstract class Component {
    abstract render(): void

    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log("Comp");
    }

    info(): string {
        return "Info";
    }
}


