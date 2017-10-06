/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import MapScreen from './src/Components/MapScreen';
import DatePickScreen from './src/Components/DatePickScreen';
import WitnessedScreen from './src/Components/WitnessedScreen';
import ThanksScreen from './src/Components/ThanksScreen';

export default class CatCallOutApp extends Component {
  
  render() {
    return (
      <ThanksScreen/>
    );
  }
}


AppRegistry.registerComponent('CatCallOutApp', () => CatCallOutApp);
