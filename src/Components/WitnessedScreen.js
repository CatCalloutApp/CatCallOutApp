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
import { Actions } from 'react-native-router-flux';

export default class WitnessedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: this.props.latitude,
      longitude: this.props.longitude,
    }
  }

  goToDatePick(role) {
    Actions.datepick({
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      role: role
      })
  }

  render() {
    return (
      <View style={styles.fullScreenWrapper}>
          <Text style={styles.textHeading}>
            I'm calling out
          </Text>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => this.goToDatePick.bind(this)('witnessed')}
            >
                <Text style = {styles.buttonText} >
                  something I witnessed 
                </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => this.goToDatePick.bind(this)('experienced')}
            >
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


      