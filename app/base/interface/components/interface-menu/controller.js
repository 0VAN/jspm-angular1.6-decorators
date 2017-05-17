import {Component, Inject, View, Module} from 'angular-decorators';
import template from './template.html'


@Component({ selector : 'interface-menu' })
@Inject('$q')
@View({ template: template })
class InterfaceMenuCtrl{
	constructor($q){ 
        console.log("menu");
    }
}


export default InterfaceMenuCtrl;