import {Component, Inject, View, Module} from 'angular-decorators';
import template from './template.html'


@Component({ selector : 'login-section' })
@Inject('$q')
@View({ template: template })
class ComponentCtrl{
	constructor($q){ 
        console.log(1);
    }
}


export default ComponentCtrl;