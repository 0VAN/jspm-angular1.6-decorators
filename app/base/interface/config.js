

export default [
    '$stateProvider',
function($stateProvider){
    
    // States
    $stateProvider

    // Login
    .state({
        name: 'app',
        url: '/',
        template: '<interface-header></interface-header>' +
                  '<interface-menu></interface-menu>'
    });
}]