import 'angular-ui-router'
import {Module} from 'angular-decorators';

import config from './config'
import login from './login/module'
import interfaceApp from './interface/module'

let module = Module('Base', [login, interfaceApp, 'ui.router']);

module.config(config)

export default  module.name