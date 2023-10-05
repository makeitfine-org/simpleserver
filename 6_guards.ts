function strip(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed(2)
    }
    return x.trim()
}

console.log(typeof strip("s"));
console.log(typeof strip("s"));

class MyRes {
    header = "resp header"
    result = "resp res"
}

class MyErr {
    header = "err header"
    mess = "err mess"
}

function han(res: MyRes | MyErr) {
    if (res instanceof MyRes) {
        console.log(res.result + res.header);
    } else {
        console.log(res.mess + res.header)
    }
}

//===================

type AlertType = 'success' | 'dang' | 'warn'

function setAl(type: AlertType){
    //....
}

setAl('success')
setAl('warn')
setAl('dang')
// setAl('da')