        let pattern = /^[+-]?(?:\d*\.\d+|\d+\.\d*|\d+)(?:[eE][+-]?\d+)?$/
        let inputText = "-2.5e-2"
        let result = pattern.test(inputText);
        console.log(result);
