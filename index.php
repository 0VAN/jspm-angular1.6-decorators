<html>

<head>
    <!--Import Google Icon Font-->
    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css">

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  
    <link href="style/general.css" rel="stylesheet">
    <link href="style/login.css" rel="stylesheet">

<?php if(file_exists('build.js')):?>    
    <script src="build.js"></script>
<?php else: ?>
    <script src="jspm_packages/system.js"></script>
    <script src="jspm.config.js"></script>
    <script>
        System.import('app')
        .catch(console.error.bind(console));
    </script>
<?php endif; ?>

</head>
<body>
    <ui-view></ui-view>
</body>
</html>
