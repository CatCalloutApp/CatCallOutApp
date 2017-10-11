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
import axios from 'axios';

export default class ThanksScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      role: this.props.role,
      date: this.props.date
    }
  }

goBackToMap(role) {
    Actions.map({
      latitude: this.state.latitude,
      longitude: this.state.longitude
      })
  }

dateParser() {
  let monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

  let dateToConvert = this.state.date
  let month = monthNames[dateToConvert.getMonth()]
  let day = dateToConvert.getDate()
  let time = dateToConvert.toTimeString().slice(0, 5)

  return month + ' ' + day + ' at ' + time 
}

  render() {
    return (
      <View style={styles.fullScreenWrapper}>
          <Text style={styles.textHeading}>
            Way to call it out!
          </Text>
          <Text style={styles.textHeading2}>
            You {this.state.role} street harassment on
          </Text>
          <Text style={styles.textHeadingDate}>
            {this.dateParser()}.
          </Text>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={this.goBackToMap.bind(this)}
            >
                <Text style = {styles.buttonText} >
                  Submit 
                </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cancelButton}>
            <TouchableOpacity
              onPress={this.goBackToMap.bind(this)}>
                <Text style = {styles.cancelButtonText} >
                  Cancel  
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
    height: '10%',
    width: '85%',
    textAlign: 'center',
  },
  textHeading2: {
    color: '#ff6600',
    fontSize: 28,
    justifyContent: 'center',
    fontWeight: 'bold',
    height: '10%',
    width: '85%',
    textAlign: 'center'
  },
    textHeadingDate: {
    color: '#ff6600',
    fontSize: 28,
    justifyContent: 'center',
    fontWeight: 'bold',
    height: '10%',
    width: '85%',
    textAlign: 'center'
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
  cancelButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  cancelButtonText: {
    color: '#ff6600',
    fontSize: 16,
    textDecorationLine: 'underline'
  }
})

AppRegistry.registerComponent('ThanksScreen', () => ThanksScreen);


      