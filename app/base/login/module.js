import 'angular-ui-router'
import {Module} from 'angular-decorators';

import loginSection from './components/login-section/controller'

let module = Module('Login', ['ui.router']);

module.add(loginSection)

export default  module.name