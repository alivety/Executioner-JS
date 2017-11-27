# Executioner JS #  
__[executioner.io](http://www.executioner.io/ "Executioner JS Website")__  
***  
__An opensource javascript library for creating, intrepreting, and running functional languages in the browser__

    <script src="src/executioner.js"></script>
    <script src="languages/executioner-template.js"></script>
    <script type="text/javascript">
        var code = `
            void main() {
                var x = 1;
                while(x < 10000){
                    x = pow(x, x+1);
                    print(x);
                }
            }`;
        var e = new Executioner(TEMPLATELANG);
        e.go(code);
        e.stop();
    </script>
  
  
### Executioner Templates ###
__Executioner parses languages based on the procedures and datatypes defined in an executioner language definition file__  

    TEMPLATELANG = {
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