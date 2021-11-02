
function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function hi() {
        console.log('HI THERE')
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        return console.log('YOOO')
    }
}