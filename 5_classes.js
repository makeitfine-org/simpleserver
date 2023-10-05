var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TS = /** @class */ (function () {
    function TS(version) {
        this.version = version;
    }
    TS.prototype.info = function (name) {
        return "".concat(name, ": TS version is ").concat(this.version);
    };
    return TS;
}());
var Car = /** @class */ (function () {
    function Car(theModel) {
        this.numberOfWheels = 4;
        this.model = theModel;
        // this.numberOfWheels = 555
    }
    return Car;
}());
var CarTwo = /** @class */ (function () {
    function CarTwo(model) {
        this.model = model;
        this.numberOfWheels = 4;
    }
    return CarTwo;
}());
var carTwo = new CarTwo("33");
console.log(carTwo.model);
//========== modificator
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = '';
        this.color = "black";
        this.om = "black";
    }
    Animal.prototype.go = function () {
        console.log("go");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.setVoice("5");
// === Abstract classes
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log("Comp");
    };
    AppComponent.prototype.info = function () {
        return "Info";
    };
    return AppComponent;
}(Component));
