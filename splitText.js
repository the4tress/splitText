    function splitStringt(text) {
        var result = [];
        for (split = 1; split < arguments.length; split++) {
            result.push(text.substring(arguments[split], (split == 
arguments.length -1 ? text.length : arguments[split +1])));
        }
        return result;
    }

