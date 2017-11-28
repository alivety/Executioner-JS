# Defining a Language for the Executioner #  
__Executioner JS uses javascript objects to define the behavior of a language to be intrepreted.__  

    LANGUAGE = {
        VERSION: "1.0.0",
        ENDMARKER: ';',
        ENTRYPOINT: "void main(){PROCEDURE_A}", 
        PROCEDURES: {
            '+': Executioner.procedures.add,
            '-': Executioner.procedures.subtract,
            '*': Executioner.procedures.multiply,
            '/': Executioner.procedures.divide,
            '%': Executioner.procedures.modulus, 
            '!': Executioner.procedures.not,
            '&&': Executioner.procedures.and,
            '||': Executioner.procedures.or,
            '==': Executioner.procedures.isEqual,
            '>': Executioner.procedures.greaterThan,
            '>=': Executioner.procedures.greaterThanOrEqual,
            '<': Executioner.procedures.lessThan,
            '<=': Executioner.procedures.lessThanOrEqual,
            '=': function(a, b){
                this.runtime[a]=b;  
            },
            '+=': function(a, b){
                this.runtime[a]+=b;
            },
            '-=': function(a, b){
                this.runtime[a]-=b;
            },
            '*=': function(a, b){
                this.runtime[a]*=b;
            },
            '/=': function(a, b){
                this.runtime[a]/=b;
            },
            'print(A)': function(a){
                Console.log(a);
            },
            'pow(A, B)': function(a, b){
                return Math.pow(a, b);
            },
            'sqrt(A)': function(a){
                return Math.sqrt(a);
            },
            'if(A){PROCEDURE_B}': function(a, b){
                if (a) b();
            },
            'while(A){PROCEDURE_B}': function(a, b){
                while (a) b();
            }
        },
        DATATYPES: {
            "var A": {
                VERIFIER: function(a){
                    return true;
                }
            }
        }
    };

### Version ###  
The version property of the object is used by the executioner for proper parsing of the language definition object. If the property is left blank the executioner will assume the most recent stable version.  

### Endmarker ###  
The endmarker property is used by the executioner to determine what defines the end of a 'line of code' for the language.  
  
### Entrypoint ###  
The entrypoint peoperty is used to determine where to start running a piece of code from.  
  
### Procedures ###  
  
### Data Types ###