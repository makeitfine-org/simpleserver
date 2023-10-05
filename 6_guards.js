function strip(x) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
}
console.log(typeof strip("s"));
console.log(typeof strip("s"));
var MyRes = /** @class */ (function () {
    function MyRes() {
        this.header = "resp header";
        this.result = "resp res";
    }
    return MyRes;
}());
var MyErr = /** @class */ (function () {
    function MyErr() {
        this.header = "err header";
        this.mess = "err mess";
    }
    return MyErr;
}());
function han(res) {
    if (res instanceof MyRes) {
        console.log(res.result + res.header);
    }
    else {
        console.log(res.mess + res.header);
    }
}
function setAl(type) {
    //....
}
setAl('success');
setAl('warn');
setAl('dang');
setAl('da');
