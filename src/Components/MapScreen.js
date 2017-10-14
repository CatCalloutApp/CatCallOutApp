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
        },
        witnessed: [],
        experienced: []
    };

    this.handleLocationInput = this.handleLocationInput.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  componentDidMount() {
    this.getMapMarkers()
    this.setState({
      locationCoordinates: {
        latitude: 37.7749,
        longitude: -122.4194,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    })
  }

  getMapMarkers() {
    axios.get('http://localhost:3000/reports')
    .then((response) => {
      this.setState({
        witnessed: response.data.witnessed.map(this.parseCoordinatesToNumber),
        experienced: response.data.experienced.map(this.parseCoordinatesToNumber) })
    }
    )
    .catch(error => console.log("Map Marker axios error: ", error))
  }

  callout() {
    Actions.witnessed({
      latitude: this.state.locationCoordinates.latitude,
      longitude: this.state.locationCoordinates.longitude
      })
  }

  handleLocationInput(textInput) {
    this.getMapMarkers();
    this.setState({
      locationInput: textInput
    });
  }

  updateLocationCoordinates(response){
    if(response.data.results[0].geometry) {
      const info = response.data.results[0].geometry.location
      const latDelta = Number(response.data.results[0].geometry.viewport.northeast.lat) - Number(response.data.results[0].geometry.viewport.southwest.lat)
      const lngDelta = Number(response.data.results[0].geometry.viewport.northeast.lng) - Number(response.data.results[0].geometry.viewport.southwest.lng)
       this.setState({
        locationCoordinates: {
          latitude: Number(info.lat),
          longitude: Number(info.lng),
          latitudeDelta: latDelta,
          longitudeDelta: lngDelta,
        }
      })
    } else {
      console.log('Address not found! :(')
    }
  }

  handleSubmit(textInput) {
    axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + this.state.locationInput.split(' ').join('') + "&key=" + REACT_APP_GOOGLE_PLACES_API)
    .then(response => this.updateLocationCoordinates(response))
    .catch(error => console.log("Failjax: ", error))
  }

  handleLocationChange(response){
    this.setState({
      locationCoordinates: response
    })
  }

  createWitnessedMarkers(){
    return this.state.witnessed.map((harassment) =>
      <MapView.Marker
        key={harassment.id}
        coordinate={{
          latitude: harassment.latitude,
          longitude: harassment.longitude,
        }}
      />
    );
  }

  parseCoordinatesToNumber(coordObject){
    return Object.assign(coordObject, {latitude: Number(coordObject.latitude),
            longitude: Number(coordObject.longitude)})
  }


  createExperiencedMarkers(){
    return this.state.experienced.map((harassment) =>
      <MapView.Marker
        key={harassment.id}
        coordinate={{
          latitude: harassment.latitude,
          longitude: harassment.longitude,
        }}
      />
    );
  }

  render() {
    return (
      <View style={styles.overallViewContainer}>
      <MapView
        provider={ PROVIDER_GOOGLE }
        style={ styles.container }
        region={this.state.locationCoordinates}
        onRegionChangeComplete={this.handleLocationChange}
        zoomEnabled={true}
        scrollEnabled={true}
      >
        {this.createWitnessedMarkers()}
        {this.createExperiencedMarkers()}
        </MapView>
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
    );
  }
}

const styles = StyleSheet.create({
  overallViewContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    alignItems: 'center'
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
    height: 40,
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
