import {Component, Inject, View, Module} from 'angular-decorators';
import template from './template.html'


@Component({ selector : 'interface-header' })
@Inject('$q')
@View({ template: template })
class InterfaceHeaderCtrl{
	constructor($q){ 
        console.log("header");
    }
}


export default InterfaceHeaderCtrl;