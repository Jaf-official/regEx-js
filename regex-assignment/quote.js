        let pattern = /(\b'\b)|'/g   
        let story = `'It's such a time to be alive!'`
        let doubleQuotedStory =  story.replace(pattern, function(match, p1){
            return p1? p1: `"`
        })
        console.log(doubleQuotedStory);
