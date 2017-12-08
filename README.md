# Executioner JS #  
__An opensource javascript library for intrepreting, and running functional languages in the browser__  
__[executioner.io](http://www.executioner.io/ "Executioner JS Website")__   

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
   