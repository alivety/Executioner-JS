/*
*   Executioner JS Language Definition Template
*
*   Used to define the syntax and behavior of a language 
*   to be interpreted and run by Executioner JS.
*
*   Version 1.0.0
*/

//A language definition is created by defining the syntax for procedures and declaring datatypes
TEMPLATELANG = {
    VERSION: "1.0.0",                           //Executioner JS template version so that executioner can properly parse the template
    ENDMARKER: ';',                             //Language endmarker, what the language uses to mark the end of a 'line of code'
    ENDOPERATOR: '(end)',						//When executioner receives this value, it stops parsing the code
    ENTRYPOINT: 'main',     					//The function to be called by executioner to start the program
    TYPES: [									//A list of types, to determine where functions are defined
    	'void'
    ],
    PROCEDURES: {                               //Language's built in procedures, includes basic operators and built in functions
        
    	//Executioner JS has many basic procedures built in.
    	
    	/**
    	 * Procedure Definition Explanation
    	 * 
    	 * the function field is, of course, the function to be called
    	 * the def field contains information for the parser
    	 * type is either infix (the operator occurs between two values) or prefix (the operator occurs before a value)
    	 * the data array contains 
    	 */
    	
        '+': {
        	"function": Executioner.procedures.add,
        	"def": {
        		"type": "infix",
        		"data": [6]
        	}
        },
        '-': {
        	"function": Executioner.procedures.substract,
        	"def": {
        		"type": "infix",
        		"data": [6]
        	}
        },
        '*': {
        	"function": Executioner.procedures.multiply,
        	"def": {
        		"type": "infix",
        		"data": [7]
        	}
        },
        '/': {
        	"function": Executioner.procedures.divide,
        	"def": {
        		"type": "infix",
        		"data": [7]
        	}
        },
        '%': {
        	"function": Executioner.procedures.modulus,
        	"def": {
        		"type": "infix",
        		"data": [6]
        	}
        },
        '!': {
        	"function": Executioner.procedures.not,
        	"def": {
        		"type": "prefix",
        		"data": [6]
        	}
        },
        '&&': {
        	"function": Executioner.procedures.and,
        	"def": {
        		"type": "infix",
        		"data": [3]
        	}
        },
        '||': {
        	"function": Executioner.procedures.or,
        	"def": {
        		"type": "infix",
        		"data": [2]
        	}
        },
        '==': {
        	"function": Executioner.procedures.isEqual,
        	"def": {
        		"type": "infix",
        		"data": [4]
        	}
        },
        '>': {
        	"function": Executioner.procedures.greaterThan,
        	"def": {
        		"type": "infix",
        		"data": [5]
        	}
        },
        '>=': {
        	"function": Executioner.procedures.greaterThanOrEqual,
        	"def": {
        		"type": "infix",
        		"data": [5]
        	}
        },
        '<': {
        	"function": Executioner.procedures.lessThan,
        	"def": {
        		"type": "infix",
        		"data": [5]
        	}
        },
        '<=': {
        	"function": Executioner.procedures.lessThanOrEqual,
        	"def": {
        		"type": "infix",
        		"data": [5]
        	}
        },
        '=': {
        	"function": function(a,b){
        		this.runtime[a]=b;
        	},
        	"def": {
        		"type":"infix",
        		"data":[1]
        	}
        },

        //Procedures that modify variables in storage can be created by accessing the executioner instance's runtime property through this.runtime
        '+=': {
        		"function": function(a,b){
        			this.runtime[a]+=b;
        		},
        		"def": {
        			"type": "infix",
        			"data": [1]
        		}
        	},
        '-=': {
            	"function": function(a,b){
            		this.runtime[a]-=b;
            	},
            	"def": {
            		"type": "infix",
            		"data": [5]
            	}
            },
       '*=': {
        		"function": function(a,b){
        			this.runtime[a]*=b;
        		},
        		"def": {
        			"type": "infix",
        			"data": [1]
        		}
        	},
       '/=': {
        		"function": function(a,b){
        			this.runtime[a]/=b;
        		},
        		"def": {
        			"type": "infix",
        			"data": [1]
        		}
        	},
    }
};