var react1 = {
    id: "abc",
    size: {
        width: 33,
        height: 11
    },
    color: "blue"
};
var react2 = {
    id: "132",
    size: {
        width: 33,
        height: 11
    }
};
react2.color = "black";
var react3 = {};
var react4 = {};
var react5 = {
    id: "1234",
    size: {
        width: 5,
        height: 2
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
console.log(react5.getArea());
//========
