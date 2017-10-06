/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import MapScreen from './src/Components/MapScreen';
import DatePickScreen from './src/Components/DatePickScreen'

export default class CatCallOutApp extends Component {
  
  render() {
    return (
      <DatePickScreen/>
    );
  }
}


AppRegistry.registerComponent('CatCallOutApp', () => CatCallOutApp);
