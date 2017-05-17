

export default [
    '$stateProvider',
function($stateProvider){
    
    // States
    $stateProvider

    // Login
    .state({
        name: 'app',
        url: '',
        template: '<div class="app"><interface-header></interface-header>' +
                  '<ui-view><interface-menu></interface-menu></ui-view></div>'
    });
}]