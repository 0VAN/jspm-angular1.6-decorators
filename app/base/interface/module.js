import 'angular-ui-router'
import {Module} from 'angular-decorators';

import config from './config'
import interfaceHeader from './components/interface-header/controller'
import interfaceMenu from './components/interface-menu/controller'

let module = Module('interfaceApp', ['ui.router']);

module.add(interfaceHeader)
module.add(interfaceMenu)

module.config(config)

export default  module.name