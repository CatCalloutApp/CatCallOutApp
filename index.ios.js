/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import MapScreen from './src/Components/MapScreen';
import DatePickScreen from './src/Components/DatePickScreen';
import WitnessedScreen from './src/Components/WitnessedScreen'

export default class CatCallOutApp extends Component {
  
  render() {
    return (
      <WitnessedScreen/>
    );
  }
}


AppRegistry.registerComponent('CatCallOutApp', () => CatCallOutApp);
