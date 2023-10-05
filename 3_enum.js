var MShip;
(function (MShip) {
    MShip[MShip["Simple"] = 0] = "Simple";
    MShip[MShip["Standard"] = 1] = "Standard";
    MShip[MShip["Premium"] = 2] = "Premium";
})(MShip || (MShip = {}));
var mem = MShip.Standard;
var memR = MShip[2];
console.log(mem);
console.log(memR);
var SM;
(function (SM) {
    SM["FB"] = "FB";
    SM["IN"] = "IN";
    SM["GO"] = "Google";
})(SM || (SM = {}));
var s = SM.GO;
console.log(s);
