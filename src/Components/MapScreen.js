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
  Button,
  View
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import axios from 'axios';
import {REACT_APP_GOOGLE_MAPS_API, REACT_APP_GOOGLE_PLACES_API} from 'react-native-dotenv';

export default class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationInput: '',
      locationCoordinates: {
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }
    };

    this.handleLocationInput = this.handleLocationInput.bind(this);
  }

  handleLocationInput(textInput) {
    this.setState({
      locationInput: textInput
    });
  }

  updateLocationCoordinates(response){
    console.log(response)
    var info = response.data.results[0].geometry.location 
    this.setState({
      locationCoordinates: {
        latitude: info.lat,
        longitude: info.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    })
  }

  handleSubmit(textInput) {
    axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + this.state.locationInput.split(' ').join('') + "&key=" + REACT_APP_GOOGLE_PLACES_API)
    .then(response => this.updateLocationCoordinates(response))
    .catch(error => console.log("Failjax: ", error))
  }

  handleReport() {
    console.log('reported!')

  }

  render() {
    return (
      <MapView
        provider={ PROVIDER_GOOGLE }
        style={ styles.container }
        initialRegion={this.state.locationCoordinates}
        zoomEnabled={true} 
        scrollEnabled={true} 
      >
        <MapView.Marker 
          coordinate={{
            latitude: 37.7749,
            longitude: -122.4194,
          }}
        />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Where to?"
            style={ styles.input }
            onChangeText={this.handleLocationInput}
            value={this.state.locationInput}
            onSubmitEditing={this.handleSubmit.bind(this)}
          />
        </View>
        <Button 
          style={styles.button}
          title="Report at my location"
          onPress={this.handleReport.bind(this)}
        />
      </MapView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
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
  },
  button: {
    elevation: 1,
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  wrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
});

AppRegistry.registerComponent('MapScreen', () => MapScreen);
