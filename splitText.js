function splitStringt(text) {
    var r = [];
    for (i = 1; i < arguments.length; i++) {
        r.push(text.substring(arguments[i], (i == arguments.length -1 ? text.length : arguments[i +1])));
    }
    return r;
}

