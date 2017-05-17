

export default [
    '$stateProvider',
function($stateProvider){
    
    // States
    $stateProvider

    // Login
    .state({
        name: 'login',
        url: '/login',
        template: '<login-section>login</login-section>'
    });
}]