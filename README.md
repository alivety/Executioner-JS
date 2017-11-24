# Executioner JS #
__An opensource javascript library for creating, intrepreting, and running functional languages in the browser__

    <script src="src/executioner.js"></script>
    <script src="languages/executioner-template.js"></script>
    <script type="text/javascript">
        var e = new Executioner(Executioner.languages.templateLanguage);
        e.go("print(Hello World!);");
        e.stop();
    </script>    