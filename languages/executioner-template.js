/*
*   Executioner JS Language Deffinition Template
*
*   Used to define the syntax and behavior of a language 
*   to be intrepreted and run by Executioner JS.
*
*   Version 0.0.1
*/

//A language deffinition is created by adding it to the executioner lagnuages property
Executioner.languages.templateLanguage = {
    VERSION: "0.0.1",                   //Executioner JS template version so that executioner can properly parse the template
    ENDMARKER: ';',                     //Language endmarker, what the language uses to mark the end of a 'line of code'
    PROCEDURES: {                       //Language's built in procedures, includes basic operators and built in functions
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

        //Procedures that modify variables in storage can be created by accessing the executioner instance's runtime property.
        '=': function(a, b){
            console.log(this);
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

        //Any procedures can be created.
        'print': function(a){
            Console.log(a);
        }
    }
};