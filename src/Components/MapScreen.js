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
  TouchableOpacity,
  Button,
  View
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import axios from 'axios';
import { Actions} from 'react-native-router-flux';
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
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  callout() {
    Actions.witnessed({
      latitude: this.state.locationCoordinates.latitude,
      longitude: this.state.locationCoordinates.longitude
      })
  }

  handleLocationInput(textInput) {
    this.setState({
      locationInput: textInput
    });
  }

  updateLocationCoordinates(response){
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

  handleLocationChange(response){
    this.setState({
      locationCoordiante: response
    })
  }

  render() {
    return (
      <View style={styles.overallViewContainer}>
      <MapView
        provider={ PROVIDER_GOOGLE }
        style={ styles.container }
        region={this.state.locationCoordinates}
        onRegionChange={this.handleLocationChange}
        zoomEnabled={true} 
        scrollEnabled={true} 
      >
        <MapView.Marker 
          coordinate={{
            latitude: 37.7749,
            longitude: -122.4194,
          }}
        />
        </MapView>
        <View style={styles.allNonMapThings}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder=" Where to?"
              style={ styles.input }
              onChangeText={this.handleLocationInput}
              value={this.state.locationInput}
              onSubmitEditing={this.handleSubmit.bind(this)}
            />
          </View>

          <View style={styles.button} >
            <TouchableOpacity 
              onPress={this.callout.bind(this)}
            > 
              <Text style = {styles.buttonText} >
                Call it out 
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  overallViewContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
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
    marginRight: 'auto',
  },
  allNonMapThings: {
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  inputContainer: {
    elevation: 1,
    backgroundColor: 'white',
    width: '90%',
    height: '6%',
    top: 40,
    borderRadius: 3,
    shadowOpacity: 0.75,
    shadowRadius: 1,
    shadowColor: 'gray',
    shadowOffset: { height: 0, width: 0}
  },
  button: {
    elevation: 1,
    position: 'absolute',
    bottom: 25,
    backgroundColor: '#ff6600',
    borderRadius: 10,
    width: '60%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.75,
    shadowRadius: 1,
    shadowColor: 'gray',
    shadowOffset: { height: 0, width: 0}
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',

  },
  wrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
});

AppRegistry.registerComponent('MapScreen', () => MapScreen);
