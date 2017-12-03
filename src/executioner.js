function Executioner(langDef){
    this.langDef = langDef;
    switch(this.langDef.VERSION) {
        case "1.0.0":
            Object.keys(langDef.PROCEDURES).forEach(function(key){
                Executioner.prototype[key] = langDef.PROCEDURES[key];
            });
            break;
        default:
            Object.keys(langDef.PROCEDURES).forEach(function(key){
                Executioner.prototype[key] = langDef.PROCEDURES[key];
            });
            break;
    }
    
    this.runtime = {

    }; 
}

Executioner.prototype.go = async function(code){
    
}

Executioner.prototype.compile = function(code){
    var tokens = [];
    for(var i = 0; i < code.length; i++){
        Object.keys(this.langDef.PROCEDURES).forEach((key) => {
            var processedKey = key.split(/(ARG_+[A-Z])|(PROCEDURE_+[A-Z])/g).filter((n)=>{return n != undefined});
            if(code.startsWith(processedKey[0], i)){
                processedKey.forEach((part, index) =>{
                    if(/(ARG_+[A-Z])/.test(part)){
                        
                    } else if(/(PROCEDURE_+[A-Z])/.test(part)){
                        //the function gets recursive here
                    } else {
                        if(code.substring(i, i + part.length).includes(part)){
                            tokens.push({
                                type: "key",
                                value: part
                            });
                            i += part.length;
                        }
                    }
                });
            }
        }); 
    }
    console.log(tokens);
}
    

Executioner.prototype.stop = function(){
    //stop the executioner is any code is being run
}

Executioner.procedures = {
    add: function(a, b){
        return a+b;
    },
    subtract: function(a, b){
        return a-b;
    },
    multiply: function(a, b){
        return a*b;
    },
    divide: function(a, b){
        return a/b;
    },
    modulus: function(a, b){
        return a%b;
    }, 
    not: function(a){
        return !a;
    },
    and: function(a, b){
        return a&&b;
    },
    or: function(a, b){
        return a||b;
    },
    isEqual: function(a, b){
        return a==b;
    },
    greaterThan: function(a, b){
        return a>b;
    },
    greaterThanOrEqual: function(a, b){
        return a>=b;
    },
    lessThan: function(a, b){
        return a<b;
    },
    lessThanOrEqual: function(a, b){
        return a<=b;
    }
};
