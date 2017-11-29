/*
*   Executioner JS Language Deffinition Template
*
*   Used to define the syntax and behavior of a language 
*   to be intrepreted and run by Executioner JS.
*
*   Version 1.0.0
*/

//A language deffinition is created by defining the syntax for procedures and declaring datatypes
TEMPLATELANG = {
    VERSION: "1.0.0",                           //Executioner JS template version so that executioner can properly parse the template
    ENDMARKER: ';',                             //Language endmarker, what the language uses to mark the end of a 'line of code'
    ENTRYPOINT: "void main(){PROCEDURE_A}",     //Where executioner looks to find the entrypoint procedure
    PROCEDURES: {                               //Language's built in procedures, includes basic operators and built in functions
        //Executioner JS has many basic procedures built in.
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

        //Procedures that modify variables in storage can be created by accessing the executioner instance's runtime property through this.runtime
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

        //Any procedures can be created
        'print(A)': function(a){
            Console.log(a);
        },
        'pow(A, B)': function(a, b){
            return Math.pow(a, b);
        },
        'sqrt(A)': function(a){
            return Math.sqrt(a);
        },
        
        //Control structures can be created as procedures
        '(PROCEDURE_A)': function(a){
            a();
        },
        'if(A){PROCEDURE_B}': function(a, b){
            if (a) b();
        },
        'while(A){PROCEDURE_B}': function(a, b){
            while (a) b();
        },

        //Datatypes in a language are also defined by a procedure
        'var A': function(a){
            if(!this.runtime[a]){
                this.runtime[a] = undefined;
            }
        },
        //TODO: Implement int example
    }
};