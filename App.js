import React, { Component } from 'react';
import {  StyleSheet} from 'react-native';
import { Router, Scene} from 'react-native-router-flux';
import Home from './pages/Home';
import Login from './pages/login';
import Dashboard from './pages/Dashboard';
import Furniture from './pages/Furniture';


export default class App extends Component {

  render() {

    return (

      <Router >
        <Scene key="root">
        <Scene key="Home"component={Home}  hideNavBar={true}/>
        <Scene key="login"component={Login}  hideNavBar={true}/>
        <Scene key="Dashboard"component={Dashboard}  hideNavBar={true}/>
        <Scene key="Furniture"component={Furniture}  hideNavBar={true}/>

      </Scene>

      </Router>
    )
  }
}

