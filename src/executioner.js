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

Executioner.prototype.go =  function(code){
    
}

Executioner.prototype.lex = function(code) {
	var tokens=[], c, i=0
	var operators=Object.keys(this.langDef.PROCEDURES);
	var isOperator = function (c) {
		return operators.includes(c);
	},
	  isDigit = function (c) { return /[0-9]/.test(c); },
	  isWhiteSpace = function (c) { return /\s/.test(c); },
	  isIdentifier = function (c) { return typeof c === "string" && !isOperator(c) && !isDigit(c) && !isWhiteSpace(c); };
	var advance = function () { return c = code[++i]; };
	var addToken = function (type, value, datatype) {
	  tokens.push({
	    type: type,
	    value: value,
	    datatype: datatype
	 });
	};
	while (i < code.length) {
	  c = code[i];
	  if (isWhiteSpace(c)) {
		  advance();
	  } else if (isOperator(c)) {
		  addToken(c,c,"operator");
		  advance();
	  } else if (isDigit(c)) {
		  var num=c;
		  while (isDigit(advance())) {
			  num+=c;
		  }
		  if (c==".") {
			  do num+=c; while (isDigit(advance()));
		  }
		  num=parseFloat(num);
		  addToken("number",num,"number");
	  } else if (isIdentifier(c)) {
		  var idn = c;
		  while (isIdentifier(advance())) idn += c;
		  addToken("identifier", idn,"identifier");
	  }
	}
	tokens.push({
		"type":"(end)",
		"value":"(end)"
	});
	console.log(tokens);
	return tokens;
}

Executioner.prototype.compile = function(tokens){
	var parseTree = [];
	var symbols = {},
	symbol = function (id, nud, lbp, led) {
	  var sym = symbols[id] || {};
	  symbols[id] = {
	    lbp: sym.lbp || lbp,
	    nud: sym.nud || nud,
	    led: sym.led || led
	  };
	};

	var interpretToken = function (token) {
	  var sym = Object.create(symbols[token.type]);
	  sym.type = token.type;
	  sym.value = token.value;
	  return sym;
	};
	
	var i = 0, token = function () { return interpretToken(tokens[i]); };
	var advance = function () { i++; return token(); };
	
	var expression = function (rbp) {
		var left, t = token();
		advance();
		if (!t.nud) {
			throw "Unexpected token: " + t.type;
		}
		left = t.nud(t);
		while (rbp < token().lbp) {
			t = token();
		    advance();
		    if (!t.led) { 
		    	throw "Unexpected token: " + t.type;
		    }
		  left = t.led(left);
		 }
		 return left;
		};
		
		var infix = function (id, lbp, rbp, led) {
			rbp = rbp || lbp;
			symbol(id, null, lbp, led || function (left) {
			  return {
			    type: id,
			    left: left,
			    right: expression(rbp)
			    };
			  });
			},
			prefix = function (id, rbp) {
			  symbol(id, function () {
			    return {
			      type: id,
			      right: expression(rbp)
			    };
			  });
			};
			
		Object.keys(this.langDef.PROCEDURES).forEach(key=>{
			for (var i = 0; i < this.langDef.PROCEDURES[key]["def"]["data"].length; i++) {
				eval("var arg"+ i +" = "+ this.langDef.PROCEDURES[key]["def"]["data"][i]);
			}
			if (this.langDef.PROCEDURES[key]["def"]["type"]=="infix") {
				if (this.langDef.PROCEDURES[key]["def"]["data"].length==1) {
					infix(key,arg0);
				} else if (this.langDef.PROCEDURES[key]["def"]["data"].length==2) {
					infix(key,arg0,arg1);
				} else if (this.langDef.PROCEDURES[key]["def"]["data"].length>2) {
					infix(key,arg0,arg1,arg2);
				}
			} else if (this.langDef.PROCEDURES[key]["def"]["type"]=="prefix") {
				prefix(key,this.langDef.PROCEDURES[key]["def"]["data"][0]);
			}
		});
			
		symbol(",");
		symbol(")");
		symbol("(end)");
		symbol(this.langDef.ENDMARKER);
			
		symbol("(", function () {
			value = expression(2);
				if (token().type !== ")") { 
					throw "Expected closing parenthesis ')'";
				}
				advance();
				return value;
			});
			symbol("number", function (number) {
				return number;
			});
				
			symbol("identifier", function (name) {
				if (token().type === "(") {
					var args = [];
					if (tokens[i + 1].type === ")") { 
						advance();
					} else {
						do {
					      advance();
					      args.push(expression(2));
					      } while (token().type === ",");
					      if (token().type !== ")") { 
					    	  throw "Expected closing parenthesis ')'";
					      }
					    }
					    advance();
					    return {
					      type: "call",
					      args: args,
					      name: name.value
					    };
					  }
					  return name;
					});
					
			infix("=", 1, 2, function (left) {
				if (left.type === "call") {
					for (var i = 0; i < left.args.length; i++) {
						if (left.args[i].type !== "identifier") 
							throw "Invalid argument name";
					      }
					     return {
					        type: "function",
					        name: left.name,
					        args: left.args,
					        value: expression(2)
					      };
					    } else if (left.type === "identifier") {
					      return {
					        type: "assign",
					        name: left.value,
					        value: expression(2)
					      };
					    }
					    else throw "Invalid lvalue";
		});
	
	
	while (token().type !== "(end)") {
		parseTree.push(expression(0));
	}
					
	console.log(parseTree);
	return parseTree;
}

Executioner.prototype.declareFunction = function(){
	
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
