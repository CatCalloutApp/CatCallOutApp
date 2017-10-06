import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  View,
  Switch,
  DatePickerIOS
} from 'react-native';
import axios from 'axios';

export default class WitnessedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      report: {
        experienced: true,
        map_location: this.props.location,
        date: new Date
      }
    }
  }

  render() {
    return (
      <View style={styles.fullScreenWrapper}>
          <Text style={styles.textHeading}>
            I'm calling out
          </Text>
          <View style={styles.button}>
            <TouchableOpacity>
                <Text style = {styles.buttonText} >
                  something I witnessed 
                </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity>
                <Text style = {styles.buttonText} >
                  something I experienced 
                </Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fullScreenWrapper: {
    alignItems: 'center',
    justifyContent: 'center',    
    width: '100%',
    height: '100%',
    backgroundColor: '#edeaea'
  },
  textHeading: {
    color: '#ff6600',
    fontSize: 28,
    justifyContent: 'center',
    fontWeight: 'bold',
    height: '7%',
    width: '85%',
    textAlign: 'center',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#edeaea',
    borderColor: '#ff6600',
    borderWidth: 1,
    borderRadius: 10,
    width: '75%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.75,
    shadowRadius: 1,
    shadowColor: 'gray',
    shadowOffset: { height: 0, width: 0},
    marginTop: 20,
    marginBottom: 20
  },
  buttonText: {
    color: '#ff6600',
    fontSize: 24,
  },
})

AppRegistry.registerComponent('WitnessedScreen', () => WitnessedScreen);


      