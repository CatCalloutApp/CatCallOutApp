/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import MapScreen from './src/Components/MapScreen';
import FormScreen from './src/Components/FormScreen'

export default class CatCallOutApp extends Component {
  
  render() {
    return (
      <MapScreen/>
    );
  }
}


AppRegistry.registerComponent('CatCallOutApp', () => CatCallOutApp);
