/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import SearchBox from SearchBox;


export default class CatCallOutApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationInput: ''
    };

    this.handleLocationInput = this.handleLocationInput.bind(this);
  }

  handleLocationInput(textInput) {
    this.setState({
      locationInput: textInput
    });
  }

  render() {
    return (
      <MapView
        provider={ PROVIDER_GOOGLE }
        style={ styles.container }
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Where to?"
            style={ styles.input }
            onChangeText={this.handleLocationInput}
            value={this.state.locationInput}
          />
        </View>
      </MapView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  },
  input: {
    elevation: 1,
    width: '99%',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  inputContainer: {
    elevation: 1,
    backgroundColor: 'white',
    top: 50,
    width: '70%'
  }
});

AppRegistry.registerComponent('CatCallOutApp', () => CatCallOutApp);
