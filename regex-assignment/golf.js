    let pattern;
    let text;
    let result;
    
    pattern = /car|cat/gi
    text = 'what a big cat'
    result = pattern.test(text)
    
    pattern = /pop|prop/gi
    text = 'he has a pop corn'
    result = pattern.test(text)
    
    
    pattern = /ferret|ferry|ferrari/gi
    text = 'ferrari e50 is my favourite car'
    result = pattern.test(text)
    
    
    pattern = /\w+ious/gi
    text = 'he acts so suspicious'
    result = pattern.test(text)
    
    
    pattern = /\s+[\.,:;]/gi
    text = '    .,:'
    result = pattern.test(text)
    
    
    pattern = /\w{7,}/gi
    text = 'This is a carcas'
    result = pattern.test(text);
