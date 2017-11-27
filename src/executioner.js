function Executioner(langDef){
    switch(langDef.VERSION) {
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
    //intrepret and run the code
    
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
