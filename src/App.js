import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import MapScreen from './Components/MapScreen';
import DatePickScreen from './Components/DatePickScreen';
import WitnessedScreen from './Components/WitnessedScreen';
import ThanksScreen from './Components/ThanksScreen';
import axios from 'axios';
import { Scene, Router, Actions, NavBar } from 'react-native-router-flux';

class App extends Component {
  constructor() {
    super();
  }

render() {
  return(
    <Router>
      <Scene key="root">
        <Scene 
          key="map"
          component={MapScreen}
          callout={this.callout}
          hideNavBar={true}
          initial 
        />
        <Scene 
          key="witnessed"
          component={WitnessedScreen}
          hideNavBar={true}
        />
        <Scene 
          key="datepick"
          component={DatePickScreen}
          hideNavBar={true}
        />
        <Scene 
          key="thanks"
          component={ThanksScreen}
          hideNavBar={true}
        />
      </Scene>
    </Router>
    );
  }
}

export default App;