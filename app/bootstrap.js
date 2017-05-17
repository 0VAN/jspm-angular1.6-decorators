import angular from 'angular';
import mainModule from './main.js';

angular.element(document).ready(function() {
    angular.bootstrap(document, [mainModule.name]);
});